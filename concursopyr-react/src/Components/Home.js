import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Input from "../Common/Input/Input";

import axios from "axios";

const Home = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [concursos, setConcursos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  function handleChange(value, name) {
    if (name === "user") {
      if (value === "") {
        setUserError(true);
      } else {
        setUserError(false);
        setUser(value);
      }
    } else if (name === "category") {
      console.log(value);
      if (value === "") {
        setCategoryError(true);
      } else {
        setCategoryError(false);
        setCategory(value);
      }
    }
  }
  function handleForm() {
    if (user === "") {
      setUserError(true);
    } else {
      setUserError(false);
    }
    if (category === "") {
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }
  }

  const getConcursos = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/concurso/concursos"
      );
      if (data) {
        setConcursos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUsuarios = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/auth/usuarios"
      );
      if (data) {
        setUsuarios(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function handleIniciarJuego() {
    handleForm();
    if (categoryError || userError) {
      return alert("Introduce la información para empezar a jugar");
    }
    const newUser = await usuarios.find((usuario) => usuario.nombre === user);
    if (newUser) {
      let { data } = await axios.post(
        "http://localhost:4000/api/juego/newjuego",
        {
          concurso: category,
          jugador: newUser._id,
          puntaje: 0,
        }
      );
      console.log(data);
      if (data) {
        window.location.href = `/juego/${data.juego._id}`;
      }
    } else {
      const newUs = await axios.post("http://localhost:4000/api/auth/newuser", {
        nombre: user,
      });
      let { data } = await axios.post(
        "http://localhost:4000/api/juego/newjuego",
        {
          concurso: category,
          jugador: newUs.data.id,
          puntaje: 0,
        }
      );
      console.log(data);
      if (newUs && data) {
        window.location.href = `/juego/${data.juego._id}`;
      }
    }
  }
  useEffect(() => {
    getConcursos();
    getUsuarios();
  }, []);
  return (
    <div >
      <h1 className="flex justify-center intems center mt-4 text-2xl ">Bienvenido a THE QA GAME</h1>
      <br />
      <h3 className="flex justify-center intems center mt-4 text-2xl ">Ingresa la información para empezar a jugar!</h3>
      <br />
      <section className="justify-center m-4">
        <label for="user">Nombre o UserGame</label>
        <Input
          attribute={{
            id: "user",
            name: "user",
            type: "text",
            placeholder: "Ingrese su nombre o un UserGame",
          }}
          handleChange={handleChange}
          param={userError}
          errorText={"Ingresa la información"}
        />
      </section>
      <section className="justify-center m-4">
        <label for="user">Categoria de las preguntas</label>
        <div className="input-container">
          <select
            required
            id="category"
            name="category"
            onChange={(e) => handleChange(e.target.value, e.target.name)}
            className={categoryError ? "input-error" : "regular-style"}
            value={category}
          >
            <option value={""}></option>
            {concursos.map((concurso) => (
              <option value={concurso._id}>{concurso.category}</option>
            ))}
          </select>

          {categoryError && (
            <label className="label-error">
              Selecciona una categoria para jugar
            </label>
          )}
        </div>
      </section>
      <section className="justify-center m-4 p-4">
        <Button variant="dark" className="bg-dark" onClick={handleIniciarJuego}>
          A Jugar!
        </Button>{" "}
      </section>
    </div>
  );
};

export default Home;

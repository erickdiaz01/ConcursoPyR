import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Input from "../Common/Input/Input";
const Home = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState(false);

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

  function handleIniciarJuego() {
    handleForm();
    if (categoryError || userError) {
      return alert("Introduce la información para empezar a jugar");
    }
  }

  return (
    <div>
      <h1>Bienvenido a THE QA GAME</h1>
      <br />
      <h3>Ingresa la información para empezar a jugar!</h3>
      <br />
      <section>
        <label for="user">Nombre o UserGame</label>
        <Input
          attribute={{
            id: "user",
            name: "user",
            type: "text",
            placeholder: "Ingrese su nombre o un UserGame",
          }}
          onChange={(e) => setUser(e.target.value)}
          param={userError}
          errorText={"Ingresa la información"}
        />
      </section>
      <section>
        <label for="user">Categoria de las preguntas</label>
        <div className="input-container">
          <select
            required
            id="category"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            list="Categories"
            className={categoryError? "input-error" : "regular-style"}
            value={category}
          />
            <datalist id="Categories">
                  {/* {producto?.map((producto) => (
                    <option value={producto.nombre}></option>
                  ))} */}
                </datalist>
          {categoryError && (
            <label className="label-error">Selecciona una categoria para jugar</label>
          )}
        </div>
      </section>
      <section>
       <Button variant="dark" onClick={handleIniciarJuego}>A Jugar!</Button>{' '}
      </section>
    </div>
  );
};

export default Home;

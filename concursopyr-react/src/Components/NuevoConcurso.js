import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Input from "../Common/Input/Input";
import axios from "axios";

const NuevoConcurso = () => {
  const [concursos, setConcursos] = useState([]);

  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [pregunta, setPregunta] = useState("");
  const [preguntaError, setPreguntaError] = useState(false);
  const [respuestaIncorrecta1, setRespuestaIncorrecta1] = useState("");
  const [incorrecta1Error, setIncorrecta1Error] = useState(false);
  const [respuestaIncorrecta2, setRespuestaIncorrecta2] = useState("");
  const [incorrecta2Error, setIncorrecta2Error] = useState(false);
  const [respuestaIncorrecta3, setRespuestaIncorrecta3] = useState("");
  const [incorrecta3Error, setIncorrecta3Error] = useState(false);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState("");
  const [correctaError, setCorrectaError] = useState(false);
  const [siguiente, setSiguiente] = useState(true);
  const [inicio, setInicio] = useState(true);
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [indiceNivel, setIndiceNivel] = useState(0);

  const [nivel1, setnivel1] = useState([]);
  const [nivel2, setnivel2] = useState([]);
  const [nivel3, setnivel3] = useState([]);
  const [nivel4, setnivel4] = useState([]);
  const [nivel5, setnivel5] = useState([]);

  function handleChange(value, name) {
    if (name === "category") {
      if (value === "") {
        setCategoryError(true);
      } else {
        setCategoryError(false);
        setCategory(value);
      }
    }
    if (name === "pregunta") {
      // setPregunta(value);
      if (value === "") {
        setPreguntaError(true);
      } else {
        setPreguntaError(false);
        setPregunta(value);
      }
    }
    if (name === "respuestaInc1") {
      setRespuestaIncorrecta1(value);
      if (value === "") {
        setIncorrecta1Error(true);
      } else {
        setIncorrecta1Error(false);
        setRespuestaIncorrecta1(value);
      }
    }
    if (name === "respuestaInc2") {
      setRespuestaIncorrecta2(value);
      if (value === "") {
        setIncorrecta2Error(true);
      } else {
        setIncorrecta2Error(false);
        setRespuestaIncorrecta2(value);
      }
    }
    if (name === "respuestaInc3") {
      setRespuestaIncorrecta3(value);
      if (value === "") {
        setIncorrecta3Error(true);
      } else {
        setIncorrecta3Error(false);
        setRespuestaIncorrecta3(value);
      }
    }
    if (name === "respuestaCorr") {
      setRespuestaCorrecta(value);
      if (value === "") {
        setCorrectaError(true);
      } else {
        setCorrectaError(false);
        setRespuestaCorrecta(value);
      }
    }
  }
  function handleSiguiente() {
    if (
      !preguntaError &&
      pregunta !== "" &&
      !correctaError &&
      respuestaCorrecta !== "" &&
      !incorrecta1Error &&
      respuestaIncorrecta1 !== "" &&
      !incorrecta2Error &&
      respuestaIncorrecta2 !== "" &&
      !incorrecta3Error &&
      respuestaIncorrecta3 !== ""
    ) {
      // eslint-disable-next-line default-case
      switch (indiceNivel) {
        case 0:
          nivel1.push({
            pregunta: pregunta,
            respuestaCorrecta: respuestaCorrecta,
            respuestasIncorrectas: [
              respuestaIncorrecta1,
              respuestaIncorrecta2,
              respuestaIncorrecta3,
            ],
          });

          break;

        case 1:
          nivel2.push({
            pregunta: pregunta,
            respuestaCorrecta: respuestaCorrecta,
            respuestasIncorrectas: [
              respuestaIncorrecta1,
              respuestaIncorrecta2,
              respuestaIncorrecta3,
            ],
          });

          break;

        case 2:
          nivel3.push({
            pregunta: pregunta,
            respuestaCorrecta: respuestaCorrecta,
            respuestasIncorrectas: [
              respuestaIncorrecta1,
              respuestaIncorrecta2,
              respuestaIncorrecta3,
            ],
          });
          break;
        case 3:
          nivel4.push({
            pregunta: pregunta,
            respuestaCorrecta: respuestaCorrecta,
            respuestasIncorrectas: [
              respuestaIncorrecta1,
              respuestaIncorrecta2,
              respuestaIncorrecta3,
            ],
          });
          break;
        case 4:
          nivel5.push({
            pregunta: pregunta,
            respuestaCorrecta: respuestaCorrecta,
            respuestasIncorrectas: [
              respuestaIncorrecta1,
              respuestaIncorrecta2,
              respuestaIncorrecta3,
            ],
          });
          break;

        default:
          console.log("terminado");
      }

      if (indicePregunta < 4) {
        setIndicePregunta(indicePregunta + 1);
      } else {
        if (indiceNivel < 4) {
          setIndicePregunta(0);
          setIndiceNivel(indiceNivel + 1);
        } else {
          setSiguiente(false);
        }
      }

      console.log(nivel1);
      console.log(nivel2);
      console.log(nivel3);
      console.log(nivel4);
      console.log(nivel5);
      console.log(indicePregunta);
      console.log(indiceNivel);

      setPregunta("");
      setRespuestaCorrecta("");
      setRespuestaIncorrecta1("");
      setRespuestaIncorrecta2("");
      setRespuestaIncorrecta3("");
    } else {
      return alert("Ingrese la información");
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
  async function handleCategory() {
    try {
      let concursoByCategory = await concursos.find(
        (concurso) => concurso.category === category
      );

      if (concursoByCategory) {
        return alert("Ya existe un concurso con dicha categoria");
      }
      setInicio(false);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleGuardarConcurso() {
    try {
      console.log(nivel1);
      console.log(nivel2);
      console.log(nivel3);
      console.log(nivel4);
      console.log(nivel5);
      let newConcurso = {
        category,
        nivel1: nivel1,
        nivel2: nivel2,
        nivel3: nivel3,
        nivel4: nivel4,
        nivel5: nivel5,
      };
      const { data, status } = await axios.post(
        "http://localhost:4000/api/concurso/newconcurso",
        newConcurso
      );
      if (status === (201 || 200)) {
        console.log(data);
        window.location.href = `/`;
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getConcursos();
  }, []);
  function renderizacionPreguntas(indiceNivel, indicePregunta) {
    return (
      <section>
        <h2 className="flex justify-center items-center text-2xl">
          Nuevo Concurso - {category}
        </h2>
        <br />
        <h3 className="flex justify-center items-center text-2xl">
          Nivel {indiceNivel + 1}
        </h3>

        <h4 className="flex justify-center items-center text-xl">
          Pregunta {indicePregunta + 1}
        </h4>
        <br />
        <div className="row ml-4 mr-4">
          <label for="pregunta">Ingrese la pregunta</label>
          <Input
            attribute={{
              id: "pregunta",
              name: "pregunta",
              type: "text",
              placeholder: "Ingrese la pregunta",
            }}
            handleChange={handleChange}
            param={preguntaError}
            errorText={"Ingresa la información"}
          />
        </div>
        <div className="row ml-4 mr-4">
          <div className="col-md-6">
            <label for="respuestaInc1">
              Ingrese una opción de respuesta incorrecta
            </label>
            <Input
              attribute={{
                id: "respuestaInc1",
                name: "respuestaInc1",
                type: "text",
                placeholder: "Ingrese la opción",
              }}
              handleChange={handleChange}
              param={incorrecta1Error}
              errorText={"Ingresa la información"}
            />
          </div>
          <div className="col-md-6">
            <label for="respuestaInc2">
              Ingrese una opción de respuesta incorrecta
            </label>
            <Input
              attribute={{
                id: "respuestaInc2",
                name: "respuestaInc2",
                type: "text",
                placeholder: "Ingrese la opción",
              }}
              handleChange={handleChange}
              param={incorrecta2Error}
              errorText={"Ingresa la información"}
            />
          </div>
        </div>
        <div className="row ml-4 mr-4">
          <div className="col-md-6">
            <label for="respuestaInc3">
              Ingrese una opción de respuesta incorrecta
            </label>
            <Input
              attribute={{
                id: "respuestaInc3",
                name: "respuestaInc3",
                type: "text",
                placeholder: "Ingrese la opción",
              }}
              handleChange={handleChange}
              param={incorrecta3Error}
              errorText={"Ingresa la información"}
            />
          </div>
          <div className="col-md-6">
            <label for="respuestaCorr">
              Ingrese una opción de respuesta CORRECTA
            </label>
            <Input
              attribute={{
                id: "respuestaCorr",
                name: "respuestaCorr",
                type: "text",
                placeholder: "Ingrese la respuesta correcta",
              }}
              handleChange={handleChange}
              param={correctaError}
              errorText={"Ingresa la información"}
            />
          </div>
        </div>
        {siguiente && (
          <div>
            <Button
              variant="success"
              className="bg-success flex justify-center items-center"
              onClick={handleSiguiente}
            >
              Siguiente
            </Button>
          </div>
        )}
      </section>
    );
  }

  return (
    <div>
      {inicio && (
        <section className="justify-center m-4">
          <h2 className="flex justify-center items- center text-2xl">
            Ingresa el nombre de la categoria del nuevo concurso
          </h2>
          <Input
            attribute={{
              id: "category",
              name: "category",
              type: "text",
              placeholder: "Ingrese la categoria",
            }}
            handleChange={handleChange}
            param={categoryError}
            errorText={"Ingresa la información"}
          />
          <div>
            <Button
              variant="dark"
              className=",
            bg-dark"
              onClick={handleCategory}
            >
              Ingresar Preguntas
            </Button>
          </div>
        </section>
      )}

      {siguiente &&
        !inicio &&
        renderizacionPreguntas(indiceNivel, indicePregunta)}
      {!siguiente && (
        <>
          <h2>Categoria del concurso: {category}</h2>
          <p>Preguntas: 25</p>
          <div>
            <Button
              variant="dark"
              className="bg-dark"
              onClick={handleGuardarConcurso}
            >
              Guardar concurso
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default NuevoConcurso;

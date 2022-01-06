import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Input from "../Common/Input/Input";

const NuevoConcurso = () => {
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

  const [preguntasNivel1, setPreguntasNivel1] = useState([]);
  const [preguntasNivel2, setPreguntasNivel2] = useState([]);
  const [preguntasNivel3, setPreguntasNivel3] = useState([]);
  const [preguntasNivel4, setPreguntasNivel4] = useState([]);
  const [preguntasNivel5, setPreguntasNivel5] = useState([]);

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
          preguntasNivel1.push({
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
          preguntasNivel2.push({
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
          preguntasNivel3.push({
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
          preguntasNivel4.push({
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
          preguntasNivel5.push({
            pregunta: pregunta,
            respuestaCorrecta: respuestaCorrecta,
            respuestasIncorrectas: [
              respuestaIncorrecta1,
              respuestaIncorrecta2,
              respuestaIncorrecta3,
            ],
          });
          break;
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
      console.log(preguntasNivel1);
      console.log(preguntasNivel2);
      console.log(preguntasNivel3);
      console.log(preguntasNivel4);
      console.log(preguntasNivel5);
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

  function handleGuardarConcurso() {}

  function renderizacionPreguntas(indiceNivel, indicePregunta) {
    return (
      <section>
        <h2>Nuevo Concurso - {category}</h2>
        <br/>
        <h3>Nivel {indiceNivel + 1}</h3>
        
        <h4>Pregunta {indicePregunta + 1}</h4>
        <br/>
        <div className="row">
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
        <div className="row">
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
        <div className="row">
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
            <Button variant="success" onClick={handleSiguiente}>
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
        <section>
          <h2>Ingresa el nombre de la categoria del nuevo concurso</h2>
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
            <Button variant="dark" onClick={() => setInicio(false)}>
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
            <Button variant="dark" onClick={handleGuardarConcurso}>
              Guardar concurso
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default NuevoConcurso;

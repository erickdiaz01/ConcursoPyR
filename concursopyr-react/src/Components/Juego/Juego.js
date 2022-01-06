import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
const Juego = () => {
  const [juego, setJuego] = React.useState({});
  const [concurso, setConcurso] = React.useState([]);
  const [pregunta, setPregunta] = useState([]);
  const [juegoFin, setJuegoFin] = useState(false);
  const [puntaje, setPuntaje] = useState(0);
  const [juegoGanado, setJuegoGanado] = useState(false);
  const [nivel, setNivel] = useState(1);
  var rand = 0;
  let idJuego = window.location.pathname.substring(
    7,
    window.location.pathname.length
  );
  function azar(rand) {
    rand = Math.floor(Math.random() * 5);
    console.log(rand);
    return rand;
  }
  async function getJuego() {
    if (idJuego) {
      const { data } = await axios.get(
        `http://localhost:4000/api/juego/juego/${idJuego}`
      );
      setJuego(data);
    }
    azar();
  }
  console.log(juego);
  async function handleIncorrecto() {
    alert("Respuesta incorrecta, haz perdido");
    setJuegoFin(true);
    setPuntaje(0);
    await axios.put(
      `http://localhost:4000/api/juego/actualizarjuego/${idJuego}`,
      {
        puntaje: puntaje,
      }
    );
  }
  async function handleRetirar() {
    alert("Gracias por participar");
    await axios.put(
      `http://localhost:4000/api/juego/actualizarjuego/${idJuego}`,
      {
        puntaje: puntaje,
      }
    );
    setJuegoFin(true);
  }
  async function handleCorrecto() {
    if (nivel < 5) {
      setNivel(nivel + 1);
      setPuntaje(puntaje + 100);
    } else {
      alert("Felicidades, has ganado el concurso!");
      setJuegoGanado(true);
      await axios.put(
        `http://localhost:4000/api/juego/actualizarjuego/${idJuego}`,
        {
          puntaje: puntaje,
        }
      );
      azar();
    }
  }
  useEffect(() => {
    getJuego();
  }, []);
  return (
    <>
      <div className="row flex justify-center items -center">
        <h2 className="flex justify-center items -center mt-4 text-2xl">
          PUNTAJE: {puntaje}
        </h2>
        <h1 className="flex justify-center items-center text-2xl">
          Nivel {nivel}
        </h1>
      </div>

      {nivel === 1 && !juegoFin && (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white text-black-800 p-10 rounded-lg shadow-md">
            <h2 className="text-2xl">
              {" "}
              {juego.concurso?.nivel1[rand].pregunta}
            </h2>
          </div>

          <div className="flex flex-wrap mt-4 justify-around">
            {juego.concurso?.nivel1[rand].respuestasIncorrectas.map((Inc) => (
              <button
                onClick={handleIncorrecto}
                className=" bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4"
              >
                {Inc}
              </button>
            ))}
            {
              <button
                onClick={handleCorrecto}
                className=" bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4"
              >
                {juego.concurso?.nivel1[rand].respuestaCorrecta}
              </button>
            }
          </div>
        </div>
      )}
      {nivel === 2 && !juegoFin && (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white text-black-800 p-10 rounded-lg shadow-md">
            <h2 className="text-2xl">
              {" "}
              {juego.concurso?.nivel2[rand].pregunta}
            </h2>
          </div>

          <div className="flex flex-wrap mt-4 justify-around">
            {juego.concurso?.nivel2[rand].respuestasIncorrectas.map((Inc) => (
              <button
                onClick={handleIncorrecto}
                className=" bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4"
              >
                {Inc}
              </button>
            ))}
            {
              <button
                onClick={handleCorrecto}
                className=" bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4"
              >
                {juego.concurso?.nivel2[rand].respuestaCorrecta}
              </button>
            }
          </div>
        </div>
      )}
      {nivel === 3 && !juegoFin && (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white text-black-800 p-10 rounded-lg shadow-md">
            <h2 className="text-2xl">
              {" "}
              {juego.concurso?.nivel3[rand].pregunta}
            </h2>
          </div>

          <div className="flex flex-wrap mt-4 justify-around">
            {juego.concurso?.nivel3[rand].respuestasIncorrectas.map((Inc) => (
              <button
                onClick={handleIncorrecto}
                className=" bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4"
              >
                {Inc}
              </button>
            ))}
            {
              <button
                onClick={handleCorrecto}
                className=" bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4"
              >
                {juego.concurso?.nivel3[rand].respuestaCorrecta}
              </button>
            }
          </div>
        </div>
      )}
      {nivel === 4 && !juegoFin && (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white text-black-800 p-10 rounded-lg shadow-md">
            <h2 className="text-2xl">
              {" "}
              {juego.concurso?.nivel4[rand].pregunta}
            </h2>
          </div>

          <div className="flex flex-wrap mt-4 justify-around">
            {juego.concurso?.nivel4[rand].respuestasIncorrectas.map((Inc) => (
              <button
                onClick={handleIncorrecto}
                className=" bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4"
              >
                {Inc}
              </button>
            ))}
            {
              <button
                onClick={handleCorrecto}
                className=" bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4"
              >
                {juego.concurso?.nivel4[rand].respuestaCorrecta}
              </button>
            }
          </div>
        </div>
      )}
      {nivel === 5 && !juegoFin && (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white text-black-800 p-10 rounded-lg shadow-md">
            <h2 className="text-2xl">
              {" "}
              {juego.concurso?.nivel5[rand].pregunta}
            </h2>
          </div>

          <div className="flex flex-wrap mt-4 justify-around">
            {juego.concurso?.nivel5[rand].respuestasIncorrectas.map((Inc) => (
              <button
                onClick={handleIncorrecto}
                className=" bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4"
              >
                {Inc}
              </button>
            ))}
            {
              <button
                onClick={handleCorrecto}
                className=" bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4"
              >
                {juego.concurso?.nivel5[rand].respuestaCorrecta}
              </button>
            }
          </div>
        </div>
      )}
      {juegoGanado && (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-green text-black-800 p-10 rounded-lg shadow-md">
            <h2 className="text-2xl">FELICITACIONES, HAS GANADO!</h2>
            <h1>
              CATEGORIA: {juego.concurso.category}
              PUNTAJE : {puntaje}
            </h1>
          </div>
        </div>
      )}
      {juegoFin && (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white text-red-800 p-10 rounded-lg shadow-md">
            <h2 className="text-2xl">
              JUEGO TERMINADO, GRACIAS POR PARTICIPAR
            </h2>
            <br />
            <h1>
              CATEGORIA: {juego.concurso.category}
              <br />
              <br />
              PUNTAJE : {puntaje}
            </h1>
          </div>
        </div>
      )}

      <div className="aling-center">
        <Button variant="danger" className="bg-danger" onClick={handleRetirar}>
          Retirarse
        </Button>
      </div>
    </>
  );
};

export default Juego;

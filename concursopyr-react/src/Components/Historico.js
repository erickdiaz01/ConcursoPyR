import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
const Historico = () => {
  const [juegos, setJuegos] = useState([]);
  const getJuegos = async () => {
    const { data } = await axios.get(`http://localhost:4000/api/juego/juegos`);
    console.log(data)
    if (data) {
      setJuegos(data);
      
    }
    console.log(juegos)
  };

  useEffect(() => {
    getJuegos();
  }, []);
  return (
    <div className="flex justify-center items-center m-4 border-zinc-900">
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Categoria</th>
            <th>Puntaje</th>
          </tr>
        </thead>
        <tbody>
          {juegos?.map((juego) => (
            <tr key={juego.id}>
              <th scope="row">{juego.jugador.nombre}</th>
              <td>{juego.concurso.category}</td>
              <td>{juego.puntaje}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Historico;


import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from "react-router-bootstrap";

import electricidad from '../assets/img/electricidad.jpg';
import plomeria from '../assets/img/plomeria.jpg'
import MenuSide from '../components/MenuSide';

import axios from "axios";

const cargarImagen = require.context('../assets/img', true);

export default function Servicios() {

  const [servicios, setServicios] = useState([]);


  const prueba = [{ idServicio: "1", nomServicio: "prueba 1", descServicio: "prueba 1 hito 2", imagen: 'electricidad' }, { idServicio: "2", nomServicio: "prueba", descServicio: "prueba hito 2" }]


  useEffect(() => {
    setServicios(prueba);
    obtenerServicios();
  }, []);
  const obtenerServicios = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/servicio";
    const token = localStorage.getItem("token");
    try {
      // setServicios(await axios.get(urlServer + endpoint,  {
      //   headers: { Authorization: "Bearer " + token },
      // }));
      alert("Servicios obtenidos correctamente");

    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }

  };
  console.log(servicios)

  return (
    <div className="d-flex row flex-nowrap">
      <MenuSide />
      <div className="d-flex row m-5 h-50">
        {servicios.map((item) => (
          <Card key={item.idServicio} style={{ width: '18rem', margin: '5px' }}>
            <Card.Img variant="top m-1" src={electricidad} />
            <Card.Body>
              <Card.Title>{item.nomServicio}</Card.Title>
              <Card.Text>
                {item.descServicio}
                {/* Servicio de cambio de ampolletas, circuitos electricos, servicios de cableados, etc. */}
              </Card.Text>
              <LinkContainer to="/solicitudServicio">
                <Button variant="primary">Solicitar</Button>
              </LinkContainer>
            </Card.Body>
          </Card>))}

      </div>
    </div>
  );
}
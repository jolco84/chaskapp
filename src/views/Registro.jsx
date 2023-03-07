import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, InputGroup } from 'react-bootstrap';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import fondoLogin from '../assets/img/inicio.jpg'

export default function Registro() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
  };

  const registrarUsuario = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/registro";
    try {
      await axios.post(urlServer + endpoint, usuario);
      alert("Usuario registrado con éxito");
      navigate("/login");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };
  return (
    <Container className="p-3 my-5">
      <Row>
        <Col col='10' md='6'>
          <img src={fondoLogin} class="img-fluid" alt="Phone image" />
        </Col>

        <Col col='4' md='6'>
          <h2 className='text-primary'>Registro de usuarios</h2>

          <hr />
          <div className="form-group mt-1 ">
            <label>Nombres</label>
            <input
              value={usuario.nombre}
              onChange={handleSetUsuario}
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Introduzca sus Nombres"
            />
          </div>
          <div className="form-group mt-1 ">
            <label>Apellidos</label>
            <input
              value={usuario.apellido}
              onChange={handleSetUsuario}
              type="text"
              name="apellido"
              className="form-control"
              placeholder="Introduzca sus Apellidos"
            />
          </div>
          <div className="form-group mt-1 ">
            <label>Correo</label>
            <input
              value={usuario.email}
              onChange={handleSetUsuario}
              type="email"
              name="email"
              className="form-control"
              placeholder="Introduzca su Correo"
            />
          </div>
          <div className="form-group mt-1 ">
            <label>Contraseña</label>
            <input
              value={usuario.password}
              onChange={handleSetUsuario}
              type="password"
              name="password"
              className="form-control"
              placeholder="Introduzca Contraseña"
            />
          </div>
          
          

          <button onClick={registrarUsuario} className="btn btn-light mt-3">
            Registrarme
          </button>

        </Col>
      </Row>
    </Container>
  );
}
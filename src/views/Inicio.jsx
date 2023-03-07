
import { useState, useContext } from "react";
import Context from "../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import fondoLogin from '../assets/img/inicio.jpg'

export default function Inicio() {
  const { setUsuario } = useContext(Context);
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  const iniciarSesion = async () => {

    const urlServer = "http://localhost:3000";
    const endpoint = "/login";
    const { email, password } = usuario;
    try {
      //if (!email || !password) return alert("Email y password obligatorias");
      //const { data: token } = await axios.post(urlServer + endpoint, usuario);
      alert("Usuario identificado con éxito 😀");
     // localStorage.setItem("token", token);
      setUsuario("token")
      navigate("/usuario");
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <Container className="p-3 my-5">
        <Row>
          <Col col='10' md='6'>
            <img src={fondoLogin} className="img-fluid" alt="Phone image" />
          </Col>
          <Col col='4' md='6'>
          <h2 className='text-primary'>Iniciar Sesión</h2>
            <hr />
            <div className="form-group mt-1 ">
              <label>Correo</label>
              <input
                value={usuario.email}
                onChange={handleSetUsuario}
                type="email"
                name="email"
                className="form-control"
                placeholder="Introduzca su correo"
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
                placeholder="Introduzca su contraseña"
              />
            </div>

            <button onClick={iniciarSesion} className="btn btn-light mt-3">
              Iniciar Sesión
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );

}
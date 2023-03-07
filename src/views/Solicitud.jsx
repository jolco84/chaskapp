
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

import Table from 'react-bootstrap/Table';
import MenuSide from "../components/MenuSide";

export default function Solicitud() {
  const { setUsuario } = useContext(Context);
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});

  const obtenerSolicitudes = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/solicitudes";
    const token = localStorage.getItem("token");
    try {
      //const result = await axios.get(urlServer + endpoint, {
        //   headers: { Authorization: "Bearer " + token },
        // });
      alert("Solicitudes obtenidas correctamente");
      navigate("/login");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

  const verDetalle = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/solicitudes";
    const token = localStorage.getItem("token");
    try {
      //const result = await axios.get(urlServer + endpoint,  {
        //   headers: { Authorization: "Bearer " + token },
        // });
      alert("Solicitudes obtenidas correctamente");
      navigate("/login");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

  const eliminarSolicitud = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/solicitudes";
    const token = localStorage.getItem("token");
    try {
     //const result =  await axios.get(urlServer + endpoint, {
        //   headers: { Authorization: "Bearer " + token },
        // });
      alert("Solicitudes obtenidas correctamente");
      navigate("/login");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };
  return (
    <div className="d-flex row flex-nowrap">
      <MenuSide />
      <div className="d-flex row m-5 h-50">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nro. Solicitud</th>
              <th>Servicio</th>
              <th>Estado</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className="btn btn-info btn-sm" onclick={verDetalle}><i className="fa-solid fa-eye" /></button>
                  &nbsp;
                  <button className="btn btn-danger btn-sm" onclick={eliminarSolicitud}><i className="fa-solid fa-xmark" /></button></td>
              </tr>

            }
          </tbody>
        </Table></div>
    </div>
  );
}
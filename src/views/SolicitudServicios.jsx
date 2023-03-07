import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from "axios";
import { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuSide from '../components/MenuSide';
import Context from "../Context";

export default function Servicios() {
    const { setUsuario } = useContext(Context);
    const navigate = useNavigate();
    const [solicitud, setSolicitud] = useState({});
    const [subServicios, setSubServicios]= useState([]);

    const prueba = [{idSubservicio: 1,
        nomSubServicio: "Prueba 1",
        descAyuda: "String",
        idServicio: "Number"},{idSubservicio: 2,
            nomSubServicio: "Prueba 2",
            descAyuda: "String",
            idServicio: "Number"}]
    useEffect(() => {
        setSubServicios(prueba);
        //obtenerSubServicios();
      }, []);


    const agregarSolicitud = async () => {
        alert("Esta seguro que desea enviar la solicitud?")
        const urlServer = "http://localhost:3000";
        const endpoint = "/solicitudes";
        const token = localStorage.getItem("token");
        const { idUsuario, idActividad, tipoServicio, descripcion } = solicitud;
        // {
        //     headers: { Authorization: "Bearer " + token },
        //   });
        try {
            if (!idUsuario || !idActividad || !tipoServicio || !descripcion) return alert("Datos obligatorios");
            //const result = await axios.post(urlServer + endpoint, solicitud);
            alert("Solcitud enviada correctamente!");
            setUsuario("token")
            navigate("/solicitud");
        } catch ({ response: { data: message } }) {
            alert(message + " 🙁");
            console.log(message);
        }
    };

    const obtenerSubServicios = async () => {
        const urlServer = "http://localhost:3000";
        const endpoint = "/subservicio";
        const token = localStorage.getItem("token");

        try {
            // const result = await axios.post(urlServer + endpoint, {
            //   headers: { Authorization: "Bearer " + token },
            // }));

            alert("SubServicios obtenidos correctamente");
        } catch (error) {
            alert("Algo salió mal ...");
            console.log(error);
        }

    }
    return (
        <div className="d-flex row flex-nowrap">
            <MenuSide />
            <div className="d-flex m-5 h-50">
                <Form className='w-50'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Tipo de servicio</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione un tipo de servicio</option>
                            {subServicios.map((item) => (
                                <option  key={item.idSubservicio}>{item.nomSubServicio}</option>
                            ))
                            }
                        </Form.Select>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comentarios</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" onClick={agregarSolicitud}>Enviar</Button>
                </Form>
            </div>
        </div>
    );
}
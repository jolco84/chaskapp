import logo from '../assets/img/logo.png'
import { LinkContainer } from 'react-router-bootstrap';

export default function MenuSide() {

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '200px', height: '100vh' }}>

            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img
                    src={logo}
                    width="60"
                    height="60"
                    className="img"
                    alt="chaskmas"
                />
            </a>


            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <LinkContainer to="/servicios">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white" aria-current="page">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Servicios
                        </a>
                    </li>
                </LinkContainer>
                <LinkContainer to="/solicitud">
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Solicitudes
                        </a>
                    </li></LinkContainer>
                <LinkContainer to="/mantenedor">
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16"> </svg>
                            Mantenedor
                        </a>
                    </li>
                </LinkContainer>
            </ul>


        </div>
    );
}
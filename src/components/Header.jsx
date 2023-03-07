import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../assets/img/logo.png";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

export default function Header() {
    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(Context);
    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("token");
        navigate("/");
    };
    
    return (<>
       
            <Navbar clasName='d-flex flex-row ' bg="light" expand="lg">
                <LinkContainer to="/">
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="chaskmas"
                    />
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-end" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                        <LinkContainer to="/registro">
                            <Nav.Link>Registrarse</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/inicio">
                            <Nav.Link>Inicio de Sesión</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
        
    </>
    );
}


import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context";
import logo from "../assets/img/logo.png"

function BrandExample() {
    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(Context);
    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <nav className="bg-primary">           

            <div className="opciones">
            <Link to="/">
                <img className="logo" alt="logo" src={logo} width={100}></img>
            </Link>

                {!usuario ? (
                    <div>
                        <Link to="/registrarse">
                            <button className="btn m-1 register-btn">Registrarse</button>
                        </Link>

                        <Link to="/login">
                            <button className="btn login-btn">Iniciar Sesión</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/perfil">
                            <button className="btn  m-1 btn-light">Mi Perfil</button>
                        </Link>
                        <button onClick={logout} className="btn btn-danger">
                            Salir
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default BrandExample;
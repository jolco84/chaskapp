import fondo1 from "../assets/img/logo.png"

import Pie from '../components/Footer';
import MenuSide from "../components/MenuSide";
export default function Usuario() {

    return (
        <div className="d-flex row flex-nowrap">
            <MenuSide />
            <div className="d-flex row">

                <div className="container my-auto px-4 py-5">

                    <div className="my-auto g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={fondo1} className="d-block mx-lg-auto img-fluid" 
                            alt="logo" width="65%" height="65%" loading="lazy" />
                        </div> 

                    </div>

                </div>
            </div>
        </div>
    );
}
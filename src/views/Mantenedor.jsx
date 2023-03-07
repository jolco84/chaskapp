import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import MenuSide from '../components/MenuSide';

export default function Usuario() {

  const mostrarAlertaMant = () => {
    alert("Funcionalidad en construccion. Proximante Disponible!")
  }

  return (
    <div className="d-flex row flex-nowrap">
      <MenuSide />
      <div className="d-flex row m-3 w-75">
        <Card style={{ width: '18rem', margin: '5px', alignItems: 'center', padding: '30px 0px 0px 0px' } }>
          <Card.Text>
            <i className="fa-solid fa-screwdriver-wrench fa-5x"></i>
          </Card.Text>
          <Card.Body>
            <Card.Title>Servicios</Card.Title>
            <Card.Text>
              Agregar o modificar servicios.
            </Card.Text>
            <Button variant="primary">Ver</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '5px', alignItems: 'center', padding: '30px 0px 0px 0px' }}>
          <Card.Text>
          <i class="fa-solid fa-wrench fa-5x"></i>
          </Card.Text>
          <Card.Body>
            <Card.Title>Sub-Servicios</Card.Title>
            <Card.Text>
              Agregar o modificar nuevas actividades a los servicios.
            </Card.Text>
            <Button variant="primary">Ver</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '5px', alignItems: 'center', padding: '30px 0px 0px 0px' }}>
          <i class="fa-solid fa-hammer fa-5x"></i>
          <Card.Body>
            <Card.Title>Perfiles</Card.Title>
            <Card.Text>
              Agregar o modificar perfiles.
            </Card.Text>
            <Button variant="primary" onClick={mostrarAlertaMant}>Ver</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '5px', alignItems: 'center', padding: '30px 0px 0px 0px' }}>
        <i class="fa-solid fa-person-digging fa-5x"></i>
          <Card.Body>
            <Card.Title>Estado</Card.Title>
            <Card.Text>
              Agregar o modificar estado de solicitudes.
            </Card.Text>
            <Button variant="primary" onClick={mostrarAlertaMant}>Ver</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '5px', alignItems: 'center', padding: '30px 0px 0px 0px' }}>
        <i class="fa-solid fa-restroom fa-5x"></i>
          <Card.Body>
            <Card.Title>Usuarios</Card.Title>
            <Card.Text>
              Agregar o modificar Usuarios.
            </Card.Text>
            <Button variant="primary" onClick={mostrarAlertaMant}>Ver</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
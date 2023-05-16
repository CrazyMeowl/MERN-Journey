
import Button from 'react-bootstrap/esm/Button';
import {NavLink} from 'react-router-dom';

// import logo from './logo.png';

function RouteButton({route,label}) {
  return (
            <NavLink to={route}>
              <Button variant="dark" >
                  {label}
              </Button>
            </NavLink>
  );
}

export default RouteButton;
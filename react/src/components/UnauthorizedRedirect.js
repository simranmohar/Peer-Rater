import authService from "../services/auth";
import {Navigate} from 'react-router-dom';

function UnauthorizedRedirect () {
    return <Navigate to="/login"/>;
}

export default UnauthorizedRedirect;


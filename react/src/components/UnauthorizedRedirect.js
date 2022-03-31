import authService from "../services/auth";


function UnauthorizedRedirect () {
    const isLogged = !!authService.getCurrentUser();
    if (!isLogged) {
        window.location.href = '/login'
    }
    return null;
}

export default UnauthorizedRedirect;


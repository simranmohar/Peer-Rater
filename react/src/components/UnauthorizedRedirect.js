import authService from "../services/auth";


const UnauthorizedRedirect = () => {
    const isLogged = !!authService.getCurrentUser();
    if (!isLogged) {
        window.location.href = '/login'
    }
    return null;
}

export default UnauthorizedRedirect;


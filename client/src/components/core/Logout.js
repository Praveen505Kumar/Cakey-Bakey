import { useEffect } from "react";
import { Navigate } from 'react-router';

const Logout = () => {

    useEffect(() => {
        localStorage.removeItem("sample");
        window.location.reload()
    }
    )
    return (
        <Navigate to="/" />
    )
}
export default Logout;

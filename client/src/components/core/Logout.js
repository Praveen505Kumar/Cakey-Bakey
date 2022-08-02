import { useEffect } from "react";
import { Link } from "react-router-dom";

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("sample")
    }
    )
    return (
        <div>
            <h1>logout successfully</h1>
            <Link to="/">Go To Home</Link>
        </div>
    )
}
export default Logout;
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Fragment } from "react";

const Ordersuccess = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="header-pad container my-3 text-center" style={{ height: 450 }}>
                <h3>Order placed successfully!!!</h3>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Ordersuccess;
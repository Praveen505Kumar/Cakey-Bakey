import Navbar from "./Navbar";
import Footer from "./Footer";

const Ordersuccess = () => {
    return (
        <div>
            <Navbar />
            <div class="header-pad container my-3" style={{ height: 450 }}>
                <h3>Order placed successfully!!!</h3>
            </div>
            <Footer />
        </div>
    );
}

export default Ordersuccess;
import Cart from "./Cart";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img1 from "../images/seller1.webp";

const Menu = () => {
    return (
        <div>
            <Navbar />
            <div className="container header-pad">
                <h1>MENU</h1>
                <div className="menu-line"></div>
                <div className="row mt-4">
                    <div className="col-md-8 sample">
                        <div className="d-flex">
                            <h2 className="">Best Sellers</h2>
                            <div className="cat-line flex-grow-1 my-auto ms-2"></div>
                        </div>
                        <div className="card" style={{ width: 250, height: 150 }}>
                            <img src={img1} className="card-img-top" alt="..."></img>
                            <div className="card-body item-body rounded-3">
                                <h5 className="card-title">Chocolate Cake</h5>
                                <p className="card-text text-muted">bulk of the card's content.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <strong>&#8377;</strong>  260
                                    </span>
                                    <div>
                                        <button className="item-btn">
                                            <i className="bi bi-dash-lg"></i>
                                        </button>
                                        <span>
                                            <strong>0</strong>
                                        </span>
                                        <button className="item-btn">
                                            <i className="bi bi-plus-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Cart />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Menu;
import { connect } from "react-redux";
import { clearCart } from "../../redux/Cart/action";
import { Link } from "react-router-dom";
import Cartitem from "./Cartitem";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cartpage = (props) => {
    let role = -1
    if (localStorage.getItem("sample") !== null) {
        const user = JSON.parse(localStorage.getItem("sample"))
        role = user.role
    }
    const display = props.cart.map(item => (
        <Cartitem key={item.id} {...item} />
    ))
    return (
        <div>
            <Navbar />
            <div className="header-pad container my-3">
                {props.cart.length > 0 ?
                    (<div className="d-flex justify-content-end p-2">
                        <div className="col-xs-6">
                            <button type="button" className="btn btn-danger btn-block" onClick={props.clearCart}>Clear Cart</button>
                        </div>
                    </div>) :
                    (<div className=" align-items-center mb-4 p-2">

                        <div className="text-center" style={{ height: 450 }}>
                            <div className=" text-center"><span className='bi bi-cart-fill' style={{ fontSize: 40, height: 100 }}></span></div>
                            <h3>Cart is Empty!</h3>
                        </div>
                    </div>)}


                {props.cart.length > 0 ?
                    (<div>

                        <div className="overflow-auto scroll" style={{ height: 350 }}>
                            {display}

                        </div>

                        <div className="pt-2">
                            <h5>Total:<span>
                                <strong>&#8377;</strong> {props.price}
                            </span></h5>
                            <Link to={role === -1 ? ("/signin") : ("/checkout")}>
                                <button type="submit" className="btn btn-lg btn-primary cartbtn">Check out</button>
                            </Link>
                        </div>

                    </div>) :
                    null}
            </div>
            <Footer />
        </div>

    );
}
const mapStateToProps = state => ({
    cart: state.cart.cart,
    price: state.cart.totalPrice
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cartpage)
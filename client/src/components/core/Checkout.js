import Footer from "./Footer";
import Navbar from "./Navbar";
import { Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearCart } from "../../redux/Cart/action";
import axios from "axios";
import { useEffect, useState } from "react";


const Checkout = (props) => {
    const [address, setAddress] = useState(null);
    const [values, setValues] = useState({ mode: "", success: "", error: "" })
    const handleChange = (e) => {
        setValues({ ...values, mode: e.target.value });
    };
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.get('http://localhost:8000/api/address/' + user._id)
            .then((res) => {
                setAddress(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    },
        []
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(address)
        if (values.mode === "CashOnDelivery" && address && (props.cart.length > 0)) {
            const products = props.cart
            const total_amount = props.totalprice
            const user = JSON.parse(localStorage.getItem("sample"))
            axios.post('http://localhost:8000/api/order/create/' + user._id, { order: { products, total_amount, address: address._id } })
                .then(response => {
                    setValues({ ...values, error: false, success: true });
                    console.log(response.data);
                    props.clearCart();
                    // alert('category added!!');
                })
                .catch(error => {
                    setValues({ ...values, error: error.response.data.error, success: false });
                    console.log(error);
                })
        }
        else if (values.mode !== "CashOnDelivery" && !address) {
            setValues({ ...values, error: "Please Select Payment Method and Address ", success: false });
        }
        else if (values.mode === "CashOnDelivery" && !address) {
            setValues({ ...values, error: "Please Update Address ", success: false });
        }
        else if (props.cart.length < 1) {
            setValues({ ...values, error: "Cart is Empty!", success: false });
        }
        else {
            setValues({ ...values, error: "Please Select Payment method  ", success: false });
        }
    };
    return (
        <div>
            <Navbar />
            <div className="container header-pad">
                <h1>CHECKOUT</h1>
                <div className="menu-line"></div>
                <div className="row mt-4">

                    <h2 className=" ">Location</h2>

                    {!address && (<div className="alert alert-danger mt-4 px-2">
                        <strong>No Address Found</strong>
                        <div className="d-flex justify-content-start p-2 my-5 mt-0">
                            <Link to="/addaddress" className="btn btn-Success bcolor">
                                Add Address
                            </Link>
                        </div>
                    </div>)}

                    {address && (<div>
                        <div>
                            <strong>Address:</strong><br></br>
                            {address.flatno}, {address.streetname}<br></br>
                            {address.city}, {address.state}<br></br>
                            PIN: {address.pincode}<br></br>
                            +91-{address.phoneno}<br></br>
                        </div>
                        <div className="d-flex justify-content-start p-2 my-5 mt-0">
                            <Link to="/updateaddress" className="btn btn-Success bcolor">
                                Update Address
                            </Link>
                        </div>

                    </div>)}
                    <div>

                        <div className="my-4">
                            <div className="row">
                                <h2 className=" ">Mode of Payment</h2>
                                <div className="cat-line flex-grow-1 my-auto ms-2"></div>
                            </div>
                        </div>
                        <form onChange={handleChange}>
                            <div className="col-12 mt-4">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio"
                                        name="ModeOfPayment" value="CashOnDelivery" ></input>
                                    <label className="form-check-label" >Cash on Delivery</label>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio"
                                        name="ModeOfPayment" value="Wallet" disabled="disabled"></input>
                                    <label className="form-check-label" >Wallet</label>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio"
                                        name="ModeOfPayment" value="CreditOrDebit" disabled="disabled"></input>
                                    <label className="form-check-label" >Credit / Debit Card</label>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio"
                                        name="ModeOfPayment" value="Netbanking" disabled="disabled"></input>
                                    <label className="form-check-label">Netbanking</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="col-12 my-3">
                                    <button className="btn btn-primary" onClick={handleSubmit}>Place Orders</button>
                                </div>
                            </div>
                            {values.error && (<div className="alert alert-danger py-2" role="alert">
                                Error : {values.error}
                            </div>)}
                            {values.success && <Navigate to="/user/ordersuccess" />}
                        </form>
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        itemMap: state.cart.itemMap,
        totalprice: state.cart.totalPrice
    }
};
const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
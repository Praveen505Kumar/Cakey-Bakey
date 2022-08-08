import Footer from "./Footer";
import Navbar from "./Navbar";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import { useEffect, useState } from "react";
import CheckoutFormUpdate from "./CheckoutFormUpdate"


const Checkout = () => {
    const [address, setAddress] = useState([]);

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
                        <div class="d-flex justify-content-start p-2 my-5 mt-0">
                            <button type="button" class="btn btn-Success bcolor" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Add Address
                            </button>
                        </div>

                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Add Address</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <CheckoutForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}

                    {address && (<div>
                        <div>
                            {address.flatno}<br></br>
                            {address.streetname}<br></br>
                            {address.city}<br></br>
                            {address.state}<br></br>
                            {address.pincode}<br></br>
                            {address.phoneno}<br></br>
                        </div>
                        <div class="d-flex justify-content-start p-2 my-5 mt-0">
                            <button type="button" class="btn btn-Success bcolor" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Update Address
                            </button>
                        </div>

                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Update Address</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <CheckoutFormUpdate />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}

                    {/* <span className="my-3 d-inline-block">
                        <button className="btn btn-primary">Add Address</button>
                </span>*/}
                    <div>

                        {/* <div>

                        <strong>Address:</strong>
                    </div>
                    <div className="row mt-2" >
                        <input type="text" Placeholder="Building Number" className="input"></input>
                        <input type="text" Placeholder="Street Name" className="input"></input>
                        <input type="text" Placeholder="City" className=" input"></input>
                        <select className="input " aria-label="Default select example  ">
                            {states.map((state) => (
                                <option value={state}>{state}</option>
                            ))}

                        </select>
                        <input type="text" Placeholder="Pincode" className="input"></input>
                        <div className="col">
                            <span className=" Btn my-2 mr-2 ">
                                <button className="btn btn-secondary">Cancel</button>
                            </span>
                            <span className=" Btn my-2 ml-2 ">
                                <button className="btn btn-primary ms-4">Update</button>
                            </span>
                        </div> 

                    </div>*/}
                        <div className="my-4">
                            <div className="row">
                                <h2 className=" ">Mode of Payment</h2>
                                <div className="cat-line flex-grow-1 my-auto ms-2"></div>
                            </div>
                        </div>
                        <form>
                            <div className="col-12 mt-4">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio"
                                        name="ModeOfPayment" id="CashOnDelivery" ></input>
                                    <label className="form-check-label" for="CashOnDelivery">Cash on Delivery</label>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio"
                                        name="ModeOfPayment" id="Wallet" disabled="disabled"></input>
                                    <label className="form-check-label" for="Wallet" >Wallet</label>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio"
                                        name="ModeOfPayment" id="CreditOrDebit" disabled="disabled"></input>
                                    <label className="form-check-label" for="CreditOrDebit">Credit / Debit Card</label>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio"
                                        name="ModeOfPayment" id="Netbanking" disabled="disabled"></input>
                                    <label className="form-check-label" for="Netbanking"  >Netbanking</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="col-12 my-3">
                                    <button className="btn btn-primary">Place Orders</button>
                                </div>
                            </div>

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
export default Checkout;
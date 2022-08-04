import Footer from "./Footer";
import Navbar from "./Navbar";
const Checkout = () => {
    return (
        <div>
            <Navbar />
            <div className="container header-pad">
                <h1>CHECKOUT</h1>
                <div className="menu-line"></div>
                <div className="row mt-4">

                    <h2 className=" ">Location</h2>
                    <div className="cat-line flex-grow-1 my-auto ms-2"></div>
                    <div className="alert alert-danger mt-4 px-2">
                        <strong>No Address Found</strong>
                    </div>
                    <span className="my-3 d-inline-block">
                        <button className="btn btn-primary">Add Address</button>
                    </span>
                    {/* <div>
                        <strong>Address:</strong>
                    </div>
                    <div className="row mt-2" >
                        <input type="text" Placeholder="Building Number" className="input"></input>
                        <input type="text" Placeholder="Street Name" className="input"></input>
                        <input type="text" Placeholder="City" className=" input"></input>
                        <input type="text" Placeholder="State" className="input"></input>
                        <input type="text" Placeholder="Country" className="input"></input>
                        <input type="text" Placeholder="Pincode" className="input"></input>
                        <div className="col">
                            <span className=" Btn my-2 mr-2">
                                <button className="btn btn-secondary">Cancel</button>
                            </span>
                            <span className=" Btn my-2 ml-2">
                                <button className="btn btn-primary">Update</button>
                            </span>
                        </div>
                    </div> */}
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
                                    name="ModeOfPayment" id="CashOnDelivery"></input>
                                <label className="form-check-label" >Cash on Delivery</label>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio"
                                    name="ModeOfPayment" id="Wallet" disabled></input>
                                <label className="form-check-label" >Wallet</label>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio"
                                    name="ModeOfPayment" id="CreditOrDebit" disabled></input>
                                <label className="form-check-label">Credit / Debit Card</label>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio"
                                    name="ModeOfPayment" id="Netbanking" disabled></input>
                                <label className="form-check-label">Netbanking</label>
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


            <div>
                <Footer />
            </div>
        </div>
    );
}
export default Checkout;
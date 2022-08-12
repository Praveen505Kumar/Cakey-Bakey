import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from "react";

const Userorders = () => {
    const [orders, setOrders] = useState([]);
    const [address, setAddress] = useState(null);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.get('http://localhost:8000/api/order/all/user/' + user._id)
            .then((res) => {
                setOrders(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            });

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
        <div className="header-pad">
            <Navbar />
            <div class="container my-3" >
                <h1>Orders</h1>
                <div>
                    <table className="table">
                        <thead>
                            <tr className="">
                                <th>S.No</th>
                                <th>Order Id</th>
                                <th>Product details</th>
                                <th>Total Bill</th>
                                {/* <th >Address</th> */}

                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr className="plain-table-row" key={order._id}>
                                    <td className="plain-table-cell">{index + 1}.</td>
                                    <td className="plain-table-cell">{order._id}</td>
                                    <td className="plain-table-cell"><ol>
                                        {order.products.map((product) => (
                                            <li>Name:{product.name}<br />Category:{product.category}<br />Quantity:{product.quantity}</li>
                                        ))}</ol></td>
                                    <td className="plain-table-cell"><strong>&#8377;</strong>{order.total_amount}</td>

                                    {/* <td className="plain-table-cell">{address && (<div>

                                        {address.flatno}, {address.streetname}<br></br>
                                        {address.city}, {address.state}<br></br>
                                        PIN: {address.pincode}<br></br>
                                        +91-{address.phoneno}<br></br>
                                    </div>)

                                    }</td> */}

                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Userorders;
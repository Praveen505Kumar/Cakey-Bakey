import Dashboard from "./Dashboard";
import axios from "axios";
import { useState, useEffect } from "react";
const Orders = () => {
    // const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.get('http://localhost:8000/api/order/all/' + user._id)
            .then((res) => {
                setOrders(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="header-pad">
            <Dashboard />
            <div className="col-md-12 adminscrn">
                <h1>Orders</h1>
                <div>
                    <table className="table">
                        <thead>
                            <tr className="">
                                <th>S.No</th>
                                <th>Order Id</th>
                                <th>Product details</th>
                                <th>Total Bill</th>
                                <th>User details</th>
                                <th >Address</th>

                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr className="plain-table-row" key={order._id}>
                                    <td className="plain-table-cell">{index + 1}.</td>
                                    <td className="plain-table-cell">{order._id}</td>
                                    <td className="plain-table-cell"><ol>
                                        {order.products.map((product) => (
                                            <li>Name: {product.name}<br />Category: {product.category}<br />Quantity: {product.quantity}Kg</li>
                                        ))}</ol></td>
                                    <td className="plain-table-cell"><strong>&#8377;{order.total_amount}</strong></td>
                                    <td className="plain-table-cell">Name: {order.user.name}<br />MailId: {order.user.email}</td>
                                    <td className="plain-table-cell">{order.address ? (<div>
                                        {order.address.flatno}, {order.address.streetname}<br></br>
                                        {order.address.city}, {order.address.state}<br></br>
                                        PIN: {order.address.pincode}<br></br>
                                        +91-{order.address.phoneno}<br></br>
                                    </div>) : ("No address found")}
                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Orders;
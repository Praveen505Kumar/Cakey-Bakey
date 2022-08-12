import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";


const Profile = () => {
    const [address, setAddress] = useState(null);
    const user = JSON.parse(localStorage.getItem("sample"));
    useEffect(() => {

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
            <div class="container header-pad" style={{ height: 500 }}>
                <div class="d-flex justify-content-end align-items-center">

                    <div class="">
                        <a href="/user/orders" class="btn btn-warning btn-block" >My Orders</a>
                    </div>
                </div>
                <div className="profile card me-2 my-3 shadow" style={{ width: 400, height: 300 }}>
                    <div className="card-body item-body rounded-3">
                        <h3 className="card-title"><i class="bi bi-person-circle p-1"></i>{user.name}</h3>
                        <p ><strong>Email: </strong>{user.email}</p>
                        {address && (<div>
                            <strong>Address:</strong><br></br>
                            {address.flatno}, {address.streetname}<br></br>
                            {address.city}, {address.state}<br></br>
                            PIN: {address.pincode}<br></br>
                            +91-{address.phoneno}<br></br>
                        </div>)

                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
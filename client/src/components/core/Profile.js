import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("sample"));
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
                        <p ><strong>Address: </strong></p>
                    </div>
                </div>

                {/* <table className="table">
                    <thead>
                        <tr className="">

                            <th>Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr className="plain-table-row" key={user._id}>

                            <td className="plain-table-cell">{user.name}</td>
                            <td className="plain-table-cell">{user.email}</td>



                        </tr>


                    </tbody>
                </table> */}
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
const Contactus = () => {

    return (
        <div>
            <div>
                <Navbar />
                <div className="container header-pad">
                    <h1 className="head text-center bg5">CONTACT US</h1>
                    <h2><strong>Mailto :</strong></h2>
                    <h4>cakey3bakey@gmail.com</h4><br></br>
                    <h2><strong>Address :</strong></h2>
                    <h4>29-2, cakey street</h4>
                    <h4>gandhi road</h4>
                    <h4>chittoor district</h4>
                    <h4>Pincode: 123456</h4>
                    <h4>Andhra pradesh</h4>


                </div>
            </div>
            <Footer />
        </div>




    );
}

export default Contactus;
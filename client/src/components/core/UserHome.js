import Navbar from './Navbar';
import Footer from './Footer';
import Slides from './Slides';

const UserHome = () => {
    return (
        <div className="bg-light">
            <Navbar />
            <Slides />
            <div>
                <h1>USER HOME PAGE</h1>
            </div>
            <Footer />
        </div>
    )
}

export default UserHome;
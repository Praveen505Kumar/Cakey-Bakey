import Navbar from './Navbar';
import Footer from './Footer';
import welcome from '../images/welcome.webp';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-light">
            <Navbar />
            <div className='d-flex header-pad'>
                <Link to="/menu"><img src={welcome} className="d-block w-100" alt="..."></img></Link>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
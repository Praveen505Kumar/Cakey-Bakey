import Navbar from './Navbar';
import Footer from './Footer';
import Slides from './Slides';
// import { connect } from "react-redux";
// import { increaseCounter, decreaseCounter } from "../../redux/Counter/counter.actions";

const Home = (props) => {
    return (
        <div className="bg-light">
            <Navbar />
            <Slides />
            {/* <div>
                <div>Count: {props.count}</div>
                <button onClick={() => props.increaseCounter()}>Increase Count</button>
                <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
            </div> */}
            <Footer />
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         count: state.counter.count
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         increaseCounter: () => dispatch(increaseCounter()),
//         decreaseCounter: () => dispatch(decreaseCounter())
//     }
// };

//export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
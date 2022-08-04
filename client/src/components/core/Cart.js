import { connect } from "react-redux";
import { clearCart } from "../../redux/Cart/action"
import Cartitem from "./Cartitem"
const Cart = (props) => {
    const display = props.cart.map(item => (
        <Cartitem key={item.id} {...item} />
    ))
    return (

        <div className="sticky-md-top item-body cart-position shadow-lg">
            {props.cart.length > 0 ?
                (<div class="d-flex justify-content-between align-items-center mb-4 p-2 shadow">
                    <h3>Cart</h3><div class="col-xs-6">
                        <button type="button" class="btn btn-danger btn-block" onClick={props.clearCart}>Clear Cart</button>
                    </div>
                </div>) :
                (<div class=" align-items-center mb-4 p-2">
                    <h3>Cart</h3>
                    <div className="text-center">
                        <div className=" text-center"><span className='bi bi-cart-fill' style={{ fontSize: 40, height: 100 }}></span></div>
                        <h3>Cart is Empty!</h3>
                    </div>
                </div>)}


            {props.cart.length > 0 ?
                (<div>
                    <div className="overflow-auto scroll" style={{ height: 270 }}>
                        {display}

                    </div>
                    <div class="position-absolute bottom-0 start-50 translate-middle-x cartbottom shadow-lg pt-2">
                        <h5>Total:<span>
                            <strong>&#8377;</strong> {props.price}
                        </span></h5>
                        <button type="submit" className="btn btn-lg btn-primary cartbtn">GoTo Cart</button>
                    </div>
                </div>) : null
            }
        </div>

    );
}
const mapStateToProps = state => ({
    cart: state.cart.cart,
    price: state.cart.totalPrice
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
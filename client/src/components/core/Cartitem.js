import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/Cart/action"
const Cartitem = (props) => {
    const { name, description, id, price } = props
    const item = {
        id: id,
        name: name,
        price: price,
        description: description,

    }
    return (
        <div class="col-xs-4 px-2">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-muted"><small>{description}</small></p>
            <div className="d-flex justify-content-between align-items-center">
                <span>
                    Price:<strong>&#8377;</strong> {price}
                </span>
                <div>
                    <button className="item-btn" onClick={() => props.removeItemFromCart(item)}>
                        <i className="bi bi-dash-lg"></i>
                    </button>
                    <span>
                        <strong> {id in props.itemMap ?
                            props.cart[props.itemMap[id]].quantity : 0} </strong>
                    </span>
                    <button className="item-btn" onClick={() => props.addItemToCart(item)}>
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </div>
            </div>
            <hr />

        </div>


    );
}
const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        itemMap: state.cart.itemMap
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (item) => dispatch(addItemToCart(item)),
        removeItemFromCart: (item) => dispatch(removeItemFromCart(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cartitem);

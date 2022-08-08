import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/Cart/action"
const Cartitem = (props) => {
    const { name, description, id, price, category } = props
    const item = {
        id: id,
        name: name,
        price: price,
        description: description,
        category: category

    }
    return (
        <div className="col-xs-4 px-2 row">
            <div className="col-3">
                <img src={"http://localhost:8000/api/product/photo/" + id}
                    className="card-img-top"
                    style={{ width: 200, height: 150 }}
                    alt="..."
                ></img>
            </div>
            <div className="col-4">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted"><small>{description}</small></p>
                <span>
                    Price:<strong>&#8377;</strong> {price}
                </span>
            </div>
            <div className="col-4">
                <div className="d-flex justify-content-end align-items-center">
                    <button className="item-btn" onClick={() => props.removeItemFromCart(item)}>
                        <i className="bi bi-dash-lg"></i>
                    </button>
                    <span>
                        <strong>Qty: {id in props.itemMap ?
                            props.cart[props.itemMap[id]].quantity : 0} kg</strong>
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

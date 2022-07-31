import img1 from "../images/seller1.webp";
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/Cart/action"
const Item = (props) => {
    const { name, description, id, price } = props
    const item = {
        id: id,
        name: name,
        price: price,
        description: description,

    }
    return (
        <div className="card cake-card me-2 my-3 shadow-sm" style={{ width: 230 }}>
            <img src={img1} className="card-img-top" alt="..."></img>
            <div className="card-body item-body rounded-3">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span>
                        <strong>&#8377;</strong> {price}
                    </span>
                    {/* <div>
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
                    </div> */}
             <a href="/edit" class="btn btn-primary mx-2">  Edit</a>        
            <button class="btn btn-danger ">
            <i class="fa fa-trash-o"></i> Delete
            </button>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Item);

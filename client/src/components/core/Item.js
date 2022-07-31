import img1 from "../images/seller1.webp";
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/Cart/action"
import ProductFormDelete from "../admin/ProductFormDelete";
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
                    {/* delete module */}
                    <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + props.index}>
                        <i className="fa fa-trash-o"></i> Delete
                    </button>
                    <div className="modal fade" id={"staticBackdrop" + props.index} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Are you sure?</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <ProductFormDelete productid={id} productname={name} />
                                </div>
                            </div>
                        </div>
                    </div>
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

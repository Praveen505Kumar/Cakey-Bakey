import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux/Cart/action"
import ProductFormDelete from "../admin/Products/ProductFormDelete";
import ProductFormEdit from "../admin/Products/ProductFormEdit";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const Item = (props) => {
    let role = -1
    if (localStorage.getItem("sample") !== null) {
        const user = JSON.parse(localStorage.getItem("sample"))
        role = user.role
    }
    const { name, description, id, price, category } = props;
    const item = {
        id: id,
        name: name,
        price: price,
        category: category,
        description: description
    }
    return (
        <div className="card cake-card me-2 my-3 shadow-sm" style={{ width: 250 }}>
            <div>
                <img src={"http://localhost:8000/api/product/photo/" + id}
                    className="card-img-top"
                    style={{ width: 250, height: 180 }}
                    alt="..."
                ></img>
            </div>
            <div className="card-body item-body rounded-3">
                <h5 className="card-title">{name.length > 20 ? (name.substr(0, 40) + "...") : (name)}</h5>
                <p className="card-text text-muted">{description.length > 50 ? (description.substr(0, 50) + "...") : (description)}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span>
                        <strong>&#8377; {price}</strong>
                    </span>

                    {role === 1 ? (<Fragment>
                        {/* edit modal */}
                        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target={"#staticBackdropEdit" + id}>
                            <i className="fa fa-trash-o"></i> Edit
                        </button>
                        <div className="modal fade" id={"staticBackdropEdit" + id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Edit Product</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <ProductFormEdit
                                            id={id}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* delete modal */}
                        <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + id}>
                            <i className="fa fa-trash-o"></i> Delete
                        </button>
                        <div className="modal fade" id={"staticBackdrop" + id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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

                    </Fragment>) : (
                        <div>
                            <Link to="/cart">
                                <button className="btn btn-secondary" onClick={() => props.addItemToCart(item)}>

                                    Add To Cart</button>
                            </Link>
                        </div>
                    )}


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

const Cart = () => {
    return (
        <div className="sticky-md-top bg-light bg-gradient cart-position">
        <div class="d-flex justify-content-between align-items-center mb-4 p-2">
          <h3 class="fw-normal mb-0 text-black">Cart</h3>
          <div class="col-xs-6">
            <button type="button" class="btn btn-danger btn-block">Clear Cart</button>
            </div>
            </div>
            <hr/>
            <div class="col-xs-4 px-2">
            <h5 className="card-title">Chocolate Cake</h5>
            <p className="card-text text-muted"><small>bulk of the card's content.</small></p>
            <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        Price:<strong>&#8377;</strong>  260
                                    </span>
                                    <div>
                                        <button className="item-btn">
                                            <i class="bi bi-dash-lg"></i>
                                        </button>
                                        <span>
                                            <strong>1</strong>
                                        </span>
                                        <button className="item-btn">
                                            <i class="bi bi-plus-lg"></i>
                                        </button>
                                    </div>
                                </div>
                                <hr/>

          </div>
          
          <div class="">
            <p>Total:<span>
                <strong>&#8377;</strong>  260
            </span></p>
          </div>
          <div className="d-grid  ">
                <button type="submit" className="btn btn-primary">GoTo Cart</button>
            </div>
          </div>
    );
}

export default Cart;
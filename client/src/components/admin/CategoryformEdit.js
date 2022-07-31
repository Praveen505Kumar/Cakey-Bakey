const CategoryformEdit = ({ categroryid, categoryname }) => {
    return (
        <div>
            <form>
                <div className="row mb-3">

                    <label className="col-sm-4 col-form-label">Category Name:</label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder={categoryname}
                            required


                        />
                    </div>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-success" >Update</button>
                </div>

            </form>
        </div>
    );
}

export default CategoryformEdit;
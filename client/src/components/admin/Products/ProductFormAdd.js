import { useState, useEffect } from "react";
import axios from "axios";


const ProductFormAdd = () => {
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        photo: "",
        error: "",
        success: false,
        formData: new FormData()
    })
    const { name, description, price, category, error, success, formData } = values;
    const handleChange = (e) => {
        formData.set(e.target.name, e.target.value);
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleFileChange = (e) => {
        formData.set(e.target.name, e.target.files[0]);
        setValues({ ...values, [e.target.name]: e.target.files[0] });
        console.log(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.post('http://localhost:8000/api/product/create/' + user._id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            setValues({ ...values, success: true, error: false });
            console.log(response);
            // window.location.reload();
        }).catch(error => {
            setValues({ ...values, error: error.response.data.error, success: false });
            console.log(error);
        })

    };

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/categories')
            .then((res) => {
                setCategories(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    },
        []
    );

    return (
        <div>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">Category Name :</label>
                    <div class="col-sm-7 my-2">
                        <select onChange={handleChange} class="form-select" name="category" >
                            <option>Select</option>
                            {categories.map((category) => (
                                <option value={category._id} key={category._id}>{category.name}</option>
                            ))}


                        </select>
                    </div>

                    <label class="col-sm-4 col-form-label my-1">Product Name :</label>
                    <div class="col-sm-7 my-2">
                        <input
                            type="name"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            required
                            onChange={handleChange}

                        />
                    </div>
                    <label class="col-sm-4 col-form-label my-1">Description :</label>
                    <div class="col-sm-7 my-1">
                        <textarea
                            type="description"
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">Photo :</label>
                    <div class="col-sm-7 my-2">
                        <input id="upload" type="file" name="photo" accept="image/*" class="form-control" onChange={handleFileChange}
                            required />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label my-1">Price in <b>Rs</b> :</label>
                    <div class="col-sm-7 my-2">
                        <input type="number" id="quantity" name="price"
                            required
                            onChange={handleChange} />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success px-4">Add</button>
                </div>
                {error && (<div className="alert alert-danger py-2" role="alert">
                    Error:{error}
                </div>)}
            </form>
        </div>

    );
}

export default ProductFormAdd;
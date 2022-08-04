import { useState, useEffect } from "react";
import axios from "axios";

const ProductFormEdit = ({ id }) => {
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        photo: "",
        error: "",
        success: false,
        formData: new FormData()
    });
    const handleChange = (e) => {
        values.formData.set(e.target.name, e.target.value);
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleFileChange = (e) => {
        values.formData.set(e.target.name, e.target.files[0]);
        setValues({ ...values, [e.target.name]: e.target.files[0] });
        console.log(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.put('http://localhost:8000/api/product/' + id + '/' + user._id, values.formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            setValues({ ...values, success: true, error: false });
            console.log(response);
            window.location.reload();
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
        axios.get("http://localhost:8000/api/product/" + id)
            .then(response => {
                setValues({
                    ...values,
                    name: response.data.name,
                    category: response.data.category.name,
                    description: response.data.description,
                    price: response.data.price,
                    success: true, error: false
                });
                console.log(response);
            })
            .catch(error => {
                // setValues({ ...values, error: error.response.data.error, success: false });
                console.log(error);
            });
    }, []);
    const displayOptions = categories.map((category) => {
        if (category.name === values.category) {
            return (<option value={category._id} key={category._id} selected>{category.name}</option>);
        }
        return (<option value={category._id} key={category._id}>{category.name}</option>);
    })
    return (
        <div>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">Category Name :</label>
                    <div class="col-sm-7 my-2">
                        <select onChange={handleChange} class="form-select" name="category">
                            <option>Select</option>
                            {displayOptions}
                        </select>
                    </div>

                    <label class="col-sm-4 col-form-label my-1">Product Name :</label>
                    <div class="col-sm-7 my-2">
                        <input
                            type="name"
                            name="name"
                            defaultValue={values.name}
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
                            defaultValue={values.description}
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
                        <input id="upload" type="file" name="photo" accept="image/*" class="form-control" onChange={handleFileChange} />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label my-1">Price in <b>Rs</b> :</label>
                    <div class="col-sm-7 my-2">
                        <input type="number"
                            id="quantity"
                            name="price"
                            defaultValue={values.price}
                            required
                            onChange={handleChange} />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success px-4">Update</button>
                </div>
                {values.error && (<div className="alert alert-danger py-2" role="alert">
                    Error:{values.error}
                </div>)}
            </form>
        </div>

    );
}

export default ProductFormEdit;
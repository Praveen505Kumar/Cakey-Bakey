import { useState ,useEffect } from "react";
import axios from "axios";


const Productform = () => {
    const [values, setValues] = useState({
        name: "",
        description:"",
        price:"",
        category:"",
        photo:"",
        error: "",
        success: false
    })
    const {name,description,price,photo,error,success } = values;
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/create/:userId', { description,name,price,photo})
            .then(response => {
                setValues({ ...values, success: true, error: false });
               
            })
            .catch(error => {
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
    
    return(
     <div>
        <form>
            <div class="row mb-3">
                <label class="col-sm-4 col-form-label">Category Name :</label>
                <div class="col-sm-5 my-2">
                <select class="form-select " aria-label="Default select example  ">
                {categories.map((category) => (
                <option value={category._id}>{category.name}</option>
                            ))}

               
                 </select>  
                 </div>        
                
                <label class="col-sm-4 col-form-label my-1">Product Name :</label>
                <div class="col-sm-5 my-2">
                    <input
                        type="name"
                        name="name"
                        className="form-control"
                        placeholder="Add new product"
                        required
                        onClick={handleChange}

                    />
                </div>
                <label class="col-sm-4 col-form-label my-1">Description :</label>
                <div class="col-sm-5 my-1">
                    <input
                        type="description"
                        name="description"
                        className="form-control"
                        placeholder="Add new product"
                        required
                        onClick={handleChange}

                    />
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">photo :</label>
                <div class="col-sm-8 my-2">
                <input id="upload" type="file" name="photo" onchange="readURL(this);" class="form-control border-0"
                 required
                 onClick={handleChange}/>
                </div>
                </div>
                <div class="row mb-3">
                <label class="col-sm-4 col-form-label my-1">Price in <b>Rs</b> :</label>
                <div class="col-sm-5 my-2">
                <input type="number" id="quantity" name="quantity"  min="200" max="1000"
                 required
                 onClick={handleChange}/>
                </div>
                </div>
                 
            {/* <div class="row mb-3">
                <label class="col-sm-4 col-form-label">Comments:</label>
                <div class="col-sm-8">
                    <input
                        type="comments"
                        name="comments"
                        className="form-control"
                        placeholder="optional"

                    />
                </div>
            </div> */}
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="submit" onClick={handleSubmit} class="btn btn-success">Add</button>
            </div>
        </form>
         </div>
       
    );
}

export default Productform;
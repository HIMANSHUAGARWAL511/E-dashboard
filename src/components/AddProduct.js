import React, { useState } from "react"
import "./Component.css"
const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const handleSubmit = async () => {
        console.log(name, price, category, company);
        let userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId)
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();
        console.log(result);
        setName("");
        setCategory("");
        setPrice("");
        setCompany("")
    }
    return (
        <>
            <div className="product">
                <h1>Add Product</h1>
                <input type="text" placeholder="Enter product name" value={name} onChange={(e) => { setName(e.target.value) }} className="inputBox" />
                <input type="text" placeholder="Enter product price" value={price} onChange={(e) => { setPrice(e.target.value) }} className="inputBox" />
                <input type="text" placeholder="Enter product category" value={category} onChange={(e) => { setCategory(e.target.value) }} className="inputBox" />
                <input type="text" placeholder="Enter product company" value={company} onChange={(e) => { setCompany(e.target.value) }} className="inputBox" />
                <button onClick={handleSubmit} className="submitBox" >Add Product</button>
            </div>
        </>
    )
}
export default AddProduct 
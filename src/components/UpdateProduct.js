import React, { useEffect, useState } from "react"
import "./Component.css";
import { useNavigate, useParams } from "react-router-dom";
const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState([]);
    const params = useParams();
    const Navigate = useNavigate();
    useEffect(() => {
        console.log(params);
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json()
        console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company)
    }

    const updateSubmit = async () => {
        console.log(name, price, category, company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-type': "application/json"
            }
        },
        )
        result = await result.json();
        console.log(result)
        Navigate('/')
    }
    return (
        <>
            <div className="product">
                <h1>Update Product</h1>
                <input type="text" placeholder="Enter product name" value={name} onChange={(e) => { setName(e.target.value) }} className="inputBox" />
                <input type="text" placeholder="Enter product price" value={price} onChange={(e) => { setPrice(e.target.value) }} className="inputBox" />
                <input type="text" placeholder="Enter product category" value={category} onChange={(e) => { setCategory(e.target.value) }} className="inputBox" />
                <input type="text" placeholder="Enter product company" value={company} onChange={(e) => { setCompany(e.target.value) }} className="inputBox" />
                <button onClick={updateSubmit} className="submitBox" style={{ width: "9rem" }}>Update Product</button>
            </div>
        </>
    )
}
export default UpdateProduct 
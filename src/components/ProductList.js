import React, { useEffect, useState } from 'react'
import './Component.css'
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        let result = await fetch('https://e-dashboard-backend-sj5b.onrender.com/product-list');
        result = await result.json();
        setProduct(result);
    }
    console.log('product', product);
    const deleteProduct = async (id) => {
        console.log(id)
        let result = await fetch(`https://e-dashboard-backend-sj5b.onrender.com/product/${id}`, {
            method: 'Delete'
        })
        result = await result.json();
        if (result) {
            getProducts();

        }
    }

    const SearchHandle = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`https://e-dashboard-backend-sj5b.onrender.com/search/${key}`);
            result = await result.json();
            setProduct(result);
            console.log(e.target.value)
        }
        else {
            getProducts();
        }
    }
    return (
        <div className='product'>
            <h1>ProductList</h1>
            <input type='text' className='searchBox' onChange={SearchHandle} placeholder='Search the Product....'></input>
            <ul className="productList">
                <li className='list1'><b>Sr No.</b></li>
                <li className='list2'><b> Name</b></li>
                <li className='list3'><b> Price</b></li>
                <li className='list4'><b>Category</b></li>
                <li className='list5'><b>Company</b></li>
                <li className='list5'><b>Operation</b></li>
            </ul>
            {product.length > 0 ?
                product.map((item, index) =>
                    <ul className="productList" key={item._id}>
                        <li className='list1'>{index + 1}</li>
                        <li className='list2'>{item.name}</li>
                        <li className='list3'>{item.price}</li>
                        <li className='list4'>{item.category}</li>
                        <li className='list5'>{item.company}</li>
                        <li className='list5'><button onClick={() => { deleteProduct(item._id) }}>Delete</button>/ <Link to={"/update/" + item._id}>Update</Link></li>
                    </ul>
                ) : <h1 className='product'>No Data Is Found</h1>
            }

        </div>
    )
}

export default ProductList
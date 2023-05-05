import React, { useState } from 'react'

function AddProducts(props) {
    const [product, setProduct] = useState({
        name: "",
        id: "",
        count: "",
        color: "",
        price: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { ...product };
        props.addProduct(newProduct);
        setProduct({
            name: "",
            id: "",
            count: "",
            color: "",
            price: ""
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    }
    return (
        <>
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Product Id:</label><br />
                <input type="text" required name='id' value={product.id} onChange={(e) => handleChange(e)} /><br />
                <label htmlFor="lname">Product name:</label><br />
                <input type="text" name="name" required value={product.name} onChange={(e) => handleChange(e)} /><br />
                <label htmlFor="lname">Product Price:</label><br />
                <input type="text" name="price" required value={product.price} onChange={(e) => handleChange(e)} /><br />
                <label htmlFor="lname">Product color:</label><br />
                <input type="text" name="color" required value={product.color} onChange={(e) => handleChange(e)} /><br />
                <label htmlFor="lname">Product count:</label><br />
                <input type="text" name="count" required value={product.count} onChange={(e) => handleChange(e)} /><br />
                <br />

                <button type='submit' className='buttonEdit' style={{ marginBottom: 20 }}>
                    Submit
                </button>
            </form>
        </>
    )
}

export default AddProducts
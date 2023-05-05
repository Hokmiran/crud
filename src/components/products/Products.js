import React, { useState } from 'react'
import AddProducts from '../addproducts/AddProducts'
import ProductsTable from '../productstable/ProductsTable'
import EditProducts from '../edit/EditProducts'
import { porductList } from '../productsdata/ProductsData'

function Products() {
    const [products, setProducts] = useState(porductList);
    const [edit, setEdit] = useState({});

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }

    const handleDelete = (id) => {
        let filteredProducts = products.filter(q => q.id !== id);
        setProducts(filteredProducts)
    }

    const editHandler = (id) => {
        let findCurrentProduct = products.find((index) => Number(index.id) === Number(id))
        setEdit(findCurrentProduct)
    }

    const saveHandler = (obj) => {
        setProducts(...products.filter((a) => obj.id === a.id), obj)
    }


    return (
        <>
            <div className='components'>
                <div>
                    <AddProducts addProduct={addProduct} />
                </div>
                <div>
                    <EditProducts editedData={edit} saveHandler={saveHandler} allDatas={products} />
                </div>
            </div>
            <ProductsTable products={products} editHandler={editHandler} handleDelete={handleDelete} />
        </>
    )
}

export default Products;
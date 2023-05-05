import React from 'react'

function ProductsTable(props) {
    const { products, handleDelete } = props;

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Count</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.color}</td>
                            <td>{product.count}</td>
                            <td>
                                <button className='buttonEdit' onClick={() => props.editHandler(product.id)}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(product.id)} className='buttonDelete'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {products.length === 0 && (
                        <tr>
                            <td colSpan="8">No products found</td>
                        </tr>
                    )}

                </tbody>

            </table>
        </>
    )
}

export default ProductsTable
import React, {  useState } from 'react'

function EditProducts({ editedData, saveHandler,allDatas }) {

  const [obj, setObj] = useState(editedData)

  const submitHandler = (obj) => {
    let getFindAllDatas = allDatas.filter(index => index.id !== obj.id)
    saveHandler([...getFindAllDatas,obj])
    setObj({})
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setObj(prevProduct => ({
        ...prevProduct,
        [name]: value
    }));
   
}


  return (
    <>
      <h2>Edit Product</h2>

      <form onSubmit={(e) => {
        e.preventDefault()
        submitHandler(obj)
        }} >
        <label htmlFor="fname">Product Id:</label><br />
        <input onChange={(e) => handleChange(e)} value={obj?.id} disabled type="text" required name='id' /><br />
        <label htmlFor="lname">Product name:</label><br />
        <input onChange={(e) => handleChange(e)} value={obj?.name} type="text" name="name" required /><br />
        <label htmlFor="lname">Product Price:</label><br />
        <input onChange={(e) => handleChange(e)} value={obj?.price} type="text" name="price" required /><br />
        <label htmlFor="lname">Product color:</label><br />
        <input onChange={(e) => handleChange(e)} value={obj?.color} type="text" name="color" required /><br />
        <label htmlFor="lname">Product count:</label><br />
        <input onChange={(e) => handleChange(e)} value={obj?.count} type="text" name="count" required /><br />
        <br />

        <button type='submit' className='buttonEdit' style={{ marginBottom: 20 }}>
          Submit
        </button>
      </form>
    </>
  )
}

export default EditProducts
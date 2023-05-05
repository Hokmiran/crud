import React from 'react'

function EditProducts({ editedData, saveHandler, allDatas, setEdit, closeModal }) {

  const submitHandler = (obj) => {
    let getFindAllDatas = allDatas.filter(index => index.id !== obj.id)
    saveHandler([...getFindAllDatas, obj])
    setEdit({})
    closeModal();
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));

  }


  return (
    <>
      <h2>Edit Product</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        submitHandler(editedData)
      }} >
        <label htmlFor="fname">Product Id:</label><br />
        <input onChange={(e) => handleChange(e)} value={editedData?.id} disabled type="text" required name='id' /><br />
        <label htmlFor="lname">Product name:</label><br />
        <input onChange={(e) => handleChange(e)} value={editedData?.name} type="text" name="name" required /><br />
        <label htmlFor="lname">Product Price:</label><br />
        <input onChange={(e) => handleChange(e)} value={editedData?.price} type="text" name="price" required /><br />
        <label htmlFor="lname">Product color:</label><br />
        <input onChange={(e) => handleChange(e)} value={editedData?.color} type="text" name="color" required /><br />
        <label htmlFor="lname">Product count:</label><br />
        <input onChange={(e) => handleChange(e)} value={editedData?.count} type="text" name="count" required /><br />
        <br />

        <button type='submit' className='buttonEdit' style={{ marginBottom: 20 }}>
          Save
        </button>
      </form>
    </>
  )
}

export default EditProducts
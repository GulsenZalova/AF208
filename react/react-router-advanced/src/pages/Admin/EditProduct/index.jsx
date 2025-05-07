import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import * as Yup from 'yup';
import { SupplierContext } from '../../../context/SupplierContext';

function EditProduct() {
  let [product,setProduct]=useState(null)
  let { suppliers, setSuppliers } = useContext(SupplierContext)
  let navigate = useNavigate()

  let { id } = useParams()
  async function GetProduct() {
    let res = await axios.get(`http://localhost:3000/products/${id}`)
    setProduct(res.data)
}

useEffect(() => {
    GetProduct()
}, [id])

  const ProductSchema = Yup.object().shape({
    title: Yup.string()
      .trim()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string()
    .trim()
      .min(10, 'Too Short!')
      .max(1000, 'Too Long!')
      .required('Required'),
    image: Yup.string()
    .trim()
      .url('Invalid Image Format')
      .required('Required'),
    price: Yup.number()
      .min(10, "Less")
      .max(1000, "Most")
      .required('Required'),
    category: Yup.string()
    .trim()
      .min(10, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
  });


let formik = useFormik({
  initialValues: {
    title: "" ,
    image:  '',
    description:'',
    price: '',
    category: ''
  },
  enableReinitialize:true,
  onSubmit: async (values) => {
    await axios.put(`http://localhost:3000/products/${id}`, values)
    console.log(values)
    let index=suppliers.findIndex(x=>x.id==id)
    suppliers.splice(index,1,{...values,id:id})
    setSuppliers([...suppliers])
    navigate("/admin/products")

  },
  validationSchema:  ProductSchema 
})


useEffect(()=>{
  if(product){
     formik.setValues({
      title: product.title || "" ,
      image: product.image || '',
      description: product.description || '',
      price: product.price || '',
      category: product.category || ''
     })
  }
},[product])

  return (
    <>
    {
             product ? (
              <form onSubmit={formik.handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title ? <div style={{ color: "red" }}>{formik.errors.title}</div> : null}
          
          
              <label htmlFor="image">Image</label>
              <input
                id="image"
                name="image"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.image}
              />
              {formik.touched.image && formik.errors.image ? <div style={{ color: "red" }}>{formik.errors.image}</div> : null}
              <label htmlFor="description">Description</label>
              <input
                id="description"
                name="description"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description ? <div style={{ color: "red" }}>{formik.errors.description}</div> : null}
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.price}
              />
          
              {formik.touched.price && formik.errors.price ? <div style={{ color: "red" }}>{formik.errors.price}</div> : null}
              <label htmlFor="category">category</label>
              <input
                id="category"
                name="category"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.category}
              />
              {formik.touched.category && formik.errors.category ? <div style={{ color: "red" }}>{formik.errors.category}</div> : null}
              <button type="submit">Submit</button>
            </form>
            ) : ( <h1>loading</h1>)
    }
    </>
  )
}

export default EditProduct
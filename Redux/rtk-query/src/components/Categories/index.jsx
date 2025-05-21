import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { useDeleteCategoryMutation, useGetCategoriesQuery, usePostCategoryMutation, usePutCategoryMutation } from '../../../redux/Categories/CategoryApi'
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
function Categories() {
    let [newCategory,setNewCategory]=useState({name:"",description:""})
    let { data: categories, isLoading, refetch } = useGetCategoriesQuery()
    const [deleteCategory] = useDeleteCategoryMutation()
    const [postCategory] = usePostCategoryMutation()
    const [putCategory] = usePutCategoryMutation()
    async function handleDelete(id) {
        await deleteCategory(id)
        refetch()
    }


    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     await postCategory(newCategory)
    //     refetch()
    // }


        async function handleSubmit(e) {
        e.preventDefault()
        console.log(newCategory)
        await putCategory({id:4,name:newCategory.name,description:newCategory.description})
        refetch()
    }



    return (
        <>
          <div className="container">
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>setNewCategory({...newCategory,name:e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control   onChange={(e)=>setNewCategory({...newCategory,description:e.target.value})}/>
                </Form.Group>
                <button type='submit' className='btn btn-primary'>Add</button>
            </Form>
          </div>

            {
                isLoading ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

                    : <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                categories.map(x => {
                                    return <tr>
                                        <td>{x.id}</td>
                                        <td>{x.name}</td>
                                        <td>{x.description}</td>
                                        <td><Link to={`/detail/${x.id}`}><button className='btn btn-primary'>detail</button></Link></td>
                                        <td><button className='btn btn-danger' onClick={() => handleDelete(x.id)}>delete</button></td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </Table>
            }


        </>
    )
}

export default Categories
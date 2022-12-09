import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'

import{Link, NavLink, useNavigate} from 'react-router-dom'

import Modal from 'react-bootstrap/Modal';

export const Home = () => {

  const [getUser,setGetuser]=useState([]);
  const [deleteId,setdeleteId]=useState('');



  // delete aler-------------------------------------------

  const [show, setShow] = useState(false);
 

  const handleShow = (id) =>{ 
    
    setdeleteId(id)
    setShow(true)
  }
  console.log("--deleteId-"+deleteId)

  const handleClose = () => {
    setShow(false)};
    // delete aler-------------------------------------------
  // const Navigation=useNavigate("")
    
  const fetchUser= async()=>{
    const result=await axios.get('http://localhost:1000/user')
     setGetuser(result.data)
  }
  useEffect(()=>{
    fetchUser();
  },[])


  const deleteUser=async()=>{
    console.log("-apiu--"+deleteId)
    const result= await axios.delete(`http://localhost:1000/user/${deleteId}`)
    if(result.status===204){
      fetchUser();
      setShow(false);
    }
    else{
      alert("not delete")
    }
  }
  return (
    <>
    <h1 className='py-3 my-3 bg-success text-center text-white'>User Management System</h1>

     <NavLink to={'/adduser/:id'}><Button className='btn btn-primary'>Add user</Button></NavLink> 
     <Table striped bordered hover className='mt-3'>
      <thead className='table-dark'>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>CITY</th>
          <th>OPERATIONS</th>

        </tr>
      </thead>
      <tbody>
        {  
        getUser.map((item, id)=>{
          return(
            <>
             <tr>
          <td>{id+1}</td>
          <td>{item.name}</td>
          <td>{item.gender}</td>
          <td>{item.city}</td>
          <td>
           <div className='justify-content-between d-flex button_box' style={{width:50}}>
           <Link to={`/view/${item._id}`}><Button>Views</Button></Link>
           <Link to={`/adduser/${item._id}?page=edit`}><Button className='mx-2'>Edit </Button></Link>
           {/* <Link ><Button onClick={()=>{deleteUser(item._id)}}>Delete</Button></Link> */}
           <Link ><Button onClick={()=>{handleShow(item._id) }}>Delete</Button></Link>


       
        
           </div>
          </td>
        </tr>
            </>
          )
        })
         
        }
        
       
      </tbody>
    </Table>

{/* 
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure Delete  You Data!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteUser}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

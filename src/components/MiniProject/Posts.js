import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from "../../redux/reducers/PostReducer"
import CommonModal from "../../components/CommonModal/CommonModal"
import { editPost,addPost } from "../../redux/reducers/PostReducer"
import {
    TableContainer,
    Table,    
    Thead,
    Tbody,
    Tr,
    Td,Th,
    Tfoot,
    Box,
    Button,
    Heading
} from '@chakra-ui/react'
import GenError from "../GenError/GenError"
import EditComponent from "./EditComponent"
import postsReducer from "../../redux/reducers/PostReducer"
import AddComponent from "./AddComponent"
const Posts=()=>{
  const [showModal,setShowModal]=useState(false)
  const [showAddModal,setAddShowModal]=useState(false)
  const closeAddModal=()=>{setAddShowModal(false)}
  const openAddModal=()=>{setAddShowModal(true)}
  const closeModal=()=>{setShowModal(false)}
  const openModal=()=>{setShowModal(true)}
  const dispatch=useDispatch()
  const posts=useSelector(state=>state.posts)
  const {getAllPostStatus,allPosts}=posts
  const [data,setData]=useState("")
  const [addData,setAddData]=useState("")
  
  useEffect(()=>{
    dispatch(getAllPosts())
  },[])

  const handleEditData=(e)=>{
    let id=e.target.id
    let value=e.target.value
    setData({...data,[id]:value})    
   }
   
  const handleAddData=(e)=>{    
    let id=e.target.id
    let value=e.target.value
    setAddData({...addData,[id]:value})    
  }


   const handleEdit=()=>{
    dispatch(editPost(
      {data}
    ));

    closeModal()
   }


   const handlePopup=(e)=>{
    if(e.target.id==="edit"){
     const item=JSON.parse(e.target.dataset.item)     
     setData({id:item[0],title:item[1],body:item[2]})  
     openModal()
    }else{
      setAddData(e.target.value)      
      openAddModal()
    }
    
    
   }
   const handleAdd=()=>{
    let data={...addData,userId:1}
    dispatch(addPost(
      {data}
      
    ))
   closeAddModal()
   }
   
    return(
        <>

        <Heading style={{textAlign:"center"}}>Posts Data</Heading>
        <Box p={5}>
        <TableContainer>
  <Table style={{maxWidth:"100%"}} variant='striped' colorScheme='teal'>
    
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Title</Th>
        <Th>Post</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
            
    <GenError status={getAllPostStatus}  dataToCheck={posts.allPosts.length!==0} >
    {allPosts.map((item)=><Tr><Td>{item.id}</Td><Td>{item.title}</Td><Td>{item.body}</Td><Td  onClick={handlePopup} style={{display:"flex",gap:"1em",height:'5em'}}><img id="edit" data-item={JSON.stringify([item.id,item.title, item.body])}  style={{cursor:"pointer"}} src="../../images/edit.png" title="Edit" alt="Edit"/><img id="delete" style={{cursor:"pointer"}} src="../../images/delete.png" title="Delete" alt="Delete"/></Td></Tr>)}
      </GenError> 
      
    </Tbody>
    <Tfoot>
      <Tr>
        <Th colSpan={4} style={{textAlign:"center"}}><Button id='add' onClick={handlePopup} >Add Post</Button></Th>
        
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
</Box>
{showModal?<CommonModal successCallBack={handleEdit} title="Edit Title and Body" component={<EditComponent data={data} handleChange={handleEditData}/>} closeModal={closeModal} />:null}
{showAddModal?<CommonModal successCallBack={handleAdd} title="Add Title and Body" component={<AddComponent data={addData}  handleChange={handleAddData}/>} closeModal={closeAddModal} />:null}
</>
    )
}

export default Posts
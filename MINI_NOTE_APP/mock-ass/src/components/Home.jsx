import { Box, Button, Input ,Text,  useColorModeValue,} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addNoteFailure, addNoteRequest, addNoteSuccess, DeleteNoteFailure, DeleteNoteRequest, DeleteNoteSuccess, Notedata } from '../redux/action';
import { useParams } from 'react-router-dom';
 export const Home = () => {
    const {id} = useParams();
    const note=useSelector((store)=>store.note.note)
    const dispatch=useDispatch()
    // const [singleNote,setNote] = useState({});
  const [form,setForm]= useState({
    title: "",
    Description: "",
    Date: ""

  });

  const handleOnchange=(e)=>{
    let{name,value}=e.target;
    setForm({...form,[name]:value});
  }
  
useEffect(()=>{
dispatch(Notedata())
},[])


   const createNote =()=>{
         dispatch(addNoteRequest()) 
    axios.post("http://localhost:8080/data",form)
      .then((r)=>dispatch(addNoteSuccess()))
       .then(()=>dispatch(Notedata()))
      .catch((e)=>dispatch(addNoteFailure(e)))

      setForm({title: "",
      Description: "",
      Date: ""})
  }

  const handleDelete = (id)=>{
    dispatch(DeleteNoteRequest());
    axios.delete(`http://localhost:8080/data/${id}`)
    .then((r)=>{
        dispatch(DeleteNoteSuccess(id));
    })
    .catch((e)=>dispatch(DeleteNoteFailure()));
}


// useEffect(()=>{
//     let newNote= note.find((item)=>item.id===Number(id));
//     setNote(newNote);

//  },[note,id])
//console.log(id)

  return (
   
<Box w={"80%"} height={"100vh"} margin={"auto"} mt={15}  >
  <Box w={'300px'} h={"250px"} mb={'40px'} margin={"auto"}  gap={"5px"} >
  <Input placeholder='TITLE' name="title" value={form.title} onChange={handleOnchange}/>
  <Input placeholder='DESCRIPTION'  name="Description"value={form.Description}  onChange={handleOnchange}/>
  <Input placeholder='Date'  type="date" name="Date"value={form.Date}  onChange={handleOnchange}/>
 <Button  bg={"black"} color={"red"}  onClick={createNote}>Create Note</Button>
  </Box>


  <Box w={"80%"} border={"2px solid white"}  marginLeft={"70px"} >
    
       <Grid templateColumns='repeat(4, 1fr)' gap={5} padding={10} bg={useColorModeValue('gray')}>
                  {note?.map((e)=>{
                    return(
                      <GridItem border={'2px solid gray'} key={e.id} cursor={'pointer'}>
                       <b><Text>TITLE: {e.title}</Text></b>
                        <b><Text>Description: {e.Description}</Text></b> 
                      <b><Text> Creation time: {e.Date}</Text></b> 
                        <Button bg={"black"} color={"red"} onClick={()=>handleDelete(e.id)}>Delete</Button>
                      </GridItem>
                    )
                  })}  
              </Grid>
  </Box>
  
    </Box>

    
    
  )
 }

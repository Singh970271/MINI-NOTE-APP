
import axios from "axios"
import { ADD_NOTE_FAILURE, ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, DELETE_NOTE_FAILURE, DELETE_NOTE_REQUEST, DELETE_NOTE_SUCCESS, GET_NOTE_FAILURE, GET_NOTE_REQUEST, GET_NOTE_SUCCESS } from "./action.type"

export const NoteRequest=()=>{

    return{
        type:GET_NOTE_REQUEST
    }
    
}

export const NoteSuccess=(data)=>{
    return{
        type:GET_NOTE_SUCCESS,
        Payload:data
    }
     
 
}


export const NoteFailure=(err)=>{
    return{
        type:GET_NOTE_FAILURE,
        Payload:err
    }
}


export const addNoteRequest=()=>{
    return{
        type:ADD_NOTE_REQUEST
    }
    
}

export const addNoteSuccess=(data)=>{
    return{
        type:ADD_NOTE_SUCCESS,
        Payload:data
    }
     
 
}


export const addNoteFailure=(err)=>{
    return{
        type:ADD_NOTE_FAILURE,
        Payload:err
    }
}

export const DeleteNoteRequest = ()=>{

    return {type:DELETE_NOTE_REQUEST}
};
export const DeleteNoteSuccess = (data)=>({type:DELETE_NOTE_SUCCESS,Payload:data});
export const DeleteNoteFailure = (data)=>({type:DELETE_NOTE_FAILURE,Payload:data});


export const Notedata=()=>async (dispatch)=>{
 dispatch(NoteRequest());
  await axios.get("http://localhost:8080/data")
  .then((r)=>{
    console.log(r.data)
    dispatch(NoteSuccess(r.data))})
  .catch((e)=>dispatch(NoteFailure(e)))
}



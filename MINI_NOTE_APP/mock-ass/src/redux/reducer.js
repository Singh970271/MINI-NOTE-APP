import { ADD_NOTE_FAILURE, ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, DELETE_NOTE_FAILURE, DELETE_NOTE_REQUEST, DELETE_NOTE_SUCCESS, GET_NOTE_FAILURE, GET_NOTE_REQUEST, GET_NOTE_SUCCESS } from "./action.type"

const inistate={
    note:[],
    isLoading:false,
    isError:false
}

export const NoteReducer=(state=inistate,{type,Payload})=>{
 switch(type){
    case GET_NOTE_REQUEST:
        return{...state,isLoading:true,isError:false}

        case GET_NOTE_SUCCESS:
            return{...state,note:Payload,isLoading:false,isError:false}

          case GET_NOTE_FAILURE:
            return{...state,isLoading:false,isError:true}  

            case ADD_NOTE_REQUEST:
                return{...state,isLoading:true,isError:false}
        
                case ADD_NOTE_SUCCESS:
                    return{...state,isLoading:false,isError:false}
        
                  case ADD_NOTE_FAILURE:
                    return{...state,isLoading:false,isError:true}  

                    
                case DELETE_NOTE_REQUEST:
                    return {
                        ...state,
                        isLoading:true,
                        isError:false
                    }
               case DELETE_NOTE_SUCCESS:
                let newarr = state.note.filter((ele)=>ele.id!==Payload);
    
                return {
                    ...state,
                    note:newarr,
                    isLoading:false,
                    isError:false
                }
            case DELETE_NOTE_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    isError:true
                }


    default :return state        
 }


}
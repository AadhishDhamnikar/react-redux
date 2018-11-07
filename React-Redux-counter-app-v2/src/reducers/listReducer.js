import list from "./list";

const initialstate={
    List:list,
    viewList:""
}

export default function(state=initialstate, action){
    switch(action.type){
        
        case "ViewList":
         return Object.assign({}, state, {viewList:action.list});
        break;
        default:
         return state;
    }
}

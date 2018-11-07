import mydb from "./mydb";

const initialstate={
    details:mydb,
    Detail:""
}

export default function(state=initialstate, action){
    switch(action.type){
        
        case "Detail":
         return Object.assign({}, state, {Detail:action.detail});
        break;
        default:
         return state;
    }
}

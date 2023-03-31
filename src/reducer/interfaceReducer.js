import {interfaceData} from './data';
// initial state
export const initialState={
    interfaceData:interfaceData,

};
// actions
export const ACTIONS={
    UPDATE_DATA:"UPDATE_DATA",
    ADD_DATA:"ADD_DATA",
    DELETE_DATA:"DELETE_DATA",
}

// reducers to handle actions 
export const reducer=(state,action)=>{

    switch(action.type){
        case ACTIONS.UPDATE_DATA:{
            // console.log(action);
            let {id,field,type,required}=action.dataToUpdate;
            const data=state.interfaceData;
            let requiredData=data;
            //find the object with given ind
            while(id.length>=1){
                let ind=Number(id[0]);
                requiredData=requiredData.children[ind];
                id=id.slice(1);
            }
            //update the data
            requiredData.field=field;
            requiredData.type=type;
            requiredData.required=required;
            return {
                interfaceData:data,
            }


        }
        default:
            return state;
            
    }
}
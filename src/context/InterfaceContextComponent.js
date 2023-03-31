import React from "react";
import { useReducer } from "react";
import { initialState,reducer,ACTIONS } from "../reducer/interfaceReducer";
export const InterfaceContext = React.createContext();

export const InterfaceContextComponent = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,initialState);

  const value={
    interfaceData:state.interfaceData,
    currentEdit:state.currentEdit,
    updateData:(id,field,type,required)=>{
        const dataToUpdate={
          id,
          field,
          type,
          required,
        }
        dispatch(
          {type:ACTIONS.UPDATE_DATA,dataToUpdate}
        )
    },
    addData:(id)=>{
      dispatch({type:ACTIONS.ADD_DATA,id});
    },
    deleteData:(id)=>{
      dispatch({type:ACTIONS.DELETE_DATA,id});
    },
    setCurrentEdit:(id)=>{
      dispatch({type:ACTIONS.SET_CURRENT_EDIT,id});
    }
  }
  



  return (
    <InterfaceContext.Provider value={value}>
      {children}
    </InterfaceContext.Provider>
  );
};




/*

const updateData=(id,field,type,required)=>{
  console.log("inside update data");
  // console.log("inside update data jgj");
  console.log(data);
    

    setData(prevData=>{
        let requiredData=prevData;
        //find the object with given ind
        while(id.length>=1){
            let ind=Number(id[0]);
            requiredData=requiredData.children[ind];
            id=id.slice(1);
        }
        //modify the data

        requiredData.field=field;
        requiredData.type=type;
        requiredData.required=required;
        return prevData;
    })

  }

*/
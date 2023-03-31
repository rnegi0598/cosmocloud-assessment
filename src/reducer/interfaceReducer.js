import { interfaceData } from "./data";
// initial state
export const initialState = {
  interfaceData: interfaceData,
  currentEdit: "",
};
// actions
export const ACTIONS = {
  UPDATE_DATA: "UPDATE_DATA",
  ADD_DATA: "ADD_DATA",
  DELETE_DATA: "DELETE_DATA",
  SET_CURRENT_EDIT: "SET_CURRENT_EDIT",
};

// reducers to handle actions
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_DATA: {
      let { id, field, type, required } = action.dataToUpdate;
      const data = state.interfaceData;
      let requiredField = data;
      //find the field with the given id
      while (id.length >= 1) {
        let ind = Number(id[0]);
        requiredField = requiredField.children[ind];
        id = id.slice(1);
      }
      //update the data
      requiredField.field = field;
      requiredField.type = type;
      requiredField.required = required;
      requiredField.children =
        type === "object" ? requiredField.children || [] : null;
      return {
        ...state,
        interfaceData: data,
      };
    }
    case ACTIONS.ADD_DATA: {
      let id = action.id;

      const data = state.interfaceData;
      let requiredField = data;
      //find the field with given ind
      while (id.length >= 1) {
        let ind = Number(id[0]);
        requiredField = requiredField.children[ind];
        id = id.slice(1);
      }
      //add children to obj
      const childrenLength = requiredField.children.length;
      let child = {
        id: action.id + `${childrenLength}`,
        field: "addName",
        type: "integer",
        required: false,
        children: null,
      };
      requiredField.children.push(child);

      return {
        interfaceData: data,
        currentEdit: child.id,
      };
    }
    case ACTIONS.DELETE_DATA: {
      const data = state.interfaceData;
      let requiredField = data;
      ////we have id as action.id .parentId= id.slice(0,-1);
      let parentId = action.id.slice(0, -1);
      //find the parent object with given ind
      while (parentId.length >= 1) {
        let ind = Number(parentId[0]);
        requiredField = requiredField.children[ind];
        parentId = parentId.slice(1);
      }
      //remove the child with given id
      let newChildren = requiredField.children.filter((child) => {
        if (child.id !== action.id) {
          return true;
        } else {
          return false;
        }
      });
      requiredField.children = newChildren;
      return {
        ...state,
        interfaceData: data,
      };
    }
    case ACTIONS.SET_CURRENT_EDIT: {
      let id = action.id;
      return {
        ...state,
        currentEdit: id,
      };
    }
    default:
      return state;
  }
};

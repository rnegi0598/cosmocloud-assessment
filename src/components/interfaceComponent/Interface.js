import React, { useContext } from "react";
// context
import { InterfaceContext } from "../../context/InterfaceProvider";
// components
import ObjectItem from "../objectComponent/ObjectItem";
import NonObjectItem from "../nonObjectComponent/NonObjectItem";
// style
import "./Interface.scss";
// mui icons
import AddIcon from "@mui/icons-material/Add";

const Interface = () => {
  const { interfaceData, addData } = useContext(InterfaceContext);
  
  const addHandler = () => {
    addData("");
  };

  console.log(interfaceData);
  
  return (
    <div className="interfaceWrapper">
      <div className="interfaceRoot">
        <p>Field name and type</p>
        <button onClick={addHandler}>
          <AddIcon />
        </button>
      </div>
      <div>
        {interfaceData.children.map((item) => {
          //depending on the item's type we call diff component
          return item.type === "object" ? (
            <ObjectItem key={item.id} item={item} />
          ) : (
            <NonObjectItem key={item.id} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Interface;

import React, { useState, useContext } from "react";
import "./NonObjectItem.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { InterfaceContext } from "../../context/InterfaceContextComponent";

const NonObjectItem = ({ item }) => {
  const { id, field, type, required } = item;
  const [editMode, setEditMode] = useState(false);
  const [fieldInput, setField] = useState(field);
  const [menuInput, setMenu] = useState(type);
  const [checkboxInput, setCheckBox] = useState(required);
  const {updateData } = useContext(InterfaceContext);

  const clickHandler = (e) => {
    // console.log('clicked container div');
    setEditMode(true);
  };
  const submitHandler = (e) => {
    e.stopPropagation();
    // console.log('clicked  submit');
    updateData(id, fieldInput, menuInput, checkboxInput);
    setEditMode(false);
  };
  const deleteHandler = (e) => {
    e.stopPropagation();
    console.log("clicked  delete");
  };
  const addHandler = (e) => {
    e.stopPropagation();
    console.log("clicked  add");
  };
  return (
    <div
      className="nonObject"
      style={{ width: `${768 - id.length * 30}px` }}
      onClick={clickHandler}
    //   onMouseLeave={submitHandler}
    >
      <div className="left">
        <span className="textInput">
          <input
            type="text"
            value={fieldInput}
            onChange={(e) => {
              setField(e.target.value);
            }}
            onClick={(e)=>{e.target.select()}}
            disabled={!editMode}
          />
        </span>
        <span
          className="dropdownMenu"          
        >
          <select
            name="type"
            value={menuInput}
            onChange={(e) => {
              setMenu(e.target.value);
            }}
            disabled={!editMode}
          >
            <option value="string">STRING</option>
            <option value="integer">NUMBER</option>
            <option value="boolean">BOOLEAN</option>
            <option value="object">OBJECT</option>
          </select>
        </span>
      </div>
      <div
        className="right"
        style={{ visibility: `${editMode ? "visible" : "hidden"}` }}
      >
        <span className="checkboxInput">
          <input
            type="checkbox"
            checked={checkboxInput}
            onChange={(e) => {
              setCheckBox(e.target.checked);
            }}
          />
        </span>
        {editMode ? (
          <span className="submit" onClick={submitHandler}>
            <DoneIcon />
          </span>
        ) : (
          ""
        )}
        {type === "object" ? (
          <span className="add" onClick={addHandler}>
            <AddIcon />
          </span>
        ) : (
          ""
        )}
        <span className="delete" onClick={deleteHandler}>
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
};

export default NonObjectItem;

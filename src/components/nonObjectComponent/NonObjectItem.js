import React, { useState, useContext } from "react";
import "./NonObjectItem.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { InterfaceContext } from "../../context/InterfaceContextComponent";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";

const NonObjectItem = ({ item }) => {
  const { id, field, type, required } = item;
  // const [editMode, setEditMode] = useState(false);
  const [fieldInput, setField] = useState(field);
  const [menuInput, setMenu] = useState(type);
  const [checkboxInput, setCheckBox] = useState(required);
  const { updateData, addData, deleteData, currentEdit, setCurrentEdit } =
    useContext(InterfaceContext);
 
  const clickHandler = (e) => {
    setCurrentEdit(id);
  };
  const submitHandler = (e) => {
    e.stopPropagation();
    updateData(id, fieldInput, menuInput, checkboxInput);
    setCurrentEdit("");
  };
  const deleteHandler = (e) => {
    e.stopPropagation();
    deleteData(id);
  };
  const addHandler = (e) => {
    e.stopPropagation();
    addData(id);
  };
  return (
    <div
      className="nonObject"
      style={{
        width: `${718 - id.length * 30}px`,
        backgroundColor: `${currentEdit === id ? "#C0C0C0" : "#E0E0E0"}`,
      }}
      onClick={clickHandler}
    >
      <div className="left">
        <span className="indexOfItem">
          {id.length === 1 ? Number(id) + 1 + " . " : ""}
        </span>
        <span className="textInput">
          <input
            id={id}
            
            type="text"
            value={fieldInput}
            onChange={(e) => {
              setField(e.target.value);
            }}
            onClick={(e) => {
              e.target.select();
            }}
            disabled={currentEdit === id ? false : true}
            onInput={(e) => {
              e.target.style.width =
                e.target.value.length === 0 ? "50px" : 8*e.target.value.length+20+"px";
                console.log(e.target.size);
            }}
           style={{width:`${fieldInput.length*8+40}px`}}
          />
        </span>
        <span className="dropdownMenu">
          <select
            name="type"
            value={menuInput}
            onChange={(e) => {
              setMenu(e.target.value);
            }}
            disabled={currentEdit === id ? false : true}
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
        style={{ visibility: `${currentEdit === id ? "visible" : "hidden"}` }}
      >
        <span className="checkboxInput">
          <FormGroup style={{ display: "inline" }}>
            <FormControlLabel
              control={
                <Switch
                  className="toggle"
                  checked={checkboxInput}
                  onChange={(e) => {
                    setCheckBox(e.target.checked);
                  }}
                />
              }
              label={
                <Typography className="formControlLabel">Required</Typography>
              }
              labelPlacement="start"
            />
          </FormGroup>
        </span>
        {currentEdit === id ? (
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

import React from "react";
//components
import NonObjectItem from "../nonObjectComponent/NonObjectItem";
//styles
import "./ObjectItem.scss";

const ObjectItem = ({ item }) => {

  return (
    <div className="objectWrapper">
      <NonObjectItem item={item} />
      {item.children.map((child) => {
        return child.type === "object" ? (
          <ObjectItem key={child.id} item={child} />
        ) : (
          <NonObjectItem key={child.id} item={child} />
        );
      })}
    </div>
  );
};

export default ObjectItem;

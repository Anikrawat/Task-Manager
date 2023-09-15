import React, { useState } from "react";
import { getDatabase,remove,ref} from "firebase/database";

const ListItems = (props) => {

  const [active, setActive] = useState("");

  const db = getDatabase();

  const [deleteItem, setDeleteItem] = useState("invisible");


  const toggleActive = () => {
    if (active === "active") {
      setActive("");
      setDeleteItem("invisible");
    } else {
      setDeleteItem("visible");
      setActive("active");
    }
  };

  return (
    <>
      <li
        className={`list-group-item ${active} d-flex justify-content-between`}
        aria-current="true"
        style={{ width: "23vw", margin: "5px 0px" }}
        onClick={toggleActive}
        key={props.indexNumber}
        id={props.id}
      >
        {props.Name}
        <span
          className={`badge bg-danger ${deleteItem}`}
          style={{ cursor: "pointer", }}
          onClick={() => {
            remove(ref(db, `users/${props.Name}`))
            props.onSelect(props.id)
          }}
        >
          Delete
        </span>
      </li>
    </>
  );
};

export default ListItems;

import React from "react";
import "./List.css";
import ListItems from "./ListItems";
import { useGlobalContext } from "./context";
import { getDatabase,set,ref } from "firebase/database";

const List = () => {

  let { newTask, DeleteListItem,number,addTask, items, itemName} = useGlobalContext();

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        id="mainContainer"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-start"
          style={{
            width: "25vw",
            height: "60vh",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <h1 style={{margin: '20px 0px 0px'}}>Task-Manager</h1>
          <div className="d-flex" id="addTaskContainer">
            <input
              type="text"
              id="addTask"
              placeholder="Add New Task"
              onChange={newTask}
              value={itemName}
            />
            <div
              className="d-flex justify-content-center"
              id="AddImageContainer"
              onClick={addTask}
            >
              <i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
            </div>
          </div>
          <div className="d-flex justify-content-center flex-column">
            <ul className="list-group">
            {items.map((curr, index) => {
              const db = getDatabase();
              set(ref(db, `users/${curr}`), {
                TaskName: curr
              });
              return (
                <>
                    <ListItems
                      indexNumber = {index}
                      id = {index}
                      Name = {curr}
                      onSelect = {DeleteListItem}
                      number = {number}
                    />
                </>
              );
            })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;

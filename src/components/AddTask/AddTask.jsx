import React from "react";
import './AddTask.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AddTask = ({inputValue, inputValues, arrayOfTasks, handleInputChange, handleTestButtonClick, addTaskToArray}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="addTaskContainer">
        <div className="addTaskWrapper">
          <form className="testform">
            <div className="formInput">
              <label htmlFor="task">Task</label>
              <input
                type="text"
                id="task"
                placeholder=".add task here"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="datePart">
              <div className="date">
                <span></span>
                <span>/</span>
                <span></span>
                <span>/</span>
                <span></span>
              </div>
            </div>
            <div className="btn">
              <button
                className="Button"
                onClick={() => {
                  addTaskToArray();
                  navigate('/');
                }}
              >
                Add
              </button>
            </div>
            <h1>{inputValue}</h1>
            <h1>{inputValues}</h1>
            {
              arrayOfTasks.map(item => {
                return <ul>
                  <li>{ item}</li>
                </ul>
              })
            }
          </form>
        </div>
      </div>
    </>
  )
}

export default AddTask;
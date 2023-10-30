import React, { useState,useEffect } from "react";
import "./Task.css";
import { FaPencil } from 'react-icons/fa6';
import { FaRegTrashCan } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";
import EditTask from "../EditTask/EditTask";

const Task = ({ deletedTasks, arrayOfTasks, deleteItem, passEditValue ,addDeletedTasks,addCompletedTasks,setCompletedTasks,setDeletedTasks}) => {
  const navigate = useNavigate();
  const [showEditTask, setShowEditTask] = useState(false);
  const [editItem, setEditItem] = useState('');
  const [updateValue, setUpdateValue] = useState(editItem);
  const [indexUpdateValue, setIndexUpdateValue] = useState(0);
  const [test, settest] = useState(0);
  const [date, setDate] = useState(new Date());
  const [isCheckedTask, setIsCheckedTask] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();


  function navToAddTask() {
    navigate('/addtask');
  }

  function showEditTasks() {
    setShowEditTask(true);
    }
    
  function passkey(index) {
      setEditItem(
               arrayOfTasks.find((value,indez) => {
                   return indez === index;
      })
    )
    
    setIndexUpdateValue(index)
    }

  
 function replacePreviousTask() {
      const removedValue = arrayOfTasks.splice(indexUpdateValue, 1, updateValue);
      console.log(removedValue,indexUpdateValue);
  }  

   useEffect(() => {
    setEditItem(passEditValue);
  }, [passEditValue]);

  return (
    <>
      <div className="TaskContainer">
        <div className="taskWrapper">
          <div className="task">
            {arrayOfTasks.map((item, key) => {
              return (
                <div className="taskContents">
                  <div className="taskTitle">
                    <h3>{item}</h3>
                  </div>
                  <div className="taskDate">
                    <h3>
                      <span>{ day}</span>
                      <span>/</span>
                      <span>{ month}</span>
                      <span>/</span>
                      <span>{ year}</span>
                    </h3>
                  </div>
                  <div className="taskIcons">
                      <div onClick={()=>{addCompletedTasks(key)}} className="box"></div>
                    <FaPencil
                      className="pen"
                      onClick={() => {
                          showEditTasks();
                          passkey(key);
                      }}
                    />
                    <FaRegTrashCan
                      onClick={() => {
                        addDeletedTasks(key)
                        deleteItem(key);
                      }}
                      className="delete"
                    />
                  </div>
                </div>
              );
            })
            }
                      {showEditTask && <EditTask  editItem={editItem} arrayOfTasks={arrayOfTasks} setShowEditTask={ setShowEditTask} replacePreviousTask={replacePreviousTask} setUpdateValue={setUpdateValue} />}
            {
              // deletedTasks.map((item) => {
              //   return (
              //     <>
              //       <div>{ item }
              //       </div>
                  
              //     </>
              //   )
              // })
           }
           
            <button onClick={navToAddTask}>addtask</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
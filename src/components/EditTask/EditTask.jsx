import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './EditTask.css';

function EditTask({ editItem, replacePreviousTask,  setShowEditTask, setUpdateValue }) {
  const navigate = useNavigate();
  const [editValue, setEditValue] = useState(editItem);

  useEffect(() => {
    setUpdateValue(editValue);
  }, [editValue, setUpdateValue]);

  function handleEditValue(e) {
    setEditValue(e.target.value);
  }

  return (
    <>
      <form className="formEditTask">
        <div className="formInput">
          <label htmlFor="task">Edit {editItem}</label>
          <input className='inputEditTask' type="text" id="task" value={editValue} onChange={handleEditValue} />
        </div>
        <div className="btn">
          <button
            className="Button"
            type="button"
            onClick={() => {
              // setUpdateValue(editValue);
              // setindex(editValue);
              replacePreviousTask();
              setShowEditTask(false);
            }}
          >
            save changes
          </button>
        </div>
      </form>
    </>
  );
}

export default EditTask;
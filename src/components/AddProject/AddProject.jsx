import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './AddProject.css'; 
import { useNavigate } from 'react-router-dom';

const AddProject = ({handleSubmit,setProjectDescription,setProjectDuration,setProjectName,handleStartDateChange,startDate,handlePriorityChange,projectName,projectDescription,projectDuration,projectPriority}) => {
    const navigate = useNavigate();


  return (
      <form className="project-form" >
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            className='input-project'       
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            
          />
        </div>

        <div>
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            className='textarea'
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            
          />
        </div>

        <div>
          <label htmlFor="projectPriority">Project Priority:</label>
          <select
            id="projectPriority"
            value={projectPriority}
            onChange={handlePriorityChange}
            
          >
            <option value="">Select Priority</option>
            <option value="top level">Top Level</option>
            <option value="mid level">Mid Level</option>
            <option value="low level">Low Level</option>
          </select>
          {projectPriority && (
            <div className="stars">
              {projectPriority === 'top level' && (
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </>
              )}
              {projectPriority === 'mid level' && (
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </>
              )}
              {projectPriority === 'low level' && <FaStar />}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="projectDuration">Project Duration:</label>
          <input
            type="text"
            id="projectDuration"
            value={projectDuration}
            onChange={(e) => setProjectDuration(e.target.value)}
            
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="number"
            id="startDate-day"
            name="day"
            placeholder="Day"
            value={startDate.day}
            onChange={handleStartDateChange}
            
          />
          <input
            type="number"
            id="startDate-month"
            name="month"
            placeholder="Month"
            value={startDate.month}
            onChange={handleStartDateChange}
            
          />
          <input
            type="number"
            id="startDate-year"
            name="year"
            placeholder="Year"
            value={startDate.year}
            onChange={handleStartDateChange}
            
          />
        </div>

          <button type="button" onClick={() => {
              handleSubmit();
              navigate('/projects')
          }}>Add</button>
          
      </form>
      
  );
};

export default AddProject;
import React, { useState } from "react";
import "./Projects.css";
import { FaPencil, FaRegTrashCan } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { useNavigate} from "react-router-dom";



const Projects = ({arrayOfProjectObjects,deleteProject}) => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const navAddProject = () => {
        navigate('/addproject');
    }

    return (
    <>
    <div className="projectsContainer">
                    {
                        arrayOfProjectObjects.map((item,key) => {
                            return (
                                <>
              <div className="projectWrapper">
                  <div className="projectContent">
                        <div className="projectName">
                            <p>Project Name</p>
                                            <h3>{ item.name}</h3>
                        </div>
                        <div className="projectDescription">
                            <p>Project Description</p>
                                            <h5>{ item.description}</h5>
                        </div>
                      <div className="projectPriority">
                            <p>Project Priority</p>
                             <div className="priority">
                              {item.priority === 'top level' ? (
                                        <span>
                                          <FaStar className="ratxs" />
                                          <FaStar className="ratxs"/>
                                          <FaStar className="ratxs" />
                                          <FaStar className="ratxs"/>
                                          <FaStar className="ratxs"/>
                                        </span>
                             ) : item.priority === 'mid level' ? (
                             <span>
                                     <FaStar className="ratxs"/>
                                     <FaStar className="ratxs"/>
                                     <FaStar className="ratxs"/>
                             </span>
                              ) : item.priority === 'low level' ? (
                             <span>
                                <FaStar className="ratxs"/>
                                      </span>
                                     ) : null}
                                            <span>
                                              <h3>{item.priority}</h3>
                                            </span>
                              </div>
                        </div>
                        <div className="projectDuration">
                            <p>Duration</p>
                            <div className="timeSpan">
                                                <h3>{ item.duration}</h3> 
                                <p>starting:</p>
                            <div className="taskStartDate">
                                                    <span>{ item.startDate.day}</span>
                                   <span>/</span>
                                                    <span>{ item.startDate.month}</span>
                                   <span>/</span>
                                                    <span>{ item.startDate.year}</span>
                            </div>                                
                      </div>
                        </div>
                        <div className="projectStatus">
                            
                            <p>Status</p>
                            <div className="state">
                                <h4>Ongoing</h4>
                            <div className="projectIcons">
                              {/* <FaPencil onClick={() => {
                                                            
                                    }} className="pen" /> */}
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={(e) => {
                                        setIsChecked(e.target.checked)
                                                            }}
                                    className="pCheckBox"  /> 
                                                          
                                <FaRegTrashCan onClick={() => {
                                      deleteProject(key);
                                }} className="delete"/>
                            </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    
                                </>
                            )
                        })
                     }
                
                <button onClick={navAddProject}>addproject</button>
        </div>
        </>
    )
}

export default Projects;
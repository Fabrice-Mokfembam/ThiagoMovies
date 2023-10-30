import React, { useEffect } from "react";
import "./Status.css"
import { useNavigate } from 'react-router-dom';


const Status = ({deletedTasks,completedTasks,arrayOfTasks}) => {
  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
  }
  
  let totalTasks = deletedTasks.length + completedTasks.length + arrayOfTasks.length;

  const calPercentage = () => {
    const diviPart = completedTasks.length / totalTasks;
      
    return (diviPart * 100).toPrecision(2);
  }

    return(
          <div className="statusContainer">
            <div className="statusWrapper">
                <div className="statusTaskWrapper">
                   <div className="details">
                       <h1 className="status-kind">
                           Tasks
                       </h1>
                        <div className="num-details">
                          <div className="numberOfTasks">
                               {totalTasks}
                         </div>
                          <div className="percentage-success">
                              {calPercentage()} %
                          <span> sucesss</span>
                         </div>
                
                        </div>
                    
                    </div>
            <div className="taskStatus-container">
              <h3>Completed</h3>
              {
                completedTasks.map((item) => {
                  return (
                    <>
                      <div className="eachtask">
                            <div className="task-name">
                                  {item}
                             </div>
                              <div className="status"> 
                                  completed
                             </div>
                         </div>
                    </>
                  )
                })
                 }

                     </div>
            <div className="taskStatus-container">
              <h3>Ongoing</h3>
              {
                arrayOfTasks.map((item) => {
                  return (
                    <>
                         <div className="eachtask">
                            <div className="task-name">
                                  {item}
                             </div>
                              <div className="status"> 
                                  ongoing
                             </div>
                         </div>                    
                    </>
                  )
                })
                    }

                     </div>
            <div className="taskStatus-container">
              <h3>Deleted</h3>
       {
               Array.isArray(deletedTasks) &&
                           deletedTasks.map((item) => {
                                  return (
                                      <div className="eachtask">
                                         <div className="task-name">{item}</div>
                                         <div className="status">Deleted</div>
                                       </div>
                                            );
                                         })
                                 }

                     </div>
                </div>
                {/* <div className="statusTaskWrapper">
                   <div className="details">
                       <h1 className="status-kind">
                           Projects
                       </h1>
                        <div className="num-details">
                          <div className="numberOfTasks">
                               12
                         </div>
                          <div className="percentage-success">
                              80% 
                          <span> sucesss</span>
                         </div>
                
                        </div>
                    
                    </div>
            <div className="taskStatus-container">
              <h3>Completed</h3>
                         <div className="eachtask">
                            <div className="task-name">
                                  wash plates
                             </div>
                              <div className="status"> 
                                  completed
                             </div>
                         </div>

                     </div>
            <div className="taskStatus-container">
              <h3>Ongoing</h3>
                         <div className="eachtask">
                            <div className="task-name">
                                  wash plates
                             </div>
                              <div className="status"> 
                                  ongoing
                             </div>
                         </div>

                     </div>
            <div className="taskStatus-container">
              <h3>Deleted</h3>
                         <div className="eachtask">
                            <div className="task-name">
                                  wash plates
                             </div>
                              <div className="status"> 
                                  Deleted
                             </div>
                         </div>

                     </div>
                </div> */}


              </div>

          </div>
    )
}

export default Status;
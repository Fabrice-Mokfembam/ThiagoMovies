import React from "react";
import "./Settings.css"

const Settings = () => {
    return <div className="contact">
        <form >
            <label htmlFor="name" className="projectName">name</label>
            <input
                type="text"
                value={'text'}
               // onChange={ }
                placeholder=""
            
            />

            <label htmlFor="priority">project Priority</label>
            <select
                id="priority"
                value={'level'}
                //onChange={}
                required
            >
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
  
            </select>
        </form>
    </div>
}

export default Settings;
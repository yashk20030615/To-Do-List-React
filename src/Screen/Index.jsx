import React, { useState } from "react";
import Button from "../Components/Index";
import "./Index.css";

export const Index = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const addTask = () => {
        if (task.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        setTaskList([...taskList, task]);
        setTask("");
    };

    const deleteTask = (index) => {
        setTaskList(taskList.filter((_, i) => i !== index));
    };

    return (
        <>
            <h1 className="head">To-Do List</h1>
            <div className="top">
                <textarea className="tinput" value={task} onChange={handleChange} maxLength="60" placeholder="Enter a task..."></textarea>
                <Button className="btn" title="Add Task" change={addTask} />
                {taskList.length > 0 && (
                    <div className="tlist">
                        {taskList.map((task, index) => (
                            <div key={index} className="titem">
                                <span>{task}</span>
                                <div className="tbtn">
                                    <Button className="edtbtn" title="Edit" />
                                    <Button className="dltbtn" change={() => deleteTask(index)} title="Delete" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

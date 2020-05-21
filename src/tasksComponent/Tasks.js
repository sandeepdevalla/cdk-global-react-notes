import React,{ useState, useEffect } from 'react';

import TaskItem from '../commonComponents/taskItemComponent/TaskItem'
import Filter from '../commonComponents/filterComponent/Filter'

import './Tasks.css';

export default function Tasks() {
    const [param, setParam] = useState(5);
    const [loading, setLoading] = useState(false);
    const [tasksData, setTasksData] = useState([]);
    useEffect(()=> {
            setLoading(true)
            fetch(`https://baconipsum.com/api/?type=all-meat&paras=${param}&start-with-lorem=1`)
              .then(response => response.json())
              .then(data => {
                  console.log('inside data', data)
                  setTasksData(data.map((task,index) => {
                    return {
                        name: "Task " + index,
                        content: task
                    }
                }));
                  setLoading(false)
              })
              // Catch any errors we hit and update the app
              .catch(error => {
                console.log('inside data', error)

                  setLoading(false)
              });
    }, [param]);
    const applyFilterParam = (value) => {
        setTasksData([]);
        setParam(value);
    }
    return (
        <div>
            <Filter param = {param} applyFilterParam={applyFilterParam}></Filter>
            {loading ? 'Loading dataaa' : ''}
            <TaskList tasksData={tasksData}></TaskList>
        </div>

    )
}
function TaskList(props) {
    if (props.tasksData.length) {
        return (
            <>
            <div className="tasks-layout">
                {props.tasksData.map((task, index) => {
                    task['index'] = index;
                    return <TaskItem data={task} key={task.index}></TaskItem>
                })}
            </div>
            </>
        )
    } else return ''
}
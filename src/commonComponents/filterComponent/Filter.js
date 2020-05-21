import React from 'react';
import './Filter.css';

export default function Filter(props) {
    let param = props.param
    const getParamValue = (event) => {
        param = event.target.value;
    }
    const getFilterTasks = () => {
        props.applyFilterParam(param);
    }
    return (
        <div className="filter-panel">
            <p> Change the param for new tasks list </p>
            <input type="number" onChange={getParamValue} placeholder="Enter the param"></input>
            <button onClick={getFilterTasks}>Search</button>
        </div>
    )
}
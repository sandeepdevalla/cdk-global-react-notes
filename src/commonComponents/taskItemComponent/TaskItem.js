import React from 'react';

import './TaskItem.css';

export default function TaskItem(props) {
    return (
        <div className="task-panel">
            <div className="task-title">
                {props.data.name}
            </div>
            <div className="task-content">
                <p>{props.data.content} </p>
            </div>
        </div>
    )
}
import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({done, important, label, onDeleted, onToggleImportant, onToggleDone}) => {
    let className = 'd-flex justify-content-between todo-list-item';
    if (done) {
        className += ' done';
    }
    if (important) {
        className += ' important';
    }

    return (
        <div className={className}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}
                >
                    {label}
                </span>
            <div>
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation"/>
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o"/>
                </button>
            </div>
        </div>
    )
};

export default TodoListItem;
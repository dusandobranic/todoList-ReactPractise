import React, { useEffect } from 'react';
import './SingleTodo.scss';

const SingleTodo = (props) => {

    const {todo, checkTodo, deleteTodo} = props
    useEffect(() => {
    }, [])
    
    return (
        <div className='container'>
            <div className='single_todo_container'>
                <div className='flex'>
                    <input type='checkbox' className='todo_checkbox' onChange={() => checkTodo(todo.id)} />
                    <h2 className={todo.isCompleted ? 'completed' : ''} >{todo.title}</h2>
                </div>
                <div className='batch_container flex'>
                        <button className='todo_update_button' onClick={() => this.props.updateTodo()}>Update</button>
                        <button className='todo_delete_button' onClick={() => deleteTodo(todo.id)}>X</button>
                    </div>
            </div>
        </div>
    );

}

export default SingleTodo;
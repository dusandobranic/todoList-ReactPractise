import React, { useEffect, useState } from "react";
import todos from '../../services/todoServices';
import Todoes from "../todoes/Todoes";

const MainComponent = () => {
    const [todoes, setTodoes] = useState([]);

    const getTodoes = () => {
        setTodoes([...todos]);
    }

    useEffect(() => {
        getTodoes();
    }, [])


    const deleteTodo = (id) => {
        const filteredTodos = todoes.filter((todo) => todo.id !== id);

        setTodoes(filteredTodos)
    }

    const checkTodo = (id) => {
        const newTodos = todoes.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        })

        setTodoes(newTodos);
    }

    return (
        <div className="main_container">
            <Todoes todoes={todoes} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default MainComponent;
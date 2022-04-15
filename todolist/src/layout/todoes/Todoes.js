import { useEffect } from "react";
import SingleTodo from "../singleTodo/SingleTodo";

const Todoes = (props) => {

    useEffect(() => {
        
    }, [])

    const todoesExpresion = props.todoes.map((todo) => <div className="todoes_single" key={todo.id}>
        <SingleTodo
            todo={todo}
            checkTodo={props.checkTodo}
            deleteTodo={props.deleteTodo}
        />
    </div>);

    return (
        <div className="todoes_wrapper">
            {todoesExpresion}
        </div>
    );

}

export default Todoes;
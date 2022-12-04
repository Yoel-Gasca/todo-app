import React, { useState } from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";

// --Funcion anonima--
/* Es una funcion declarada como resultado de una constante*/
const Container = () => {
    const [list, setList] = useState([]);

    const addItem = addItem => {
        setList([...list, addItem])    
    };

    return(
        <div>
            <FormTodo addItem={addItem}/>
            <TaskList list={list} setList={setList}/>
        </div>
    );
}

// Exportar el componente a App.js
export default Container;


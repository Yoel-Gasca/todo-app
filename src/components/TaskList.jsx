import React from "react";
import Checkbox from "./Checkbox"

const TaskList = props => {
    const {list, setList} = props;

    //Se encarga de acualizar la lista
    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList)
    };

    // Remueve los elementos de texto en la casilla del formulario al momento de enviarlos
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList)
    }

    const checkbox = list.map(item => (
        <Checkbox key={item.id} data={item} onChange = {onChangeStatus}/>
    ));

    return(
        <div className="todo-list">
            {list.length ? checkbox : "No task"}
            {list.length ?(
                <p>
                    <button className="button pink" onClick={onClickRemoveItem}>Delete</button>
                </p>
            ) : null}
        </div>
    )
}

export default TaskList;


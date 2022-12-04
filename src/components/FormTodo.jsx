import React, { useState } from "react";

const FormTodo = props => {
    const [description, setDescription] = useState("");
    const {addItem} = props;//se asoccian metodos

    // --Manejar Submit--
    const handleSubmit = e => {
        e.preventDefault();
        console.log(description);

        // Añadir el submit
        addItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });

        setDescription("");
    }


    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="input">
                    <input type="text" className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button className="button pink"
                        disabled={description ? "": "disabled"} // Operador Ternario -> ?
                            /* 
                            Es lo mismo que una concional normal
                            if (Description == "") {
                                return disabled = "dissabled";
                            } else {
                                return disabled = "";
                            }
                            */
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormTodo;


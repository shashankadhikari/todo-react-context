import React ,{useState, useContext} from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import {v4} from "uuid";
import {TodoContext} from "../context/TodoContext";
import {ADD_TODO} from "../context/action.types";

const TodoForm = () => {
    const [title,setTitle] = useState("");
    const {dispatch} = useContext(TodoContext);

    // here we are firing dispatch
    const handleSubmit = e => {
        e.preventDefault();
        if (title === ""){
            return alert("Please enter a todo")
        }

        const todo = {
            title,
            id : v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTitle("");

    };

   

 return(
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Your next Todo"
                //any value that is change in form is gonna set automatically in the state
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button
                    color="warning"
                    //TODO: onClick
                    >Add</Button>
                </InputGroupAddon>
            </InputGroup>
        </FormGroup>
    </Form>
 )
}

export default TodoForm;
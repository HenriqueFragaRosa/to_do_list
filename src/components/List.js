import React, { Component } from "react";
import './List.css';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            todoItems: [],
        };
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleSaveItem = () => {
        const { inputValue, todoItems } = this.state;
            if (inputValue.trim() !== "" && !todoItems.includes(inputValue)) {
                this.setState({
                    inputValue: "",
                    todoItems: [...todoItems, inputValue],
                });
            } 
            else if (inputValue.trim() === "") {
                alert("The value can't be void!")
            }
            else  {
                alert("You have already added this item to the list!");
                this.setState({
                    inputValue: "",
                });
            }
        };

    cleanInput = () => {
        const { todoItems } = this.state;
        if (todoItems.length > 0) {
            this.setState({
                todoItems: [],
            });
        }
    };

    render() {
        const { inputValue, todoItems } = this.state;

        return (
            <div>
                <h1>To Do List App</h1>
                <h2>Use this app to create an ordered list!</h2>
                <form id="todoForm">
                    <input
                        id="todoInput"
                        size="30"
                        value={inputValue}
                        onChange={this.handleInputChange}
                        className="input"
                    />
                    <button
                        type="button"
                        className="button"
                        onClick={this.handleSaveItem}
                    >
                        Save Item
                    </button>
                </form>
                <button
                    type="button"
                    className="clear_button"
                    onClick={this.cleanInput}
                >
                    Clear List
                </button>
                <ol id="todoList">
                    {todoItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

import { Component } from "react";
import check from "./icon.jpg";

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert("Please add an item")
        } else {        
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ''}) //userInput: '' cleans up input field
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList; //poluchit' dostup k array
        listArray = []; //opustoshit' array or it could be: listArray.length = 0;
        this.setState({groceryList: listArray});
    }

    crossedWord(event) {
        const li = event.target; //kak tolko chtoto proishodit s li, stavim podslushky
        li.classList.toggle('crossed'); //adds or removes class (toggle)
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                    placeholder="What do you want to buy?"
                    // onChange={this.onChangeEvent}
                    onChange={(e) => this.onChangeEvent(e.target.value)}
                    value={this.state.userInput} />
                {/* get access to what user entered */}
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>

            <ul>
                {this.state.groceryList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                    <img src={check} width="40px" alt="checkmark"/>
                    {item}</li>
                ))} 
            </ul>

            <div className="container">
            <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
            </div>

            </form>
        )
    }
}
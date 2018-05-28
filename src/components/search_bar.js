//Reacth may not be explicitly called but is needed when the JSX is turned into JS. 
//{Component} => Fancy ES 6 script that allows us to pull off property compomemt as a variable called component.
import React, {Component} from 'react';

//

class searchBar extends Component {
    //initialize state in class base components. 
    //All JS classes have a function called constructor. This is the first / only function called automatically when the first instance of the class is created.
    constructor (props) {
        super(props);
        //this.state = is only ever used inside of the constructor this.setState is used outside of constructor to manipulate state.
        this.state = {term:''};
    }
    
    //render method
    render (){
        return (
        <div className ="search-bar">
        <input 
            value = {this.state.term}
            onChange={event => this.onInputChange(event.target.value)} 
            />
   
        </div>
    )
    }

    



    //This code was added to the render return statement using a cool es6 arrow function
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default searchBar;
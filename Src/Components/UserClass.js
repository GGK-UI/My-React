import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state({
            count:json,
        })
    }
    //Used for passing props
    // State Management for Api call

    async componentDidMount() {
        const response = await fetch("");
        const json =  await response.json();
    }
    //Used to do API call here

    render() {
        const {myname, mylocation} = this.props
        //Destructure of props
        this.state ={
            count:0 
        }
        //Creating State
        return (
            <div>
                <h1>I Am A Class Based Component</h1>
                <h2>Name :- {myname}</h2>
                <h3>Location :- {mylocation} </h3>
                <h4>Count = {this.state.count} </h4>
                <button onClick={() => {
                    this.setState({
                        count:this.count + 1
                    })
                }}>Count Increment</button>
                <span>This is the bread and butter of most modern web apps built in ReactJS. 
                   These components are simple classes 
                   (made up of multiple functions that add functionality to the application).</span>
            </div>
        )
        //Return some JSX 
    }
    //Rendering component
}
//Component extends 

export default UserClass;
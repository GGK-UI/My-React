const User = (props) => {
   
    return (
        <div>
            <h1>I am A Functional Component</h1>
            <h2>Name :- {props.name}</h2>
            <span>Functional components are some of the more common components that will come across while working in React.
               These are simply JavaScript functions. 
               We can create a functional component to React by writing a JavaScript function.</span>
        </div>
    )
}

export default User; 
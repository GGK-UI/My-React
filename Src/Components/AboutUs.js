import UserClass from "./userClass";
import User from "./User";

const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>My Name Is Ghulam Ghouse Khan</h2>
            <h3>I am Front End Developer</h3>
            <User name={"Ghulam Ghouse Khan"} location={"Hyderabad"}/>
            {/* <UserClass myname={"GGK"} mylocation={"Telangana"}/> */}
        </div>
        
    );
};
export default AboutUs;
import  React, {useState}  from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import AppNav from "../components/AppNav/AppNav";
import navItems from '../data/navItems.json';
import login,{handleLoginAPI} from '../api/UsersAPI';
import UserContext from '../contexts/UserContext';
const LoginPage = ({
    handleLogin,
    userState
}) =>{
const[navItem] = useState(navItems)
const history = useHistory();
const handleSubmit = (e)=>{
    e.preventDefault();
    let email = (e.target.elements.email.value);
    let pass = (e.target.elements.password.value);
    if(email === "" || pass === ""){ alert("Please enter a valid usename and password"); return false;}
    let userObject = {email: email, password:pass};
    handleLoginAPI(userObject).then(data=>{
        alert(data.status);
            if(data.status === 200){
                handleLogin(data);
                history.push("/")
            }else{
                alert("You have entered a invalid username and password");
            }
    });
}
    return(
        <>
     <UserContext.Provider value={{ user:userState.user }}>
        <AppNav />
    </UserContext.Provider>
        <div className="form">
            <Form  onSubmit={(e)=>{handleSubmit(e)}}>
                <FormGroup>
                <Label>Email : </Label>
                    <Input type="text" name="email" placeholder="Please enter your email"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password: </Label>
                    <Input type="password" name="password" placeholder="Please enter your password"/>
                </FormGroup>
                <FormGroup>
                    <Button>Login</Button>
                </FormGroup>
            </Form>
        </div>
        </>
    )
}
export default LoginPage;
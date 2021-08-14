import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { addArticle } from "../api/ArticlesAPI";
import AppNav from "../components/AppNav/AppNav";
import navItems from "../data/navItems.json";
import UserContext from '../contexts/UserContext';

const AddArticlePage = ({userState})=>{
const[navItem] = useState(navItems);
const history = useHistory();
const userContext = React.useContext(UserContext);

const handleFormSubmit = (e)=>{
    e.preventDefault();
    const authToken = userState.user.id;
    let formTitle = e.target.elements.title.value;
    let formByLine = e.target.elements.byline.value;
    let formAbstract = e.target.elements.abstract.value;
    let articleObject = {title:formTitle,byline:formByLine,abstract:formAbstract};
    addArticle(articleObject,authToken);
    return history.push("/");
}
    return (
       <> <UserContext.Provider value={{ user:userState.user }}>
        <AppNav userState={userState}/>
    </UserContext.Provider>
            <UserContext.Consumer>
        {userContext => (
            <>
        <div className="form">
            <Form onSubmit={(e)=>{handleFormSubmit(e)}}>
                <FormGroup>
                    <Label>Title: </Label>
                    <Input type="text" name="title" placeholder="Please enter title"/>
                </FormGroup>
                <FormGroup>
                    <Label>
                    ByLine:
                    </Label>
                    <Input type="text" name="byline" placeholder="Please enter byline"/>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Abstract:
                    </Label>
                    <Input type="textarea" name="abstract" placeholder="Please enter abstract "/>

                </FormGroup>
                <Button>Add New Article</Button>
            </Form>
            </div>
        </>
        )}
    </UserContext.Consumer> 
    </>
    )
}
export default AddArticlePage;
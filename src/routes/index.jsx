import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import Homepage from '../components/homepage';
import Courses from '../components/courses';
import messageCoffe from "../components/messageCoffe";
const Routes=() =>(
    <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/profile" component={Courses}/>
        <Route exact path="/nocoffee" component={messageCoffe}/>
        {/* <PrivateRoute exact path="/profile" component={Courses} isAuthenticated={isAuthenticated} /> */}
        <Redirect to='/'/>
    </Switch>
);
export default Routes;

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import First from '../first/First';
import Thinking from '../thinking/Thinking';
import User from '../user/User';

const Main = () => (
    <div className="main">
        <Switch>
            <Route exact path='/' component = {First} />
            <Route path='/thinking' component = {Thinking}/>
            <Route path='/user' component = {User}/>
        </Switch>
    </div>
)

export default Main
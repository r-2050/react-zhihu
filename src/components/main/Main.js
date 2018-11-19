import React from 'react';
import {Switch, Route} from 'react-router-dom';
import First from '../first/First';
import Thinking from '../thinking/Thinking';
import University from '../university/University';
import Information from '../information/Information';
import User from '../user/User';
import './main.css';

const Main = () => (
    <div className="main">
        <Switch>
            <Route exact path='/' component = {First} />
            <Route path='/thinking' component = {Thinking}/>
            <Route path='/university' component = {University}/>
            <Route path='/information' component = {Information}/>
            <Route path='/user' component = {User}/>
        </Switch>
    </div>
)

export default Main
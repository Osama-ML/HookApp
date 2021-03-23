import React from 'react'
import { AboutScreen } from './AboutScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


export const AppRouter = () => {
    return (
        <Router>
            <div>


                <Switch>
                    <Route path="/about" component={AboutScreen}/>
                </Switch>


            </div>
        </Router>
    )
}

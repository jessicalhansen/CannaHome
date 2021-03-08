import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlantsPage from '../pages/plants/PlantsPage';

class Routes extends React.Component {
    render() {
        return (
            <>
            <Switch>
                <Route exact path ="/" component={HomePage} />
                <Route path ="/plants" component={PlantsPage} />
            </Switch>
            </>
        );
    }
}



export default Routes;

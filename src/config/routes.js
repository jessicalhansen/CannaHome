import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlantsPage from '../pages/plants/PlantsPage';
import NewPlantPage from '../pages/plants/NewPlantPage';

class Routes extends React.Component {
    render() {
        return (
            <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/plants" component={PlantsPage} />
                <Route path="/new-plant" component={NewPlantPage} />
            </Switch>
            </>
        );
    }
}



export default Routes;

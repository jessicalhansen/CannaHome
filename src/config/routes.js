import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlantsPage from '../pages/plants/PlantsPage';
import NewPlantPage from '../pages/plants/NewPlantPage';
import EditPlantPage from '../pages/plants/EditPlantPage';
import NewWateringPage from '../pages/waterings/NewWateringPage';
import EditWateringPage from '../pages/waterings/EditWateringPage';

class Routes extends React.Component {
    render() {
        return (
            <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/plants" component={PlantsPage} />
                <Route path="/new-plant" component={NewPlantPage} />
                <Route path="/plants/:id" component={PlantsPage} />
                <Route path="/edit-plant/:id" component={EditPlantPage} />
                <Route path="/new-watering" component={NewWateringPage} />
                <Route path="/edit-watering/:id" component={EditWateringPage} />
            </Switch>
            </>
        );
    }
}



export default Routes;

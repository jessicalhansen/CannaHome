import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlantsPage from '../pages/plants/PlantsPage';
import NewPlantPage from '../pages/plants/NewPlantPage';
// import PlantDetailPage from '../pages/plants/PlantDetailPage';

class Routes extends React.Component {
    render() {
        return (
            <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/plants" component={PlantsPage} />
                <Route path="/new-plant" component={NewPlantPage} />
                <Route path="/plants/:id" component={PlantsPage} />
            </Switch>
            </>
        );
    }
}



export default Routes;

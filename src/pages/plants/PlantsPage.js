import React from 'react';
import PlantsList from '../../components/plants/PlantsList';

class PlantsPage extends React.Component {
    state = {
        plants: [],
    };

    componentDidMount() {
        fetch('http://localhost:4000/api/v1/plants')
        .then((response) => response.json())
        .then((jsonData) => {
            console.log(jsonData);
            this.setState({
                ...this.state,
                plants: jsonData,
            });
        })
        .catch((err) => console.log(err))
    }


    render() {
        return (
            <div className="main-plant-area">
                <h1>Plants Page</h1>
                <div className="plantlist-area bg-lime-50 rounded">
                    <h2 className="text-3xl text-center m-2 underline">My Plants:</h2>
                    <div className="plant-list flex flex-row flex-wrap rounded bg-lime-50">
                    <PlantsList 
                    plants={this.state.plants} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PlantsPage;

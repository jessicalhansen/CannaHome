import React from 'react';
import PlantsList from '../../components/plants/PlantsList';
import PlantDetailPage from '../plants/PlantDetailPage';

class PlantsPage extends React.Component {
    state = {
        plants: [],
        plant: {
            id: '',
            plantName: '',
            plantType: '',
            plantStrain: '',
            propagationType: '',
            growStage: '',
            lightCycle: '',
            plantingDate: '',
            notes: '',
        },
        waterings: [],
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

    showPlantHandler = (data) => {
        fetch(`http://localhost:4000/api/v1/plants/${data.id}`)
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                this.setState({
                    plant: data,
                    waterings: jsonData,
                });
            })
            .catch((err) => {
                console.log('Plant Handler Error');
                console.log(err);
            });
    };

    handleDeletePlant = (plantId) => {
        console.log(plantId);
        let confirmed = window.confirm(
            'Are you sure you want to delete this plant?'
        );
        if (confirmed) {
            fetch(`http://localhost:4000/api/v1/plants/${plantId}`, {
                method: 'DELETE'
            })
                .then((response) => {
                    return response.json();
                })
                .then(() => {
                    const stateCopy = {...this.state};
                    const updatedState = stateCopy.plants.filter((plantObj) => {
                        return plantObj._id !== plantId
                    });
                    this.setState({
                        ...this.state,
                        games: updatedState
                    });
                })
                .catch((err) => console.log(err));
        }
    }

    render() {
        return (
            <div className="main-plant-area">
                <h1>Plants Page</h1>
                <div className="mainplant-flexarea flex flex-row justify-around">
                    <div className="plantlist-area bg-lime-50 rounded ml-2 mr-1">
                        <h2 className="text-3xl text-center m-2 underline">
                        My Plants:
                        </h2>
                        <div className="plant-list flex flex-row flex-wrap rounded justify-evenly bg-lime-50 p-3">
                        <PlantsList 
                            plants={this.state.plants} 
                            showPlantHandler={this.showPlantHandler}
                            deletePlant={this.handleDeletePlant}
                        />
                        </div>
                    </div>
                <div className="main-plantdetail-area bg-rose-400 ml-1 mr-2 rounded">
                    <h2 className="text-3xl text-center m-2 underline">
                        Plant Details
                    </h2>
                    <PlantDetailPage 
                        plant={this.state.plant}
                        deletePlant={this.handleDeletePlant}
                    />
                </div>
                </div> 
            </div>
        )
    }
}

export default PlantsPage;

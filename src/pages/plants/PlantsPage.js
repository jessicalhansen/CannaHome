import React from 'react';
import PlantsList from '../../components/plants/PlantsList';
import PlantDetailPage from '../plants/PlantDetailPage';
import WateringsList from '../../components/waterings/WateringsList';

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
            waterings: '',
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
                // console.log(jsonData);
                this.setState({
                    ...this.state,
                    plant: data,
                    waterings: jsonData.waterings,
                });
                console.log(jsonData.waterings)
                console.log('showplanthandler json data ^^^^^')
            })
            .catch((err) => {
                console.log('Plant Handler Error');
                console.log(err);
            });
    };

    handleDeletePlant = (plantId) => {
        // console.log(plantId);
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
                        plants: updatedState
                    });
                })
                .catch((err) => console.log(err));
        }
    };

    render() {
        return (
            <div className="main-plant-area py-5 px-1">
                <div className="mainplant-flexarea flex flex-row justify-around">
                    <div className="plantlist-area bg-white rounded ml-2 mr-1">
                        <h2 className="text-3xl text-center m-2 underline">
                        My Plants:
                        </h2>
                        <div className="plant-list flex flex-row flex-wrap rounded justify-evenly p-3">
                        <PlantsList 
                            plants={this.state.plants} 
                            showPlantHandler={this.showPlantHandler}
                            deletePlant={this.handleDeletePlant}
                        />
                        </div>
                    </div>
                <div className="main-plantdetail-area bg-white ml-1 mr-2 rounded">
                    <h2 className="text-3xl text-center m-2 underline">
                        Plant Details
                    </h2>
                    <PlantDetailPage 
                        plant={this.state.plant}
                        deletePlant={this.handleDeletePlant}
                    />
                    <div className="waterings-area text-center my-2 flex flex-row flex-wrap">
                
                    <WateringsList 
                        waterings={this.state.waterings}
                    />
                    </div>
                </div>
                </div> 
            </div>
        )
    }
}

export default PlantsPage;

import React from 'react';
class NewPlantPage extends React.Component {
    state = {
        plantName: '',
        plantType: '',
        plantStrain: '',
        propagationType: '',
        growStage: '',
        lightCycle: '',
        plantingDate: '',
        notes: '',
    }

    newPlantHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });
    };

    handleSubmitPlant = (event) => {
        event.preventDefault();
        const plantObj = {
            plantName: this.state.plantName,
            plantType: this.state.plantType,
            plantStrain: this.state.plantStrain,
            propagationType: this.state.propagationType,
            growStage: this.state.growStage,
            lightCycle: this.state.lightCycle,
            plantingDate: this.state.plantingDate,
            notes: this.state.notes,
            waterings: this.state.watering,
        };
        fetch('http://localhost:4000/api/v1/plants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(plantObj),
        })
        .then((result) => {
            return result.json(); 
        })
        .then((jsonData) => {
            this.props.history.push('/plants');
        })
        .catch((err) => console.log(err));
    };

    render() {
        return (
            <div className="newplant-area text-center">
                <h2 className="text-2xl font-medium m-2">Add A New Plant:</h2>

                <div className="newplant-form-area">
                    <form onSubmit={this.handleSubmitPlant} className="newplant-form text-center rounded bg-white">
                        <div>
                            <label htmlFor="plantName">Plant Name:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="plantName" 
                            name="plantName" 
                            value={this.state.plantName}
                            onChange={this.newPlantHandler}
                            required />
                        </div>
                        <div>
                            <label htmlFor="plantType">Plant Type:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="plantType" 
                            name="plantType" 
                            value={this.state.plantType}
                            onChange={this.newPlantHandler} />
                        </div>
                        <div>
                            <label htmlFor="plantStrain">Plant Strain:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="plantStrain" 
                            name="plantStrain" 
                            value={this.state.plantStrain}
                            onChange={this.newPlantHandler} />
                        </div>
                        <div>
                            <label htmlFor="propagationType">Propagation Type:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="propagationType" 
                            name="propagationType" 
                            value={this.state.propagationType}
                            onChange={this.newPlantHandler} />
                        </div>
                        <div>
                            <label htmlFor="growStage">Grow Stage:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="growStage" 
                            name="growStage" 
                            value={this.state.growStage}
                            onChange={this.newPlantHandler} />
                        </div>
                        <div>
                            <label htmlFor="lightCycle">Light Cycle:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="lightCycle" 
                            name="lightCycle" 
                            value={this.state.lightCycle}
                            onChange={this.newPlantHandler} />
                        </div>
                        <div>
                            <label htmlFor="plantingDate">Date Planted:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="plantingDate" 
                            name="plantingDate" 
                            value={this.state.plantingDate}
                            onChange={this.newPlantHandler} />
                        </div>
                        <div>
                            <label htmlFor="notes">Notes:</label> <br />
                            <input 
                            className="pltfrm rounded mb-1 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="notes" 
                            name="notes" 
                            value={this.state.notes}
                            onChange={this.newPlantHandler} />
                        </div>
                        <button className="newplant-btn rounded bg-lime-200 hover:bg-primary hover:text-white">Add New Plant</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewPlantPage;

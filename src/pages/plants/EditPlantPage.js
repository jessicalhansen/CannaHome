import React from 'react';

class EditPlantPage extends React.Component {
    state = {
        plantName: '',
        plantType: '',
        plantStrain: '',
        propagationType: '',
        growStage: '',
        lightCycle: '',
        plantingDate: '',
        notes: '',
    };

    componentDidMount() {
        fetch(`http://localhost:4000/api/v1/plants/${this.props.match.params.id}`)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((jsonData) => {
            console.log(jsonData);
            this.setState(jsonData)
        })
        .catch((err) => console.log(err));
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleEditSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4000/api/v1/plants/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .then(() => this.props.history.push('/plants'))
        .catch((err) => console.log(err));
    };

    render() {
        return (
            <div className="newplant-area text-center">
                <h2 className="text-2xl font-medium m-2">Edit {this.state.plantName}</h2>

                <div className="newplant-form-area">
                    <form onSubmit={this.handleEditSubmit} className="newplant-form text-center rounded bg-white">
                        <div>
                            <label htmlFor="plantName">Plant Name:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="plantName" 
                            name="plantName" 
                            value={this.state.plantName}
                            onChange={this.handleChange}
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
                            onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="plantStrain">Plant Strain:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="plantStrain" 
                            name="plantStrain" 
                            value={this.state.plantStrain}
                            onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="propagationType">Propagation Type:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="propagationType" 
                            name="propagationType" 
                            value={this.state.propagationType}
                            onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="growStage">Grow Stage:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="growStage" 
                            name="growStage" 
                            value={this.state.growStage}
                            onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="lightCycle">Light Cycle:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="lightCycle" 
                            name="lightCycle" 
                            value={this.state.lightCycle}
                            onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="plantingDate">Date Planted:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="plantingDate" 
                            name="plantingDate" 
                            value={this.state.plantingDate}
                            onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="notes">Notes:</label> <br />
                            <input 
                            className="pltfrm rounded mb-1 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="notes" 
                            name="notes" 
                            value={this.state.notes}
                            onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="newplant-btn rounded bg-lime-200 hover:bg-primary hover:text-white">Update Plant</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default EditPlantPage;

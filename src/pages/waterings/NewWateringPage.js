import React from 'react';

class NewWateringPage extends React.Component {
    state = {
        waterDate: '',
        incNutrients: '',
        plantId: '',
    };

    handleNewWatering = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        });
    };

    handleSubmitWatering = (event) => {
        event.preventDefault();
        const wateringObj = {
            waterDate: this.state.waterDate,
            incNutrients: this.state.incNutrients,
            plantId: this.props.plantId,
        };
        fetch('http://localhost:4000/api/v1/waterings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wateringObj),
        })
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then((jsonData) => {
                console.log(jsonData);
                this.props.history.push('/waterings');
            });
                fetch(`http://localhost:4000/api/v1/plants`)
                    .then((res) => {
                        return res.json();
                    })
                    .then((jsonData) => {
                        this.setState({
                            ...this.state,
                            watering: jsonData,
                        })
                    })
            .catch((err) => {
                console.log(err)
            });
    }

    render() {
        return (
            <div className="newwater-area text-center">
                <h2 className="text-2xl font-medium m-2">Add A New Watering:</h2>

                <div className="newwater-form-area">
                    <form onSubmit={this.handleSubmitWatering} className="newwater-form text-center rounded bg-white">
                        <div>
                            <label htmlFor="waterDate">Water Date:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="waterDate" 
                            name="waterDate" 
                            value={this.state.waterDate}
                            onChange={this.handleNewWatering}
                            required />
                        </div>
                        <div>
                            <label htmlFor="incNutrients">Included Nutrients:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="incNutrients" 
                            name="incNutrients" 
                            value={this.state.incNutrients}
                            onChange={this.handleNewWatering} />
                        </div>
                        <button className="newplant-btn rounded bg-lime-200 hover:bg-primary hover:text-white">Add New Watering</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewWateringPage;

import React from 'react';

class EditWateringPage extends React.Component {
    state = {
        waterDate: '',
        incNutrients: '',
    };

    componentDidMount() {
        fetch(`http://localhost:4000/api/v1/waterings/${this.props.match.params.id}`)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((jsonData) => {
            console.log(jsonData);
            this.setState(jsonData)
        })
        .catch((err) => console.log(err));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props);
        console.log('handle submit watering props ^^^^^^^^^^')
        fetch(`http://localhost:4000/api/v1/waterings/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .then(() => this.props.history.push('/plants'))
        .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="newwater-area text-center">
                <h2 className="text-2xl font-medium m-2">Edit Watering:</h2>

                <div className="newwater-form-area">
                    <form onSubmit={this.handleSubmit} className="newwater-form text-center rounded bg-white">
                        <div>
                            <label htmlFor="waterDate">Water Date:</label> <br />
                            <input 
                            className="pltfrm rounded mb-2 bg-lime-100 focus:bg-lime-200 focus:outline-white"
                            type="text" 
                            id="waterDate" 
                            name="waterDate" 
                            value={this.state.waterDate}
                            onChange={this.handleChange}
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
                            onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="newplant-btn rounded bg-lime-200 hover:bg-primary hover:text-white">Update Watering</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default EditWateringPage;

import React from 'react';

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
            </div>
        )
    }
}

export default PlantsPage;

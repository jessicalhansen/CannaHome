import React from 'react';
import { Link } from 'react-router-dom';

const PlantCard = (props) => {
    const plantObj ={
        id: props.plant._id,
        plantName: props.plant.plantName,
        plantType: props.plant.plantType,
        plantStrain: props.plant.plantStrain,
        propagationType: props.plant.propagationType,
        growStage: props.plant.growStage,
        lightCycle: props.plant.lightCycle,
        plantingDate: props.plant.plantingDate,
        notes: props.plant.notes,
    };
    
    const displayPlant = () => {
        return props.showPlantHandler(plantObj);
    }


    const plantDate = new Date(props.plant.plantingDate);
    const plantingDate = plantDate.toDateString();
    return (
        <>
            <div className="plant-card bg-lime-100 text-center">
                <h2 className="text-xl font-bold">{props.plant.plantName}</h2>
                <p className="font-semibold">Grow stage: </p>
                <p>{props.plant.growStage}</p>
                <p className="font-semibold">Date planted: </p>
                <p className="text-sm">{plantingDate}</p>
                <Link to={`/plants/${props.plant._id}`}>
                <button 
                onClick={displayPlant}
                key={props.plant._id}
                className="viewplant-btn bg-green-50 hover:bg-lime-400 rounded font-semibold">View Details</button>
                </Link>
            </div>
        </>
    );
};

export default PlantCard;

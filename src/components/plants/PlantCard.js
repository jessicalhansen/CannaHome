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
        <Link to={`/plants/${props.plant._id}`}>
            <div
                onClick={displayPlant}
                key={props.plant._id}
                className="plant-card bg-lime-100 text-center">
                <h2 className="text-xl font-extrabold">{props.plant.plantName}</h2>
                <p className="font-bold">Grow stage: </p>
                <p>{props.plant.growStage}</p>
                <p className="font-bold">Date planted: </p>
                <p className="text-sm">{plantingDate}</p>
                
                <Link to={`/edit-plant/${props.plant._id}`}>
                    <button className="editplant-btn p-1 rounded border-2 border-amber-400 bg-amber-50 hover:bg-orange-100">
                    Edit
                    </button>
                </Link>
                    <button 
                    onClick={() => props.deletePlant(props.plant._id)}
                    className="deleteplant-btn p-1 m-1 rounded border-2 hover:bg-red-200 border-red-500 bg-red-50">
                        Delete
                    </button>
            </div>
        </Link>
        </>
    );
};

export default PlantCard;

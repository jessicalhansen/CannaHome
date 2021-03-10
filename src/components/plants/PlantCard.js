import { Link } from 'react-router-dom';

const PlantCard = (props) => {
    console.log(props.plants);
    console.log('plant card propssssss ^')
    const plantObj ={
        id: props.plants._id,
        plantName: props.plants.plantName,
        plantType: props.plants.plantType,
        plantStrain: props.plants.plantStrain,
        propagationType: props.plants.propagationType,
        growStage: props.plants.growStage,
        lightCycle: props.plants.lightCycle,
        plantingDate: props.plants.plantingDate,
        notes: props.plants.notes,
    };
    
    const displayPlant = () => {
        return props.showPlantHandler(plantObj);
    };

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
                <Link to={`/plants/${props.plant.id}`}>
                <button 
                onClick={displayPlant}
                key={props.plants.id}
                className="viewplant-btn bg-green-50 hover:bg-lime-400 rounded font-semibold">View Details</button>
                </Link>
            </div>
        </>
    );
};

export default PlantCard;

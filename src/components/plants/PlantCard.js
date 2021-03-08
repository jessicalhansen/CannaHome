const PlantCard = (props) => {
    console.log('Plant card props ', props);
    return (
        <>
            <div className="border-black plant-card">
                <h3>{props.plant.plantName}</h3>
                <p>Grow Stage: {props.plant.growStage}</p>
                <p>Date Planted: {props.plant.plantingDate}</p>
            </div>
        </>
    );
};

export default PlantCard;

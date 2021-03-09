const PlantCard = (props) => {
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
                <button className="add-water-btn bg-cyan-50 hover:bg-lightBlue-400 rounded font-semibold">Add Watering</button>
            </div>
        </>
    );
};

export default PlantCard;

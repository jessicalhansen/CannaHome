
const PlantDetailCard = (props) => {
    const plantDate = new Date(props.plant.plantingDate);
    const plantingDate = plantDate.toDateString();

    return (
        <>
            <div className="plant-detail-card text-center">
                <div className="flex">
                    <div className="plant-detail container py-5 px-1 bg-lime-100 items-center text-large mx-1 rounded border-2 border-lime-500">
                        <h2 className="text-3xl font-bold">
                            {props.plant.plantName}
                        </h2> 
                        <p><b>Plant type:</b> {props.plant.plantType}</p>
                        <p><b>Plant strain:</b> {props.plant.plantStrain}</p>
                        <p><b>Propagation type:</b> {props.plant.propagationType}</p>
                        <p><b>Grow stage:</b> {props.plant.growStage}</p>
                        <p><b>Light cycle:</b> {props.plant.lightCycle}</p>
                        <p><b>Date planted:</b> {plantingDate}</p>
                        <p>Last Watered: {props.plant.waterings}</p>
                        
                    </div>
                    <div className="plantnotes-area container rounded bg-amber-50 border-2 border-amber-400 mx-1">
                        <h2 className="text-2xl p-2 underline font-semibold">
                            Plant Notes:
                        </h2>
                        <div className="plantnotes">
                            <p>{props.plant.notes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default PlantDetailCard;

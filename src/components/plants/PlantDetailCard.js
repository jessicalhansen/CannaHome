const PlantDetailCard = (props) => {
    return (
        <>
            <div className="plant-detail-card bg-cyan-300 text-center">
                <div className="flex">
                    <div className="plant-detail container">
                        <h2 className="text-2xl font-bold">
                            {props.plant.plantName}
                        </h2> 
                        <p>Plant type: {props.plant.plantType}</p>
                        <p>Plant strain: {props.plant.plantStrain}</p>
                    </div>
                    <div className="plantnotes-area container">
                        <h2 className="text-xl font-semibold">
                            Plant Notes:
                        </h2>
                        <div className="plantnotes">
                            <p>{props.plant.notes}</p>
                        </div>
                    </div>
                </div>
                <div className="waterings-area">
                    Waterings Area 
                </div>
            </div>
        </>
    )
};

export default PlantDetailCard;

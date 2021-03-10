import { Link } from 'react-router-dom';

const PlantDetailCard = (props) => {
    const plantDate = new Date(props.plant.plantingDate);
    const plantingDate = plantDate.toDateString();

    return (
        <>
            <div className="plant-detail-card bg-cyan-300 text-center">
                <div className="flex">
                    <div className="plant-detail container py-3 px-1 bg-lime-50 items-center text-large rounded">
                        <h2 className="text-2xl font-bold">
                            {props.plant.plantName}
                        </h2> 
                        <p>Plant type: {props.plant.plantType}</p>
                        <p>Plant strain: {props.plant.plantStrain}</p>
                        <p>Propagation type: {props.plant.propagationType}</p>
                        <p>Grow stage: {props.plant.growStage}</p>
                        <p>Light cycle: {props.plant.lightCycle}</p>
                        <p>Date planted: {plantingDate}</p>
                        <p>Date Last Watered: {props.plant.waterings}</p>
                        <div className="editplantbtn-area space-x-4 p-2">
                            <Link to={`/edit-plant/${props.plant._id}`}>
                                <button className="editplant-btn p-1 rounded border-2 border-amber-400 bg-amber-50">
                                Edit
                                </button>
                            </Link>
                            
                            <button className="deleteplant-btn p-1 rounded border-2 border-red-500 bg-red-50">
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="plantnotes-area container rounded bg-purple-200">
                        <h2 className="text-2xl p-2 underline font-semibold">
                            Plant Notes:
                        </h2>
                        <div className="plantnotes bg-purple-400">
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

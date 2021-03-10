import { Link } from 'react-router-dom';

const WateringsCard = (props) => {
    console.log(props);

    return (
        <>
            <div className="waterflex-area">
                <div className="waterings-card rounded bg-rose-400">
                    <h2 className="text-xl">Date:</h2> 
                    <p>{props.watering.waterDate}</p>
                    <p>Included nutrients:</p>
                    <p>{props.watering.incNutrients}</p>
                <div className="wateringsbtn-area flex justify-around">
                    <Link to={`/edit-watering/${props.watering}`}>
                        <button className="editwater-btn  btn p-1 m-1 rounded border-2 border-amber-400 bg-amber-50 hover:bg-orange-100">
                        Edit
                        </button>
                    </Link>
                    
                    <button 
                    className="deletewater-btn p-1 m-1 rounded border-2 hover:bg-red-200 border-red-500 bg-red-50">
                        Delete
                    </button>
            </div>
            </div>
            </div>
        </>
    )
};

export default WateringsCard;

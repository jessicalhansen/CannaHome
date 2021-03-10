const WateringsCard = (props) => {
    console.log(props.waterings);

    return (
        <>
            <div className="addwtrbtn-area">
                <button className="add-water-btn bg-cyan-50 hover:bg-lightBlue-400 rounded font-semibold">Add Watering</button>
            </div>
            <div className="waterflex-area">
                <div className="waterings-card">
                    <h2 className="text-xl">Date: {props.watering.waterDate}</h2>
                    <p>Included nutrients: {props.watering.incNutrients}</p>
                <div className="wateringsbtn-area flex">
                    <button className="editwater-btn  btn p-1 rounded border-2 border-amber-400 bg-amber-50 hover:bg-orange-100">
                    Edit
                    </button>
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

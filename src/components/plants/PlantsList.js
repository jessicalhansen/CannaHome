import PlantCard from './PlantCard'

const PlantsList = (props) => {
    console.log('plant list props ', props);
    const plants = props.plants.map((plantsObj) => {
        return (
            <div className="plantlist-area bg-lime-50">
                <div className="plist-top">
                    <h2 className="text-3xl text-center">My Plants:</h2>
                </div>   
                <PlantCard 
                    key={plantsObj._id} 
                    plant={plantsObj} 
                />
            </div>
        );
    });
    return plants;
}

export default PlantsList;

import PlantCard from './PlantCard'

const PlantsList = (props) => {
    console.log('plant list props ', props);
    const plants = props.plants.map((plantsObj) => {
        return (
            <div className="plantlist-area">
                <h2>My Plant List:</h2>
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

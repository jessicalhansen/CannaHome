import PlantCard from './PlantCard'

const PlantsList = (props) => {
    console.log('plant list props ', props);
    const plants = props.plants.map((plantsObj) => {
        return (
            <div>
                <div className="bg-lime-50 m-1">     
                    <PlantCard 
                    key={plantsObj._id} 
                    plant={plantsObj} 
                />
                </div> 
            </div>
        );
    });
    return plants;
}

export default PlantsList;

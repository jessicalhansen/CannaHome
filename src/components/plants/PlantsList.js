import PlantCard from './PlantCard'

const PlantsList = (props) => {
    console.log('plant list props ', props);
    const plants = props.plants.map((plantsObj) => {
        return (
            <div>
                <div className="plantlist-area bg-lime-50">     
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

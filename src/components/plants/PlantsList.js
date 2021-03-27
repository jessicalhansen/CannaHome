import PlantCard from './PlantCard'

const PlantsList = (props) => {
    const plants = props.plants.map((plantsObj) => {
        return (
            <div>
                <div className="m-1">     
                    <PlantCard 
                    key={plantsObj._id} 
                    plant={plantsObj}
                    showPlantHandler={props.showPlantHandler} 
                    deletePlant={props.deletePlant}
                    waterings={props.waterings}
                />
                </div> 
            </div>
        );
    });
    return plants;
}

export default PlantsList;

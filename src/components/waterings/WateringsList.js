import WateringsCard from '../waterings/WateringsCard';

const WateringsList = (props) => {
    const filteredWaterings = [];
    props.waterings.map((wateringsObj) => {
        return filteredWaterings.unshift(
            <WateringsCard
                key={wateringsObj._id}
                watering={wateringsObj}
            />
        )
    });
    return <ul>{filteredWaterings}</ul>
};

export default WateringsList;

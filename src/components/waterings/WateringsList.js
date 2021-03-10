import WateringsCard from '../waterings/WateringsCard';

const WateringsList = (props) => {
    const filteredWaterings = [];
    props.waterings.map((wateringsObj) => {
        console.log(wateringsObj);
        console.log('wateringObj ^^^^^^');
        console.log(wateringsObj);
        return filteredWaterings.unshift(
            <WateringsCard
                key={wateringsObj}
                watering={wateringsObj}
            />
        )
    });
    return <ul>{filteredWaterings}</ul>
};

export default WateringsList;

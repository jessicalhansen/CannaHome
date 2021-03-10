import React from 'react';
import PlantDetailCard from '../../components/plants/PlantDetailCard';

const PlantDetailPage = (props) => {
    console.log(props);
        return (
            <div className="plantdetail-area">
                <div className="plantdetail-card-area">
                    <PlantDetailCard
                    plant={props.plant} />
                </div>
            </div>
        )         
}

export default PlantDetailPage;

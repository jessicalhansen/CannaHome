import PlantDetailCard from '../../components/plants/PlantDetailCard';

const PlantDetailPage = (props) => {
        return (
            <div className="plantdetail-area">
                <div className="plantdetail-card-area">
                    <PlantDetailCard
                    plant={props.plant}
                    key={props.plant}
                    />
                </div>
            </div>
        )         
}

export default PlantDetailPage;

<Link to={`/plants/${props.plant._id}`}>
                <button 
                onClick={displayPlant}
                key={props.plant._id}
                className="viewplant-btn bg-green-50 hover:bg-lime-400 rounded font-semibold focus:outline-none active:bg-primary">View Details</button>
                </Link>

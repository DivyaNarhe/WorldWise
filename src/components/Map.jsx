import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css'

function Map() {

    const  [ searchParam , setSearchParams ] = useSearchParams()

    const lat = searchParam.get('lat');
    const lng = searchParam.get('lng');

    const navigate = useNavigate();
    return (
        <div className={styles.mapContainer} onClick={()=> navigate("form")}>
            <h1>Map</h1>
            <h2>Position: </h2> 
                <p>lat: {lat},</p>
                <p>lng: {lng}</p>
                <button onClick={()=>{
                    setSearchParams({lat: 20 , lng : 60})
                }}>Change Position</button>
        </div>
    )
}

export default Map

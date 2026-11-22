import Map from "../components/Map"
import Sidebar from "../components/Sidebar"
import styles from "./AppLayout.module.css"

function AppLaoyut() {
    return (
        <div className={styles.app} >
            <Sidebar />
            <Map />
        </div>
    )
}

export default AppLaoyut

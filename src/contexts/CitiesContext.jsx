import { createContext, useContext, useEffect, useState } from "react"
const BASE_URL = 'http://localhost:9000/';

const CitiesContext  = createContext();

function CitiesProvider({children}) {
    const [ cities, setCities ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( function(){
        async function fetchCities() {
            try{
                const res = await fetch(`${BASE_URL}cities`);
                const data= await res.json();
                setCities(data);
            }catch (err) {
                console.log(err);
                console.log(err.message);
                alert(err.message);
            }finally{
                setIsLoading(false);
            }
        }
        fetchCities();
    }, [])

    return <CitiesContext.Provider value={{
        cities,
        isLoading,
    }}>
        {children}
    </CitiesContext.Provider>
}

function useCities(){
    const context = useContext(CitiesContext);
    if(context === undefined) throw new Error("CitiesContext was used outside of the CitiesProvider.")
    return context;
}

export { CitiesProvider, useCities };
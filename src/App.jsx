import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Login from "./Pages/Login";
import AppLayout from "./Pages/AppLaoyut";
import PageNotFound from "./Pages/PageNotFound"
import CityList from "./components/CityList"
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";

const BASE_URL = 'http://localhost:9000/';
function App() {

    const [ cities, setCities ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( function(){
        async function fetchCities() {
            try{
                const res = await fetch(`${BASE_URL}cities`);
                const data= await res.json();
                setCities(data);
            }catch(err){
                alert("There is an error");
            }finally{
                setIsLoading(false);
            }
        }
        fetchCities();
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />
                <Route path="app" element={<AppLayout />} > 
                    <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
                    <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
                    <Route path="countries" element={<CountryList  cities={cities} isLoading={isLoading}/>} />
                    <Route path="form" element={<p>Form</p>}/>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
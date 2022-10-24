import Header from "./components/Header/Header.jsx";
import CountryPage from "./Pages/CountriesPage/CountryPage.jsx";
import {Route,Routes} from "react-router-dom";
import CountryDetailsPage from "./Pages/CountryDetailsPage/CountryDetailsPage.jsx";


function App() {

  return (
    <div>
        <Header/>
             <Routes>
                <Route path="/" element={<CountryPage />}/>
                <Route path="/country/:name" element={<CountryDetailsPage />}/>
            </Routes>
        </div>
  )
}

export default App

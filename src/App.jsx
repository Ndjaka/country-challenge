import Header from "./components/Header/Header.jsx";
import CountryPage from "./Pages/CountryPage/CountryPage.jsx";
import {Route,Routes} from "react-router-dom";


function App() {

  return (
    <div>
        <Header/>
             <Routes>
                <Route path="/" element={<CountryPage />}/>
                <Route path="/country/:name" element={<div />}/>
            </Routes>
        </div>
  )
}

export default App

import React, {useState} from 'react';
import Input from "../../components/Input/Input.jsx";
import Select from "../../components/Select/Select.jsx";
import List from "../../components/Countries/List/List.jsx";
import "./country.page.scss"
import CountrieService from "../../service/countrieService.js";
import SkeletonElement from "../../components/Skeletons/SkeletonElement.jsx";
import SkeletonCountries from "../../components/Skeletons/SkeletonCountries.jsx";

function CountryPage() {
    const countriesInStorage = localStorage.getItem('countries');
    const defaultValue = countriesInStorage ? JSON.parse(countriesInStorage) : [];
    const [countries, setCountries] = useState(defaultValue);

    React.useEffect(() => {
        if(defaultValue.length === 0) findAll();
        }, [])

    /**
    * get all countries on API
    * @return
    * */
    const findAll = () => {
        CountrieService.findAll()
        .then(async (res) => {
            const data = await res.json();
                setCountries(data);
                localStorage.setItem("countries",JSON.stringify(data));
         }).catch((err) => console.log(err))
    }

    /**
    * get countries by region on API
    * @param {string} region region name
    * */
    const findCountryByRegion = (region) => {
        CountrieService.findCountryByRegion(region)
        .then(async (res) => {
            const data = await res.json();
            setCountries(data);
        }).catch((err) => console.log(err))
    }


    /**
    * get countries by region on API
    * @param {string} name  name of contry which is find
    * */
    const findCountryByName = (name) => {
        const _name = name.trim()
        if(_name !== ''){
            CountrieService.findCountryByName(_name)
            .then(async (res) => {
                const data = await res.json();
                setCountries(data);
            }).catch((err) => console.log(err))
        }

    }

    return (
        <div className={'main'}>
            <div className={'main__toolbar'}>
                <Input handleChangeInput={(e) => findCountryByName(e.currentTarget.value)}/>
                <Select onSelectRegion={(value) => findCountryByRegion(value)}/>
            </div>
            <List countries={countries}/>
         </div>
    );
}

export default CountryPage;
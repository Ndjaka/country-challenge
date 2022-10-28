import React, {useEffect, useState} from 'react';
import Button from "../../components/Button/Button.jsx";
import "./country-details.page.scss"
import DetailsItem from "../../components/DetailsItem/DetailsItem.jsx";
import CountrieService from "../../service/countrieService.js";
import {useNavigate, useParams} from "react-router-dom";
import SkeletonElement from "../../components/Skeletons/SkeletonElement.jsx";

function CountryDetailsPage() {
    const {name} = useParams();
    const [details, setDetails] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getCountryDetails();
    }, [name])

    const getCountryDetails = () => {
        CountrieService.findCountryByName(name.toLowerCase(), true)
            .then(async res => {
                const data = await res.json();
                console.log(data[0]);
                setDetails(data[0]);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={'country-details'}>
            <div className={'flag'} onClick={() => navigate(-1)}>
                <Button showIcon value={'Back'}/>
                {details ? <img src={details.flag} alt="flags"/> :
                    <SkeletonElement type={'thumbnail'} witdh={'639px'} height={'319px'}/>}
            </div>
            <div className={'description'}>
                <h3>{details?.name}</h3>
                <div className={'description__item'}>
                    <div>
                        <DetailsItem label={'Native Name'} value={details?.nativeName}/>
                        <DetailsItem label={'Population'} value={details?.population}/>
                        <DetailsItem label={'Region'} value={details?.region}/>
                        <DetailsItem label={'Sub Region'} value={details?.subregion}/>
                        <DetailsItem label={'Capital'} value={details?.capital}/>
                    </div>
                    <div>
                        <DetailsItem label={'Top Level Domain'} value={details?.topLevelDomain[0]}/>
                        <DetailsItem label={'Currencies'} value={details?.currencies[0]?.code}/>
                        <DetailsItem label={'Languages'} value={details?.languages.map(value => value.name).join(',')}/>
                    </div>
                </div>
                <div className={'description__countries'}>
                    <div className={'description__countries__label'}>Border countries:</div>
                    <div className={'description__countries__item'}>
                        {details?.borders?.map((value, id) => <Button key={id} value={value}/>)}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CountryDetailsPage;
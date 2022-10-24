import CountriesUrls from "./countriesUrls.js";

class CountryService {

    static #fetchData = (url) => fetch(url,{
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
    /**
     * fetch all data on server
     * @return Promise<Response>
     * */
    static findAll = () => this.#fetchData(CountriesUrls.all());

    /**
    * fetch all data on server
    * @param {string} name name of country
    * @param {boolean} fullText check if search is by  full name
    * @return Promise<Response>
    * */
    static findCountryByName = (name, fullText = false) => this.#fetchData(CountriesUrls.getByName(name, fullText));

    /**
    * fetch countries by name on server
    * @return Promise<Response>
    * */
    static findCountryByRegion = (region) => this.#fetchData(CountriesUrls.getByRegion(region));
}

export default CountryService;
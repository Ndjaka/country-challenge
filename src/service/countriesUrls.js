const apiUrl=import.meta.env.VITE_BASE_URL;

const countriesUrls = {
    all:() =>`${apiUrl}all`,
    getByName:(name) => `${apiUrl}name/${name}`,
    getByRegion:(region) => `${apiUrl}region/${region}`
}

export default countriesUrls;
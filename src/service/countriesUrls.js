const apiUrl=import.meta.env.VITE_BASE_URL;

const countriesUrls = {
    all:() =>`${apiUrl}all`,
    getByName:(name, fullText) => `${apiUrl}name/${name}?fullText=${fullText}`,
    getByRegion:(region) => `${apiUrl}region/${region}`,

}

export default countriesUrls;
const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error("Unable to get puzzle");
    }
};

const getCountry = async (countryCode) => {
    const response = await fetch("https://restcountries.com/v2/all");
    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error("Unable to fetch data");
    }
};

const getLocation = async () => {
    const response = await fetch("https://ipinfo.io/json?token=044c0c12e2a536");
    if (response.status === 200) {
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("There was a problem connecting to the API");
        }
    }
};

const getCurrentCountry = async () => {
    const location = await getLocation();
    const country = await getCountry(location.country);
    return country;
};

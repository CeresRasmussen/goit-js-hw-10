export { fetchCountries };
function fetchCountries(countryName) {
  const searchField = 'name,capital,population,flag,languages';
  return fetch(
    `https://restcountries.com/v2/name/${countryName}?fields=${searchField}`
  ).then(response => {
    if (!response.ok) {
      throw new Error('This countrie is not found');
    }
    return response.json();
  });
}

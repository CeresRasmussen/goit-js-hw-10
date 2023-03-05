import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './partials/js/fetchCountries.js';

const DEBOUNCE_DELAY = 300;
const refs = {
  inputField: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.inputField.placeholder = 'enter country';
refs.inputField.addEventListener(
  'input',
  debounce(inputCountry, DEBOUNCE_DELAY)
);

function inputCountry(e) {
  const countryName = e.target.value.trim();
  if (!countryName) {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    return;
  }
  fetchCountries(countryName)
    .then(data => countries(data))
    .catch(error =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
}
function countries(data) {
  if (data.length >= 10) {
    return moreThenTenCountry();
  }
  if (data.length === 1) {
    refs.countryList.innerHTML = '';
    searchedCountry(...data);
    return;
  }
  refs.countryInfo.innerHTML = '';
  refs.countryList.style.display = 'block';
  const list = data
    .map(country => {
      return `
              <li><h3>
                <img src="${country.flag}" alt="${country.name}" width="16px">
                 ${country.name}</h3>
              </li>
          `;
    })
    .join('');

  refs.countryList.innerHTML = list;
}

function moreThenTenCountry() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}
function searchedCountry(country) {
  refs.countryList.style.display = 'none';
  refs.countryInfo.innerHTML = `
                <h2><img src="${country.flag}" alt="${
    country.name
  }" width="24px"> ${country.name}</h2>
                <ul>
                    <li>
                        <p><strong>Capital:</strong> ${country.capital}</p>
                    </li>
                    <li>
                        <p><strong>Population:</strong> ${
                          country.population
                        }</p>
                    </li>
                    <li>
                        <p><strong>Language:</strong> ${country.languages.map(
                          lang => ` ${lang.name}`
                        )}
                        </p>
                    </li>
                <ul>
          `;
}

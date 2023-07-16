// XMLHttpRequest

const xhr = new XMLHttpRequest();

// interact with internet
// Step 1:  config the internet connection
xhr.open(
  'GET',
  'https://restcountries.com/v3.1/all'
);

// Step 2:
xhr.send(); // making the request connection

// Step: 3
// what do to with the response from internet
xhr.onload = function responseParser() {
  console.log(xhr.responseText); // string of json objects countries

  // iterating through each country
  const countries = JSON.parse(xhr.responseText);
  const response_data = xhr.response;

//   console.log(countries);
    console.log(response_data);
    console.log(typeof(countries));
    console.log(typeof(response_data));

//   for (const country of countries) {
//     console.log(country.name);
//   }

}



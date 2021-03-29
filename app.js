'use strict';

const container = document.querySelector('.container');
const btn = document.querySelector('button');

let output = '';
const url = 'https://randomuser.me/api/';

const fetchData = async function (url) {
  const res = await fetch(url);
  const { results } = await res.json();

  display(results[0]);
};

fetchData(url);

function display({
  gender,
  name: { title, first, last },
  dob: { age },
  location: {
    country,
    city,
    timezone: { description },
  },
  phone: cell,
  email: mail,
  picture: { large: img },
}) {
  container.innerHTML = `
		<div class="content">
			<img
					src="${img}"
					alt="person" />
				<p>Name: ${title} ${first} ${last}</p>
				<p>Gender: ${gender}</p>
				<p>Age: ${age}</p>
				<p>Email: ${mail}</p>
				<p>Country: ${country}</p>
				<p>City: ${city}</p>
				<p>Description: ${description}</p>
				<p>Cell: ${cell}</p>
				<p>Money: $${randomCurrency()}</p>
		</div>

		<button onClick="fetchData(url)">Next</button>
	`;
}

function randomCurrency() {
  return Math.floor(Math.random() * 1000000)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

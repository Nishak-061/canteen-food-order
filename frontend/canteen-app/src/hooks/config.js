import config from "../config";

// Example of an API call using fetch
fetch(`${config.API_BASE_URL}/api/some-endpoint`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
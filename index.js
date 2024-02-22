const axios = require("axios");

async function getRandomData() {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    return response.data;
  } catch (error) {
    console.error("Error fetching random data:", error);
    throw error;
  }
}

getRandomData()
  .then((data) => {
    console.log(
      `Name: ${data.results[0].name.first} ${data.results[0].name.last}\nGender: ${data.results[0].gender}\nLocation: ${data.results[0].location.city}, ${data.results[0].location.state}\nCountry: ${data.results[0].location.country}\nEmail: ${data.results[0].email}\nPhone: ${data.results[0].phone}\nCell: ${data.results[0].cell}`
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });

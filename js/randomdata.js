const uri = "https://random-data-api.com";

async function getRandomNumbers() {
    try {
      const data = await axios.get(uri + "/api/number/random_number?size=6");
      return data;
    } catch(err) {
      console.log("error: ", err);
    }
}

var statsHeaders = document.querySelectorAll('.stats-module__stat--number');
// console.log(statsHeaders);


// Async function to get numbers from the api
getRandomNumbers().then((result) => {
    // console.log(result)
    // console.log(result.data)
    // console.log(result.data[0])
    // console.log(result.data[0].decimal)

    return result.data

}).then((result) => {
    for (var i=0; i<statsHeaders.length; i++){
        statsHeaders[i].innerHTML = result[i].decimal;
    }
})

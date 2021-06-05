
async function getRandomNumbers() {
  try {
    const data = await axios.get("https://random-data-api.com/api/number/random_number?size=6");

    // if (!data.ok) {
    //     throw new Error(`HTTP error! status: ${data.status}`);
    // }

    let numbers = await data.data;

    return numbers;
  } catch(err) {
    console.log("error: ", err);
  }
}

async function getRandomNumber() {
    try {
      const data = await axios.get("https://random-data-api.com/api/number/random_number");
      //console.log(data.data.decimal);
      const number = Math.round(data.data.decimal);
      //console.log(number);
      return number;
    } catch(err) {
      console.log("error: ", err);
    }
  }



function addRandomStats() {
    var stats_heading = document.querySelectorAll(".stats-module__stat--heading");
    let numbers = getRandomNumbers();
    console.log(numbers);
    for (var i = 0; i < stats_heading.length; i++) {
        // stats_heading[i].style.backgroundColor = "red";
        const number = numbers[i].decimal;
        console.log(number);
        stats_heading[i].innerHTML = number;
      } 
}

//getRandomNumbers();

addRandomStats();
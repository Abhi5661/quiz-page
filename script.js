const questionsEl = document.getElementById("questions");
const scoreEl = document.getElementById("score");
const btnEl = document.getElementById("btn");
var data;

// render questions
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = (e) => {
  let result = e.target;
  // console.log(e)

  if (result.readyState === 4 && result.status === 200) {
    data = JSON.parse(result.response);
    renderQuestions();
    // console.log(data);
  }
};

xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true);
xhttp.send();

function renderQuestions() {
  let output = "";

  for (let i = 0; i < data.length; i++) {
    output += `<div class="question">
          <h2>Q${data[i].id}. ${data[i].question}</h2>
          <label ><input type="radio" id ="${1}" name='q${data[i].id}'> ${
      data[i].options[0]
    }</label>
          <label ><input type="radio" id ="${2}" name='q${data[i].id}'> ${
      data[i].options[1]
    }</label>
          <label ><input type="radio" id ="${3}" name='q${data[i].id}'> ${
      data[i].options[2]
    }</label>
          <label ><input type="radio" id ="${4}" name='q${data[i].id}'> ${
      data[i].options[3]
    }</label>
        </div>`;
  }
  questionsEl.innerHTML = output;
}

btnEl.addEventListener("click", function () {
  let score = 0;
  //   calculate score
  for (let i = 0; i < 5; i++) {
    let selector = `input[name = 'q${data[i].id}']:checked`;
    let selectedAnswer = +document.querySelector(selector).id;
    console.log(selectedAnswer);
    if (selectedAnswer == data[i].answer) {
      score++;
    }
  }

  //   update score
  scoreEl.innerHTML = `${score} / 5`;
});

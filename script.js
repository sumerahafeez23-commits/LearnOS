function predict() {
  let h = document.getElementById("h").value;
  let a = document.getElementById("a").value;
  let p = document.getElementById("p").value;

  let score = (h*0.3 + a*0.3 + p*0.4);
  document.getElementById("result").innerHTML = Math.round(score) + "%";
}

function calc() {
  let m = document.getElementById("marks").value;
  let t = document.getElementById("total").value;

  let per = (m/t)*100;
  document.getElementById("percent").innerHTML = per.toFixed(2)+"%";
}

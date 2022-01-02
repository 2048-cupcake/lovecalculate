function calculate1() {
  var bonus = 9;
  var inputs = document.getElementsByName("names"),
    inputs = [inputs[0].value, inputs[1].value];
  var jointNames = inputs.join("");

  var arr1 = [];
  var arr = jointNames.split("");
  arr.map(item => {
    item = item.toUpperCase();
    var temp = item.charCodeAt(0);
    arr1.push(temp);
  });
  var sum = arr1.reduce(function(a, b) {
    return a + b;
  });
  var avg = Math.ceil(sum / arr1.length);
  avg = avg + bonus;
  document.getElementById("res").style.display = "inline-flex";
  document.getElementById("result").innerHTML = avg + "%";
}
document.getElementById("res").style.display = "none";
document.getElementById("submit").addEventListener(
  "click",
  function(e) {
    e.preventDefault();
    calculate1();
  },
  false
);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

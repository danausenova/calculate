const output = document.querySelector("input");
function display(num) {
  output.value += num;
}
function Clear() {
  output.value = "";
}
function del() {
  output.value = output.value.slice(0, -1);
}
function Calculate() {
  output.value = eval(output.value);
}

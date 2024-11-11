const buttonEle = document.getElementById("clickEle")
console.log(buttonEle)

buttonEle.addEventListener("click", function (event) {
  console.log(event)
  alert("Yoo this is a button click")
})

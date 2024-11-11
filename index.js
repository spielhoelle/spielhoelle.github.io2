// first example simple button click
const buttonEle = document.getElementById("clickEle")

buttonEle.addEventListener("click", function (event) {
  const answer = prompt("How old are you?")
  console.log(answer)
})

// Second example text to binary
function textToBinary(str) {
  let output = ""
  str.split("").forEach((element) => {
    let char = element.charCodeAt(0).toString(2)
    output += ("00000000" + char).slice(-8).concat(" ")
  })
  return output
}

const inputEle = document.getElementById("onTypeEle")
inputEle.addEventListener("keyup", function (event) {
  const result = textToBinary(event.target.value)
  const resultEle = document.getElementById("result")
  resultEle.innerHTML = result
})

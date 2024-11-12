// first example simple button click
const buttonEle = document.getElementById("clickEle")

buttonEle.addEventListener("click", function (event) {
  const passwordFromUserElement = document.getElementById("passwordEle")
  // TODO check if longer than 8 characters
  // TODO check if contains a zero (0)
  console.log(passwordFromUserElement.value)
  if (passwordFromUserElement.value.length > 8) {
    if (passwordFromUserElement.value.includes("0")) {
      console.log("Gut")
    } else {
      console.log("Password long enough, but missing a 0")
    }
  } else {
    console.log("Schlecht, password zu kurz")
  }
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

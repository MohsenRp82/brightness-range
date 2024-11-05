const rangeInput = document.querySelector(".range-input")
const containerBrightness = document.querySelector(".container")

rangeInput.addEventListener("change", function(event){
    containerBrightness.style.filter = "brightness(" + event.target.value + "%" + ")"
})
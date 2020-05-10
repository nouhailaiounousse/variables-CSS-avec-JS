const colorInput = document.querySelector("input[type=color]");
const inputimg = document.querySelectorAll(".left input");
const colorVariable = "--base"
const grisVariable = "--grayscale"
const huVariable = "--hue"


function handleUpdate(){
    const suffix = this.dataset.sizing ;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputimg.forEach(input => input.addEventListener("change", handleUpdate ))




colorInput.addEventListener("change" , e => [
    document.documentElement.style.setProperty(colorVariable, e.target.value)
])
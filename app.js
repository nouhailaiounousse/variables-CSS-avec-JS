const inputs = document.querySelectorAll('.param input');

function testUpdate() {
    const azem = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + azem);
}

inputs.forEach(input => input.addEventListener('change',testUpdate))
inputs.forEach(input => input.addEventListener('mousemove',testUpdate))
let schools = document.getElementById("schools");

const radios = document.querySelectorAll('input[name = "selector"]');
const form1 = document.querySelector("#individuals");
const form2 = document.querySelector("#schools");

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.checked && radio.value == 'schools') {
            form1.style.display = 'none';
            form2.style.display = 'block';
        }
        else {
            form1.style.display = 'block';
            form2.style.display = 'none';
        }
    })
})
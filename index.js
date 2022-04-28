const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");
generateBtn.addEventListener('click', () => {
    let qrvalue = qrInput.value;

    if (!qrvalue) return;///if input is nothing
    generateBtn.innerText = 'Generating Qr Code';
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    qrImg.addEventListener('load', () => {
        generateBtn.innerText = 'Generate Qr Code';
        wrapper.classList.add("active");
    })
    /// if clear input remove qr code
    qrInput.addEventListener("keyup", () => {
        if (!qrInput.value.trim()) {
            wrapper.classList.remove("active");

        }
    });
})

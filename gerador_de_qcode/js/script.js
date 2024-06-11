const container = document.querySelector(".container")
const qrcodebtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")
 
// eventos

// gerar qrcode
function generateQrcode() {
  const qrCodeInputValue = qrCodeInput.value;
  if(!qrCodeInputValue) return;

  qrcodebtn.innerText = "gerando codigo..."

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", ()=>{
    container.classList.add("active")
    qrcodebtn.innerText = "codigo gerado..."
  })
}

qrcodebtn.addEventListener("click", () =>{
    generateQrcode();
});


qrCodeInput.addEventListener("keydown", (e) =>{
    if(!e.code === "Enter")
        generateQrcode()
})



// limpar qrcode


qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.Value){
        container.classList.remove("active")
        qrcodebtn.innerText = " Gerar Qrcode";

    }
})
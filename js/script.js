const form = document.getElementById("generate-form");
const qr = document.getElementById("qr-code");

function onGenerateSubmit(e) {
  e.preventDefault();

  clearUI();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  if (url === "") {
    alert("Please enter a URL");
  } else {
    generateQRCode(url, size);

    setTimeout(() => {
      const saveUrl = qr.querySelector("img").src;
      createSaveBtn(saveUrl);
    }, 50);
  }
}

function generateQRCode(url, size) {
  let qrcode = new QRCode("qr-code", {
    text: url,
    width: size,
    height: size,
  });
}

function clearUI() {
  qr.innerHTML = "";
  const saveLink = document.getElementById("save-link");
  if (saveLink) saveLink.remove();
}

function createSaveBtn(saveUrl) {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
  link.href = saveUrl;
  link.download = "qr-code";
  link.innerHTML = "Download Image";
  document.getElementById("generated").append(link);
}

form.addEventListener("submit", onGenerateSubmit);

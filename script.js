function generateQR() {
    var url = document.getElementById("urlInput").value.trim();
    
    if (url === "") {
        alert("Please enter a valid URL.");
        return;
    }

    var qrCode = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 200,
        height: 200
    });
}


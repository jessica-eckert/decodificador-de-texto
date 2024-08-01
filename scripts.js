function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function performEncryption() {
    const inputText = document.getElementById("inputText").value;
    const outputText = encrypt(inputText);
    document.getElementById("outputText").value = outputText;
}

function performDecryption() {
    const inputText = document.getElementById("inputText").value;
    const outputText = decrypt(inputText);
    document.getElementById("outputText").value = outputText;
}

function copyToClipboard() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}
function clearFields() { // Função para limpar os campos de texto
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
}

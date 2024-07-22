// Codifica o texto em Base64
function encodeText() {
    const input = document.getElementById('inputText').value;
    const encoded = btoa(unescape(encodeURIComponent(input)));
    document.getElementById('resultText').textContent = encoded;
}

// Decodifica o texto de Base64
function decodeText() {
    const input = document.getElementById('inputText').value;
    try {
        const decoded = decodeURIComponent(escape(atob(input)));
        document.getElementById('resultText').textContent = decoded;
    } catch (e) {
        document.getElementById('resultText').textContent = 'texto inválido para decodificação.';
    }
}
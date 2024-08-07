
// Función para encriptar
function encriptarTexto() {
  const input = document.getElementById('input').value;
  const encriptado = input
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/o/g, 'ober')
    .replace(/a/g, 'ai')
    .replace(/u/g, 'ufat');
  document.getElementById(
    'output'
  ).innerHTML = `<h2>Texto Encriptado:</h2><p>${encriptado}</p>`;
  document.getElementById('output').style.backgroundImage = 'none'; // Hide background image
}

// Función para desencriptar
function desencriptarTexto() {
  const input = document.getElementById('input').value;
  const desencriptado = input
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  document.getElementById(
    'output'
  ).innerHTML = `<h2>Texto Desencriptado:</h2><p>${desencriptado}</p>`;
  document.getElementById('output').style.backgroundImage = 'none'; // Hide background image
}


// TRY STYLING PLACEHOLDER TEXT IN OUTPUT TEXTAREA ???
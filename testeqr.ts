const QRCode = require('qrcode')
const img = "https://www.google.com.br";

QRCode.toDataURL(img, {
    color: {
      dark: '#000000',  // Cor dos quadrados
      light: '#ffffff'  // Cor de fundo
    }
  }, function (err, url) {
    if (err) {
      console.error('Erro ao gerar o QR Code:', err);
      return;
    }
  
    // O `url` é a string Base64 da imagem
    console.log('QR Code gerado em Base64:');
    console.log(url);
  });
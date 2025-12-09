function GirarDado(event) {
  event.preventDefault();

  const imagem = document.getElementById("imagem");
  const Resultado = document.getElementById("Resultado");

  let valorDado = Math.floor(Math.random() * 6 + 1);

  imagem.src = `./fotos/d${valorDado}.png`;
  Resultado.textContent = `Caiu no número: ${valorDado}`;
}

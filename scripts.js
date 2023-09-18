function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png"),
      img.setAttribute(
        "alt",
        "Foto de João Felipe Rubio sorrindo, usando camisa branca, barba e fundo preto."
      )
  } else {
    img.setAttribute("src", "./assets/avatar.png"),
      img.setAttribute(
        "alt",
        "Foto de João Felipe Rubio sorrindo, usando camisa verde, barba e fundo azul e roxo."
      )
  }
}

function OCultar(elementoOcultar, elementoMostrar) {
  const p1 = document.getElementById(elementoOcultar);
  const p2 = document.getElementById(elementoMostrar);

  p1.style.display = "none";
  p2.style.display = "block";
}

export default OCultar;

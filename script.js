// Obtener la referencia al tbody de la tabla
const tablaTiquetes = document.getElementById("tablaTiquetes");

// Función para crear una fila de la tabla
function crearFila(numero, nombre, pagado) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
        <td class="border border-slate-300 px-4 py-2">${numero}</td>
        <td class="border border-slate-300 px-4 py-2">${nombre}</td>
        <td class="border border-slate-300 px-4 py-2">${
          pagado ? "Sí" : "No"
        }</td>
    `;
  return fila;
}

// Generar los tiquetes del 00 al 99 (puedes personalizar esto)
for (let i = 0; i <= 99; i++) {
  const numero = i.toString().padStart(2, "0"); // Asegurar formato de 2 dígitos
  const nombre = "Nombre del comprador"; // Reemplazar con datos reales
  const pagado = false; // Ajustar según corresponda

  const nuevaFila = crearFila(numero, nombre, pagado);
  tablaTiquetes.appendChild(nuevaFila);
}

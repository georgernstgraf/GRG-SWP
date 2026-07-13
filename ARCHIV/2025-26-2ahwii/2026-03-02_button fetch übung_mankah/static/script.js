function holeEssen() {
  let daten;

  // fetch("http://essensliste.essens/essen")
  fetch("/essens")
    .then((response) => response.json())
    .then((data) => {
      daten = data;
      let html = "";
      daten.forEach((eintrag) => {
        html += `
        <tr>
          <td>${eintrag.name}</td>
          <td>${eintrag.essen}</td>
    </tr>
    `;
        document.getElementById("tabelle").innerHTML = html;
      });
    })
    .catch((error) => {
      console.info("Fehler beim ersten Catch", error);
    });
}
function loescheEssen() {
  document.getElementById("tabelle").innerHTML = "";
}

const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/123.png";

async function holePokemon() {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Fehler beim Abrufen des Pokemons: " + response.status);
    }
    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);
    const img = globalThis.createElement("img");
    img.src = imgUrl;
    document.body.appendChild(img);
}

try {
    holePokemon();
    console.log("wirft wurde aufgerufen");
} catch (e) {
    console.log("Fehler aufgetreten: ", e.message);
} finally {
    // zusammenräum-code
    console.log("IMMER");
}

/// <reference lib="dom" />

const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/123.png";

async function holePokemon() {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Fehler beim Abrufen des Pokemons: " + response.status);
    }
    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);
    const img = document.createElement("img");
    img.src = imgUrl;
    document.body.appendChild(img);
}

try {
    await holePokemon();
    console.log("wirft wurde aufgerufen");
} catch (e) {
    if (e instanceof Error) {
        console.log("Fehler aufgetreten: ", e.message);
    } else {
        console.log("Fehler aufgetreten: ", e);
    }
} finally {
    // zusammenräum-code
    console.log("IMMER");
}

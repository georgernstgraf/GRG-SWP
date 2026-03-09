// alter < 20 rejected
// alter >= 20 resolved

function checkAlter(alter) {
    return new Promise((resolve, reject) => {
        if (alter < 20) {
            console.log("werde zu jung rejecten");
            return reject("Zu jung");
        }
        console.log("werde Eintritt erlauben");
        return resolve("Eintritt erlaubt");
    });
};

checkAlter(19)
    .then((r) => {
        console.log(`im then handler 19, r = ${r}`);
    })
    .catch((e) => { console.error(`Fehler im 19: ${e}`); });
checkAlter(20)
    .then((r) => {
        console.log(`im then handler 20, r = ${r}`);
    })
    .catch((e) => { console.error(`Fehler in 20: ${e}`); });

console.log("promises erstellt");

import { readFile } from 'node:fs'

function leArquivo(path) {
    readFile(path, (err, data) => {
        if (err) throw err;
        return data.toString();
    })
}

readFile("./exercicios/Dia02.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})
import express from 'express'
import {Performance} from "./performance.js";

const app = express();
const PORT = 4200;
const PERFORMANCES = [
    new Performance(1, 'Արթուրո Ուիի կարիերան, որը պետք է կանխվեր', 20),
    new Performance(2, 'Արծվաբույն',20),
    new Performance(3, 'Պեպո',20),
    new Performance(4, 'Թռիչք կկվի բնի վրայով',20),
    new Performance(5, 'Մեծապատիվ մուրացկաններ',20),
    new Performance(6, 'Վերջին կանգառ',5),
    new Performance(7, 'Սիրելիներից մի բաժանվեք',5),
    new Performance(8, 'Արքան հրապարակում',5),
    new Performance(9, 'Կալիֆորնիական սյուիտ',5),
    new Performance(10, 'Վաղը ուշ կլինի',5),
    new Performance(11, 'Փարիզյան դատավճիռ',10),
    new Performance(12, 'Օրնիֆլ',10),
    new Performance(13, 'Սև, դառը շոկոլադ', 10),
    new Performance(14, 'Տիկնայք և Պարոնայք', 10),
    new Performance(15, 'Վերջին ծաղրածուն', 10)
];

app.get('/performances', (req, res) => {
    res.status(200).json(PERFORMANCES);
});

app.get('/performances/:id', (req, res) => {
    res.status(200).json(PERFORMANCES.find(performance => performance.id === Number(req.params.id)));
});

app.get('', (req, res) => {
    res.status(200);
    res.redirect('/performances');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
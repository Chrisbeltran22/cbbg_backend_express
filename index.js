const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3000;
app.use(cors());


app.get('/usuario', function (req, res) {
    res.json({
        primernombre: "Christopher",
        segundonombre: "Bryan",
        primerapellido: "Beltrán",
        segundoapellido: "González",
        fechanacimiento: "2000-06-21",
        estadofamiliar: "Soltero",
        residencia: "San Salvador",
        profesion: "Técnico en Sistemas de computación",
        estatura: 1.68,
        peso: 120,
        colorpiel: "trigueño",
        colorojos: "café",
        colorcabello: "negro",
        ultimosempleos: [{
            empresa: "Teleperformance",
            departamento: "Atención al cliente",
            direccion: "Santa Tecla",
            cargo: "Agente de servicio al cliente",
            desde: "2024-08-24",
            hasta: "2025-02-14"
        }, {
            empresa: "E4CC",
            departamento: "Enseñanza",
            direccion: "San Salvador",
            cargo: "Coach de inglés",
            desde: "2023-02-24",
            hasta: "2023-07-01"
        }],
    });
})

app.get('/genero', function (req, res) {
    res.json([
        { id:1, genero: "Masculino" },
        { id:2, genero: "Femenino" },
       ]);
});

app.get('/tipo_documento', function (req, res) {
    res.json([
        {id:1, tipo_documento: "DUI" },
        {id:2, tipo_docuemento: "NIT" },
        {id:3, tipo_documento: "ISSS" },
        {id:4, tipo_documento: "PASAPORTE"}
    ]);
});

app.get('/departamento', function (req, res) {
    res.json([
        { id:1, departamento: "Ahuachapan"},
        { id:2, departamento: "Santa Ana"},
        { id:3, departamento: "Sonsonate"},
        { id:4, departamento: "La Libertad"},
        { id:5, departamento: "San Salvador"},
        { id:6, departamento: "Chalatenango"},
        { id:7, departamento: "Cuscatlán"},
        { id:8, departamento: "Cabañas"},
        { id:9, departamento: "La Paz"},
        { id:10, departamento: "San Vicente"},
        { id:11, departamento: "Usulután"},
        { id:12, departamento: "San Miguel"},
        { id:13, departamento: "Morazán"},
        { id:14, departamento: "La Unión"}
    ]);
});

app.get('/municipio', function (req, res) {
    res.json([
        { id:1, municipio: "Ahuachapan"},
        { id:2, municipio: "Metapán"},
        { id:3, municipio: "Izalco"},
        { id:4, municipio: "Santa tecla"},
        { id:5, municipio: "Soyapango"},
        { id:6, municipio: "Las Pilas"},
        { id:7, municipio: "Cojutepeque"},
        { id:8, municipio: "Ilobasco"},
        { id:9, municipio: "Olocuilta"},
        { id:10, municipio: "Apastepeque"},
        { id:11, municipio: "Jucuapa"},
        { id:12, municipio: "El Triunfo"},
        { id:13, municipio: "Sociedad"},
        { id:14, municipio: "San Alejo"}
    ]);
});

//GET http://www.algo.com/sumar?campo1=3.56&campo2=9.13
app.get('/sumar', function (req, res) {
    let resultado = parseFloat(req.query.campo1) + parseFloat(req.query.campo2);
    res.json({
        respuesta: resultado
    });
});

app.get('/login', function (req, res) {
    console.log(req.query.email);
    console.log(req.query.password);
});

app.listen(puerto, function (req, res) {
    console.log("EL SERVIDOR ESTA CORRIENDO EN EL PUERTO NO.3000");
});


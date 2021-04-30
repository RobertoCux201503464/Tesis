var express = require("express");
var router = express.Router();
const cors = require("cors");
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.json({ extended: false });
const DataBaseHandler = require("../models/db");
const handler = new DataBaseHandler();


router.post("/crearUsuario", urlencodedParser, (req2, res2) => {
  handler.getConnection().query("Call crearUsuario(\"" + req2.body.usuario + "\",\"" + req2.body.contrasena + "\"," + req2.body.tipoUsuario + ");", (err, res) => {
    if (err) {
      res2.status(500).json({
        codigo: 500,
        Estado: false,
        data: [{"resultado": 0}]
      });
      return;
    }

    res2.json({
      codigo: 200,
      Estado: true,
      data: res[0]
    });

  });
});

module.exports = router;
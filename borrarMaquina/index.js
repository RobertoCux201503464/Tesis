const app = require("./app")

const port = process.env.PORT || 3021;

app.listen(port, function() {
    console.log("Servidor escuchando en el puerto: ", port);
});
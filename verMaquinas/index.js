const app = require("./app")

const port = process.env.PORT || 3026;

app.listen(port, function() {
    console.log("Servidor escuchando en el puerto: ", port);
});
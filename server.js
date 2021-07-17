const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get("/onboarding", (req, res) => {
	res.sendFile(__dirname + '/views/onboarding.html')
})
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}!`));

import Express  from "express";
import BodyParser from "body-parser";
import router from "./routes/index.js";

const bodyParser = BodyParser;
const app = Express();

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded(
    {
        extended: false
    }
))

app.use(bodyParser.json())

app.use(router)

app.listen(3000, function(){
    console.log("Ouvindo na porta 3000!");
})
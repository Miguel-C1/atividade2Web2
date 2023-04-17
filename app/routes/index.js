import Router from "express";
var router = express.Router();

import { default as CrudUsuario } from "../routes/cadastroUsuario.js"

let router = Router();


router.use("usuario", CrudUsuario);


export default router;

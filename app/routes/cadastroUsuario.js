
import CRUDUsuario from "../controllers/cadastroUsuario.js"

import Router from "express";
import router from "./index.js";

router.get("/listarUsuario", CRUDUsuario.get);
router.post("/cadastrarUsuario", CRUDUsuario.post);
router.put("/alterarUsuario", CRUDUsuario.put);
router.delete("/deletarUsuario", CRUDUsuario.del);

const rotasCrudUsuario = router()


export default rotasCrudUsuario;
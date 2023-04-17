import cadastroTelefone from "../controllers/telefoneUsuario.js"

import Router from "express";

router.get("/listagemTelefone", cadastroTelefone.get)
router.post("/cadastroTelefone", cadastroTelefone.post)
router.put("/alteracaoTelefone", cadastroTelefone.put)
router.delete("/deletarTelefone", cadastroTelefone.del)

const router = Router();

export default router;
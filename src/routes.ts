// * Importando o metodo ROUTER do express
import { Router } from "express";
import { AuthenticateVerify } from "./middlewares/AuthenticateVerify";
import { sendcontroller } from "./useCases/MailCase/Send";

// ! Codigos
import { createUserController } from "./useCases/UserCase/CreateUser";
import { gainUserController } from "./useCases/UserCase/GainUser";
import { getUserController } from "./useCases/UserCase/GetUser";
import { recoveryPassController } from "./useCases/UserCase/RecoveryPass";

const router = Router(); // variavel com as rotas

// * ROTAS

// ? Rota de Criação de usuario
router.post('/user', async (req, res) => {
  return await createUserController.handle(req, res)
})

// ? Rota para buscar o usuario
router.get('/user/:email/:password', async (req, res) => {
  return await getUserController.handle(req, res)
})

// ? Rota para mudar a senha do usuario
router.put('/user',  async (req, res) => {
  return await recoveryPassController.handle(req, res)
})

// ? Rota para o usuario ganhar dinheiro
router.put('/user/gain', AuthenticateVerify, async (req, res) => {
  return await gainUserController.handle(req, res)
})

router.post('/mail',  async (req, res) => {
  return await sendcontroller.handle(req, res)
})


// ! Exportando as rotas para o app
export { router }
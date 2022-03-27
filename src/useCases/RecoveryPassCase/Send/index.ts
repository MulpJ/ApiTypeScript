import { TokenRepository } from "../../../repositories/implementations/TokenRepository/TokenRepository";
import { RecoveryPassController } from "./RecoverPassController";
import { RecoveryPass } from "./recoveyPass";

const repo = new TokenRepository()
const recovery = new RecoveryPass(repo)
const recoveryController = new RecoveryPassController(recovery)

export { recoveryController}
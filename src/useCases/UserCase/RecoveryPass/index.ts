import { UserRopsitory } from "../../../repositories/implementations/UserRepository/UserRopsitory";
import { RecoveryPass } from "./RecoveyPass";
import { RecoveyPassController } from "./RecoveyPassController";

const userRepository = new UserRopsitory()
const recoveryPass = new RecoveryPass(userRepository)
const recoveryPassController = new RecoveyPassController(recoveryPass)

export { recoveryPassController }
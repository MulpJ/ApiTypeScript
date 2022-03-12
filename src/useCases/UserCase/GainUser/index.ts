import { UserRopsitory } from "../../../repositories/implementations/UserRepository/UserRopsitory";
import { GainUser } from "./GainUser";
import { GainUserController } from "./GainUserController";

const userRepository = new UserRopsitory()
const gainUser = new GainUser(userRepository)
const gainUserController = new GainUserController(gainUser)

export { gainUserController }
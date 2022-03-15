import { IMailRepository } from "../../../repositories/IMailRepository";

export class Send {
  constructor(
    public mailRepository: IMailRepository
  ) {}
}
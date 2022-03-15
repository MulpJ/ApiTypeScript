type IMail = {
  test:string
}

export interface IMailRepository {
  sendMessage(data: IMail)
}
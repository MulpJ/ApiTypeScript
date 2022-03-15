import { IMailRepository } from "../../IMailRepository";

import mail from 'nodemailer';

type IMail = {
    email: string,
    sub:string,
    text: string
}

export class MailRepository implements IMailRepository {
    async sendMessage(data: IMail) {
        const trans = mail.createTransport({
            service:'gmail',
            auth: {
                user:"mulpj.inc@gmail.com",
                pass:"mulpj123"
            }
        })

        trans.sendMail({
            from:"mulpj.inc@gmail.com",
            to:data.email,
            subject:data.sub,
            text:data.text
        }, (err: any) => {
            if(err) {
                console.log(err)
            } 
        })
    }
}
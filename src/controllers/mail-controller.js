import nodemailer from 'nodemailer'
require('dotenv').config()
export const emailVerification = async (toEmail, otp) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })
    const maildetails = {
        from: 'kumar002345k@gmail.com',
        to: toEmail,
        subject: 'verify your otp',
        html: `<h1>conform your otp</h1>
        <p>Here is your otp ${otp}</p>`

    }

    const emailResponse = await transport.sendMail(maildetails, (error, response) => {
        if (error) {
            console.log(error.message)
        }
        else {
            console.log("mail sent for provided email")
        }
    })


}



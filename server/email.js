const nodemailer = require('nodemailer')

async function sendEmail() {
  
    // create reusable transporter object
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user:  '', // email sender
        pass: '', // email sender password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "darrell029@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
}

// main().catch(console.error);
/*
  Code shamelessly stolen, taken, mugged, thieved, looted, pilfered, appropriated, robbed, raided, burgled, embezzled and snatched 
  from https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645 
*/

export default function (req, res) {
  require('dotenv').config()
  const pw = `${process.env.SMTP}`
  let nodemailer = require('nodemailer')
  

  const transporter = nodemailer.createTransport({
    port: 465,     
    host: "mail.cyon.ch",
      auth: {
        user: 'test@mrweber.ch',
        pass: pw,
      },
    secure: true,
  });
    
  const mailData = {
      from: req.body.email,
      to: `test@mrweber.ch, ${req.body.email}`,
      subject: `PCH: Nachricht von ${req.body.name}`,
      text: req.body.message,
      html: `<div>${req.body.message}</div>`
  }
  
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  })
  
  res.send('success')

  }

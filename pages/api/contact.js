/*
  Code shamelessly stolen, taken, mugged, thieved, looted, pilfered, appropriated, robbed, raided, burgled, embezzled and snatched 
  from https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645 
*/

export default async function (req, res) {

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
  
  try{
    await transporter.sendMail(mailData)
  } catch(err){
    return res.status(500).json({err: err.message || err.toString()})
  }

  return res.status(200).json({err: ""})
  

  }

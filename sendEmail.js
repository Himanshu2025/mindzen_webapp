import nodemailer from 'nodemailer'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hkul0004@student.monash.edu',
    pass: 'vbenqhbrcuaegjzj'
  }
})

app.post('/send-email', (req, res) => {
  console.log(req.body)
  let { to, subject, text, attachment } = req.body

  if (!to || !subject || !text) {
    return res.status(400).json({ error: 'Missing required fields: to, subject, or text' })
  }

  if (typeof to === 'string') {
    to = to.split(',').map((email) => email.trim())
  }

  const mailOptions = {
    from: 'hkul0004@student.monash.edu',
    to: to,
    subject: subject,
    text: text
  }

  if (attachment) {
    mailOptions.attachments = [
      {
        filename: attachment.filename,
        content: attachment.content,
        encoding: 'base64',
        contentType: attachment.type
      }
    ]
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }
    console.log('Email sent:', info.response)
    res.status(200).json({ message: 'Email sent successfully!' })
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

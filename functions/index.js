/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const { onRequest } = require('firebase-functions/v2/https')
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })

admin.initializeApp()

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const { to, subject, text, attachment } = req.body

    if (!to || !subject || !text) {
      return res.status(400).json({ error: 'Missing required fields: to, subject, or text' })
    }

    const recipientEmails = typeof to === 'string' ? to.split(',').map((email) => email.trim()) : to

    const mailOptions = {
      from: 'hkul0004@student.monash.edu',
      to: recipientEmails,
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
})

// to get all posts
exports.getAllPosts = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const postsCollection = admin.firestore().collection('posts')
      const snapshot = await postsCollection.get()

      // Retrieve all posts
      const posts = []
      snapshot.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data()
        })
      })

      res.status(200).json({ posts })
    } catch (error) {
      console.error('Error retrieving posts:', error)
      res.status(500).send('Error retrieving posts')
    }
  })
})

exports.countPosts = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const postsCollection = admin.firestore().collection('posts')
      const snapshot = await postsCollection.get()

      const postCount = snapshot.size

      res.status(200).json({ postCount })
    } catch (error) {
      console.error('Error counting posts:', error)
      res.status(500).send('Error counting posts')
    }
  })
})

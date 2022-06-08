const express = require('express')
const User = require('../schema/user')
const router = express.Router()

router.post('/register', async (req, res) => {
  const { name, img, email, phone } = req.body
  if (!name || !email || !phone) {
    res.status(500).json({ message: 'please fill in all fields.' })
  } else {
    try {
      const exist = await User.findOne({ email: email })
      if (exist) {
        res.status(200).json({
          login: true,
          message: 'Successfully authorized.',
        })
      } else {
        const user = new User({
          name: name,
          image: img,
          email: email,
          phone: phone,
        })
        const resp = await user.save()
        res.status(200).json(resp)
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
})

router.get('/user/:email', async (req, res) => {
  const { email } = req.params
  if (!email) {
    res.status(500).json({ message: 'please fill in all fields.' })
  } else {
    const exist_user = await User.findOne({ email: email })
    if (exist_user) {
      res.status(200).json(exist_user)
    } else {
      res.status(404).json({ message: 'user not found !' })
    }
  }
})

module.exports = router

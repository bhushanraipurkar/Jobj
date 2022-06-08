const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connection successfull .'))
  .catch((e) => console.log(e))

// bhushan (username)
// jobjeevan2022 (pass)

// mongodb+srv://bhushan:jobjeevan2022@cluster0.yhx9d.mongodb.net/?retryWrites=true&w=majority

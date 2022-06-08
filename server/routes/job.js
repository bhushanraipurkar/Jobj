const express = require('express');
const Job = require('../schema/job');
const User = require('../schema/user');
const router = express.Router();

router.post('/register', async (req, res) => {
  const {
    title,
    topic,
    desc,
    noopen,
    postrequired,
    salary,
    time,
    experience,
    contact,
    hiring,
    owner,
    pgender,
    location,
    aadhar,
  } = req.body;
  if (
    !title ||
    !topic ||
    !desc ||
    !noopen ||
    !postrequired ||
    !salary ||
    !time ||
    !experience ||
    !contact ||
    !hiring ||
    !owner ||
    !pgender ||
    !location ||
    !aadhar
  ) {
    res.status(500).json({ message: 'please fill in all fields.' });
  } else {
    try {
      if (owner.match(/^[0-9a-fA-F]{24}$/)) {
        const exist_user = await User.findOne({ _id: owner });
        if (exist_user) {
          const job = new Job({
            title: title,
            topic: topic,
            desc: desc,
            noopen: noopen,
            postrequired: postrequired,
            salary: salary,
            time: time,
            experience: experience,
            contact: contact,
            hiring: hiring,
            pgender: pgender,
            location: location,
            aadhar: aadhar,
            owner: owner,
          });
          const resp = await job.save();
          res.status(200).json(resp);
        } else {
          res.status(400).json('User is not valid');
        }
      } else {
        res.status(500).json({ message: 'owner id is not valid' });
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }
});

router.get('/all', async (req, res) => {
  try {
    const alljobs = await Job.find();
    res.status(200).json(alljobs);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put('/apply/:id', async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  if (!email) {
    res.status(500).json({ message: 'please provide a email.' });
  } else {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      try {
        const exist_user = await User.findOne({ email: email });
        const job_exist = await Job.findById(id);
        if (
          JSON.stringify(exist_user._id) === JSON.stringify(job_exist.owner)
        ) {
          res.status(200).json({ message: 'You are owner .' });
          return;
        }
        if (exist_user && job_exist) {
          const applied = await job_exist.appliedby.includes(email);
          if (applied) {
            res.status(200).json({ message: 'already applied.' });
          } else {
            const resp = await job_exist.updateOne({
              $push: { appliedby: email },
            });
            res.status(200).json(resp);
          }
        } else {
          res.status(404).json({ message: 'not exist' });
        }
      } catch (e) {
        res.status(500).json(e);
      }
    } else {
      res.status(500).json({ message: 'please enter valid id.' });
    }
  }
});

router.get('/jobs/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const user_id = user._id;
      const jobs = await Job.find({ owner: user_id }).exec();
      res.status(200).json(jobs);
    } else {
      res.status(404).json({ message: 'user not found' });
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/applied/:id', async (req, res) => {
  const { id } = req.params;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    try {
      const job = await Job.findOne({ _id: id });
      if (job) {
        const resp = await Promise.all(
          job.appliedby.map((i) => {
            return User.findOne({ email: i });
          })
        );

        res.status(200).json(resp);
      } else {
        res.status(404).json('Job not found !');
      }
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(400).json({ message: 'Job not present.' });
  }
});

router.get('/type/:type', async (req, res) => {
  const { type } = req.params;
  if (type) {
    try {
      const job = await Job.find({ type: type });
      res.status(200).json(job);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(400).json({ message: 'type is not provided !' });
  }
});

router.get('/type/:type/:role', async (req, res) => {
  const { type, role } = req.params;
  if (type) {
    try {
      const job = await Job.find({ type: type, postrequired: role });
      if (!job) {
        res.status(200).json(job);
      } else {
      }
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(400).json({ message: 'type is not provided !' });
  }
});

module.exports = router;

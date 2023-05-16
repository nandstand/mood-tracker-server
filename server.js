const express = require('express');
const Sequelize = require('sequelize');
const cors = require('cors');

// Connect to database

const sequelize = new Sequelize('mood_tracker', 'postgres', 'foobar', {
  host: 'localhost',
  dialect: 'postgres'
});

// Test connection

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// Create a model for interfacing with the previously (manually) created table

const Mood = sequelize.define('mood', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    primaryKey: true
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'moods',
  timestamps: false
});

// App 

const app = express();
app.use(express.json());
app.use(cors());


// Routes


// Get the data for a specific date
app.get('/mood/:date', (req, res) => {
  Mood.findOne({ where: { date: req.params.date } })
    .then(mood => {
      if (!mood) {
        res.status(404).json({ message: 'No mood found for this date' });
      } else {
        res.json(mood);
      }
    })
    .catch(err => res.status(500).json({ message: 'An error occurred', error: err }));
});

// Get the data for a specific month
// Query database for all moods between the first and last day of the month
// TODO: This is not working yet
app.get('/mood/:year/:month', async (req, res) => {
  try {
    const year = parseInt(req.params.year, 10);
    const month = parseInt(req.params.month, 10);

    const moods = await Mood.findAll({
      where: {
        date: {
          [Op.between]: [new Date(year, month - 1, 1), new Date(year, month, 0)]
        },
      },
    });

    res.json(moods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



// Put the data for a specific date
app.put('/mood/:date', (req, res) => {
  Mood.upsert({ date: req.params.date, color: req.body.color })
    .then(() => res.json({ message: 'Mood updated successfully' }))
    .catch(err => res.status(500).json({ message: 'An error occurred', error: err }));
});

// Start server

app.listen(3000, () => console.log('Hello from port 3000'));
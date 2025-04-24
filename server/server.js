require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Połączenie z MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Schematy MongoDB
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  rentals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Car' }]
});

const CarSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  pricePerDay: Number,
  isAvailable: Boolean
});

const User = mongoose.model('User', UserSchema);
const Car = mongoose.model('Car', CarSchema);

// Autentykacja
app.post('/api/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      email: req.body.email,
      password: hashedPassword
    });
    await user.save();
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('User not found');
  
  if (await bcrypt.compare(req.body.password, user.password)) {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    return res.send({ token });
  }
  
  res.status(401).send('Invalid credentials');
});

// Endpointy dla samochodów
app.get('/api/cars', async (req, res) => {
  const cars = await Car.find({ isAvailable: true });
  res.send(cars);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
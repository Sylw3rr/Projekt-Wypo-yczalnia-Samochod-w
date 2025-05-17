// backend/src/routes/carRoutes.js
import express from 'express';
const router = express.Router();

router.post('/cars', async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
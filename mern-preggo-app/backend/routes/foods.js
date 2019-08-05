const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req, res) => {
  Food.find()
    .then(foods => res.json(foods))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const food = req.body.food;
  const calories = Number(req.body.calories);
  const meal = req.body.meal;
  const date = Date.parse(req.body.date);

  const newFood = new Food({
    food,
    calories,
    meal,
    date,
  });

  newFood.save()
  .then(() => res.json('Food added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Food.findById(req.params.id)
    .then(food => res.json(food))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.json('Food deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Food.findById(req.params.id)
    .then(food => {
      Food.food = req.body.food;
      Food.calories = Number(req.body.calories);
      Food.meal = req.body.meal;
      Food.date = Date(req.body.date);

      food.save()
        .then(() => res.json('Food updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
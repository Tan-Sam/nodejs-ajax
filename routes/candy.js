import express from 'express';
import candyController from '../controller/candystore';

const router = express.Router();

/*  GET index page. */
router.get('/', (req, res, next) => {
  res.json(candyController.list());
});

/*
 *  Create candy
 */
router.post('/', (req, res, next) => {
  const newCandy = candyController.create(req.body);
  res.json(newCandy);
});

/*
 *  Get candy
 */
router.get('/:id', (req, res, next) => {
  const candyId = req.params.id;
  res.json(candyController.get(candyId));
});

/*
 *  Update candy
 */
router.put('/:id', (req, res, next) => {
  const candyId = req.params.id;
  res.json(candyController.update(candyId));
});

/*
 *  Delete candy
 */
router.delete('/:id', (req, res, next) => {
  const candyId = req.params.id;
  res.json(candyController.delete(candyId));
});

export default router;

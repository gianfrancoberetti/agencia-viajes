const express = require('express');

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    res.render('inicio', {
        pagina: 'inicio'
    });
  } catch (error) {
      next(error)
  }
});



module.exports = router
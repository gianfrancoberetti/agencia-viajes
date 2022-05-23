const express = require('express');

const router = express.Router()


router.get('/', (req, res, next) => {
  try {
    res.render('nosotros', {
        pagina: 'nosotros' 
    })
  } catch (error) {
      
  }
})

module.exports = router
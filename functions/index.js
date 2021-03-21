const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/menu', (req, res) => {
  const menuItems = [{
    title: 'SALMON SORRENTO',
    description: 'Lemon butter sauce, Roma tomatoes & capers.'
  }, {
    title: 'EGGPLANT PARMIGIANA',
    description: 'Topped with our homemade marinara sauce, mozzarella and garnished with parsley.'
  }, {
    title: 'CHICKEN SALTIMBOCCA',
    description: 'Topped with prosciutto & sage, served with artichoke hearts, lemon, capers & lemon butter sauce.'
  }, {
    title: 'PROSCIUTTO STUFFED CHICKEN',
    description: 'Stuffed with mozzarella & prosciutto, served with our homemade marinara & pesto cream sauce.'
  }, {
    title: 'CHICKEN LIMONE',
    description: 'Lemon butter sauce & capers.'
  }, {
    title: 'CHICKEN PARMIGIANA',
    description: 'Topped with our homemade marinara sauce, mozzarella and garnished with parsley.'
  }, {
    title: 'CHICKEN MARSALA',
    description: 'Baby portobello mushrooms in a traditional Marsala wine reduction.'
  }, {
    title: 'BAKED ZITI',
    description: 'Mozzarella, provolone & rosa sauce tossed & topped with ricotta & Italian-style bread crumbs.'
  }, {
    title: 'SPAGHETTI WITH MEATBALLS',
    description: 'Our famous half-pound meatballs with our homemade marinara sauce.'
  }, {
    title: 'LASAGNA',
    description: 'Towering layers of meat sauce, ricotta, mozzarella, provolone & parmesan.'
  }, {
    title: 'BAKED RIGATONI',
    description: 'Spicy Italian sausage & meat sauce tossed & topped with mozzarella, parmesan & ricotta.'
  }, {
    title: 'SPICY CHICKEN RIGATONI',
    description: 'Chicken breast, garlic, crushed red pepper & peas in spicy rosa sauce.'
  }, {
    title: 'CHICKEN CARBONARA',
    description: 'Chicken breast, prosciutto, peas & garlic in Alfredo sauce.'
  }, {
    title: 'SHRIMP FRA DIAVOLO',
    description: 'Garlic shrimp & crushed red pepper with penne in spicy rosa sauce.'
  }, {
    title: 'PENNE SAN REMO',
    description: 'Chicken breast, artichoke hearts, sun-dried tomatoes & peas in white wine cream sauce.'
  }, {
    title: 'QUATTRO AL FORNO',
    description: 'Cheese Manicotti, Chicken Cannelloni, Cheese Ravioli & Stuffed Shells.'
  }, {
    title: 'CHICKEN CANNELLONI',
    description: 'Spinach pasta tubes filled with chicken, ricotta & mozzarella with rosa sauce.'
  }, {
    title: 'STUFFED SHELLS',
    description: 'Pasta shells filled with spicy Italian sausage, spinach, ricotta & parmesan with Alfredo & our homemade marinara sauce.'
  }, {
    title: 'CHEESE MANICOTTI',
    description: 'Pasta tubes filled with ricotta, mozzarella & parmesan with Alfredo & our homemade marinara sauce.'
  }, {
    title: 'RAVIOLI WITH MEAT SAUCE',
    description: 'Cheese-filled ravioli with our savory meat sauce.'
  }, {
    title: 'RAVIOLI AL POMODORO',
    description: 'Cheese-filled ravioli with our homemade marinara sauce.'
  }, {
    title: 'PIZZA CON FORMAGGIO',
    description: 'Mozzarella, garlic-infused olive oil & our authentic pizza sauce.'
  }, {
    title: 'PIZZA CON PEPPERONI',
    description: 'Large slices of pepperoni, mozzarella, provolone & our authentic pizza sauce.'
  }, {
    title: 'PIZZA MARGHERITA',
    description: 'Fresh mozzarella, fresh basil & our authentic pizza sauce.'
  }, {
    title: 'SPICY ARRABBIATA PIZZA',
    description: 'Spicy Italian sausage, pepperoni, caramelized red onions, Gorgonzola, mozzarella, provolone & our authentic pizza sauce.'
  }]
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.json(menuItems)
})

exports.app = functions.https.onRequest(app)
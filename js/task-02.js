const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingedientsRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(item => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = item;
  console.log(itemRef)
  return itemRef
  
});
ingedientsRef.append(...ingredientsList)
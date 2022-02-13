const allCategory = document.querySelectorAll('.item')
console.log(`Number of categories: ${ allCategory.length }`) ;

allCategory.forEach((category) => {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Element: ', category.lastElementChild.children.length);
})

 
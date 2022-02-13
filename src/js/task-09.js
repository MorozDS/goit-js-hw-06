function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector('.color')
const changeColor = document.querySelector('.change-color');
  
  const onChangeBtnColor = () => {
    const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
};





changeColor.addEventListener('click', onChangeBtnColor );


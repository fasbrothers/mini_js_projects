const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn"),
  title = document.getElementById('h4')
  color = document.querySelector(".color");

  btn.addEventListener('click', ()=>{
      const randomNumber = getRandomNumber();
      document.body.style.backgroundColor = colors[randomNumber]
      color.textContent = colors[randomNumber],
      color.style.color = colors[randomNumber]
      title.style.color = colors[randomNumber]
  })

  function getRandomNumber() {
      return Math.floor(Math.random()* colors.length)
  }
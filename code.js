x = document.createElement("p")
x.innerHTML = `
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo hic ea ab laudantium, quisquam, dolores labore, voluptate atque odit commodi aliquam sit quia reprehenderit. Esse laborum autem quibusdam at atque.
`
x.addEventListener("click", () => {
  console.log(111);
})

y = document.getElementById("b1")
console.log(y);
y.appendChild(x)
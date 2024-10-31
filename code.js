console.log(111)

x = document.getElementById("p1");
y = document.getElementsByTagName("p");
z = document.getElementsByClassName("c1");

// same as css selectors 
x_ = document.querySelectorAll("#p1");
y_ = document.querySelectorAll("p");
y_ = document.querySelectorAll(".c1");


y__ = document.querySelector(".c1");
console.log(y__);
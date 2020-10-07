function init() {
 document.body.addEventListener("keydown", (e) => {
 const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
<<<<<<< HEAD

function init() {
 let i = 0;
 document.body.addEventListener("keydown", (event) => {
 const key = event.key;
 
  if (key === codes[i]) {
    i++;
 
    if (i === codes.length) {
      alert("Hurray");
 
      i = 0;
    }
  } else {
    i = 0;
  }
 }
 )
 }
=======
 let i = 0;
 if (e.key === codes[i]){
   i++;
 } if (i === codes.length) {
   alert("INVINCIBLE!");
   i = 0;
 } else {
   i = 0;
 }
  });
}

init();
>>>>>>> dbf98b5cce14ef07d4a0b210e6c4a1b6fd117af7

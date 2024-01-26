let btn = document.querySelector(".btn");
let container = document.querySelector(".container");

function myfun() {
  let ans1 = document.createElement("div");
  ans1.className = "card";
  let tag1 = document.querySelector(".card");
  console.log();
  let cls1 = document.createElement("div");
  cls1.className = "nav";
  let tag2 = document.createElement("ion-icon");
  tag2.setAttribute("name", "create-outline");
  tag2.addEventListener("click", focusfunction);

  tag2.id = "focus";
  function focusfunction() {
    tag4.focus(); //------> if we dont want focus command the line it will be automaticaly read option
    // tag4.style.pointerEvents(none)
  }
  let tag3 = document.createElement("ion-icon");
  tag3.setAttribute("name", "trash-outline");
  tag3.id = "delet";
  tag3.addEventListener("click", removinput);
  let tag4 = document.createElement("textarea");
  tag4.className = "text";

  console.log(tag1);
  console.log();
  container.appendChild(ans1);
  ans1.appendChild(cls1);
  cls1.appendChild(tag2);
  cls1.appendChild(tag3);
  ans1.appendChild(tag4);
  function removinput() {
    ans1.remove();
  }
}





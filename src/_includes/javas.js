
function myFunction() {
    var x = document.querySelector(".navMobile");
    let icona=document.querySelector(".icon")
    if (x.style.display === "block") {
      x.style.display = "none";
      icona.classList.remove("iconic");
      
    } else {
      x.style.display = "block";
      icona.classList.add("iconic")
    }
  } 
  
  
  const faqs=document.querySelectorAll(".faq");
  faqs.forEach((item)=>{
    item.addEventListener("click",()=>{
      item.classList.toggle("active");
      console.log("oldu")
    })
  })
  
  if(screen.width>700){
  const myAtropos = Atropos({
    el: '.my-atropos',
    activeOffset: 40,
    shadowScale: 1.02,
    rotateXMax:20,
    stretchX:40,
    onEnter() {
      console.log('Enter');
    },
    onLeave() {
      console.log('Leave');
    },
    onRotate(x, y) {
      console.log('Rotate', x, y);
    }
  });
  
  console.log("atropos")
  
  const mySecAtropos = Atropos({
    el: '.my-secatropos',
    activeOffset: 40,
    shadowScale: 0,
    onEnter() {
      console.log('Enter');
    },
    onLeave() {
      console.log('Leave');
    },
    onRotate(x, y) {
      console.log('Rotate', x, y);
    }
  });
  
  
  const mySecAtropos2 = Atropos({
    el: '.my-secatropos2',
    activeOffset: 40,
    shadowScale: 0,
    onEnter() {
      console.log('Enter');
    },
    onLeave() {
      console.log('Leave');
    },
    onRotate(x, y) {
      console.log('Rotate', x, y);
    }
  });
  
  const mySecAtropos3 = Atropos({
    el: '.my-secatropos3',
    activeOffset: 40,
    shadowScale: 0,
    onEnter() {
      console.log('Enter');
    },
    onLeave() {
      console.log('Leave');
    },
    onRotate(x, y) {
      console.log('Rotate', x, y);
    }
  });
  
  
  }
  
  
  
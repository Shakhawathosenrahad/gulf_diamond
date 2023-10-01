let log = console.log;

// navBar menu button
const menu = document.querySelectorAll("nav .fa-solid");
const links = document.querySelector("nav .links");


menu.forEach((btn, index) => {
    btn.onclick = () => {
        if(index === 1) {
            links.style.right = 0;
            setTimeout(() => {
            links.style.borderRadius = "3% 0 0 3%";
            }, 50);
        }
        else {
            links.style.right = "-300px";
            setTimeout(() => {
            links.style.borderRadius = "30% 0 0 50%";
            }, 50);
        }
    }
})

let rootStyle = document.querySelector(":root");
let nav = document.querySelector("nav");
let isScrolling = 0;

addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;

    if(isScrolling < scrollTop) {
        nav.classList.add("scrolling");
        scrollTop === 0 && (() => {
            nav.classList.remove("scrolling");
        })();
    }
    else {
        nav.classList.remove("scrolling");
    }
    isScrolling = scrollTop;
})

onload = () => {
    nav.classList.add("loaded");
}

// services

function swiper(wrapper) {
    let cardIndex = 0;
    this.props = {
      wrapper,
      carousel: wrapper.querySelector(".carousel"),
      cards: wrapper.querySelectorAll(".carousel-card"),
      dots: wrapper.querySelector(".carousel-container .dot-container"),
      arrows: document.querySelectorAll(".container > .fa-solid")
    }
    
    this.props.cards.forEach((card, index) => {
      if(index > this.props.cards.length - 2) return;
      let dot = document.createElement("label");
      this.props.dots.insertAdjacentElement("beforeend", dot);
    //   dot.addEventListener("click", () => {
    //     cardIndex = index;
    //     UpdateCarousel(index)
    //   })
    })
    this.props.dots.children[cardIndex].classList.add("active");
    this.props.cards[cardIndex + 1].classList.add("focus")
  
    this.props.arrows.forEach((arrow, index) => {
      arrow.onclick = () => {
        let total = responsive();
        if(index === 0) {
          cardIndex -= 1;
          if(cardIndex < 0) cardIndex = this.props.cards.length - total;
        }
        if(index === 1) {
            cardIndex += 1;
          if(cardIndex > this.props.cards.length - total) cardIndex = 0;
        }
        UpdateCarousel(cardIndex);
      }
    })
  
    UpdateCarousel = (dataindex) => {
      let total = responsive();
      this.props.carousel.style.transform = `translateX(-${dataindex * (100 / total)}%)`;
    
      for (let i = 0; i < this.props.dots.children.length; i++) {
        if(i === cardIndex) {
          this.props.dots.children[i].classList.add("active");
        }
        else {
          this.props.dots.children[i].classList.remove("active");
        }
      }
    }
  };
  
  
  const carouselWrapper = new swiper(document.querySelector(".carousel-wrapper"));


//   dukhan bank swipper

const dukhan_bank = document.querySelector(".dukhan_bank");
const carousel_card = dukhan_bank.querySelectorAll(".carousel-card");
const carousel = dukhan_bank.querySelector(".carousel");
const arrows = dukhan_bank.querySelectorAll(".chevron");
let cardIndex = 0;

arrows.forEach((btn, index) => {
    btn.onclick = () => {
        let total = responsive();
        if(index === 0) {
          cardIndex -= 1;
          if(cardIndex < 0) cardIndex = carousel_card.length - total;
        }
        if(index === 1) {
            cardIndex += 1;
          if(cardIndex > carousel_card.length - total) cardIndex = 0;
        }
        carousel.style.transform = `translateX(-${cardIndex * (100 / total)}%)`;
    }
})


const responsive = () => {
    let total = 3;
    if(innerWidth < 900 && innerWidth > 600) total = 2;
    else if(innerWidth <= 600) total = 1;
    return total;
  }
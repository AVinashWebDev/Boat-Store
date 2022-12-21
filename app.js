const wrapper = document.querySelector(".sliderWrapper");
//wrapper.style.transform = "translateX(-100vw)";
const products = [
  {
    id: 1,
    title: "Blaze",
    price: 1999,
    colors: [
      {
        code: "black",
        img: "./img/5.png",
      },
      {
        code: "darkblue",
        img: "./img/6.png",
      },
    ],
  },
  {
    id: 2,
    title: "Rockerz",
    price: 1999,
    colors: [
      {
        code: "blue",
        img: "./img/3.png",
      },
      {
        code: "green",
        img: "./img/4.png",
      },
    ],
  },
  {
    id: 3,
    title: "Lightening",
    price: 1999,
    colors: [
      {
        code: "black",
        img: "./img/1.png",
      },
      {
        code: "green",
        img: "./img/2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Martin",
    price: 1999,
    colors: [
      {
        code: "blue",
        img: "./img/7.png",
      },
      {
        code: "purple",
        img: "./img/8.png",
      },
    ],
  },
  {
    id: 5,
    title: "Sparks",
    price: 1999,
    colors: [
      {
        code: "lightblue",
        img: "./img/9.png",
      },
      {
        code: "gold",
        img: "./img/10.png",
      },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

const menuItem = document.querySelectorAll(".menuItem");
menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change chosen product
    chosenProduct = products[index];

    //change text of current product
    currentProductTitle.textContent = chosenProduct.title;
    //price
    currentProductPrice.textContent = chosenProduct.price + "₹";
    currentProductImg.src = chosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "gainsboro";
      size.style.color = "black";
    });

    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});

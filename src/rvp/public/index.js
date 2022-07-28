const imgArr = [
  { id: 2555, name: "Aaran Finch", company: "CEO XYZ" },
  { id: 2557, name: "Fisher Allen", company: "CEO XYZ" },
  { id: 2558, name: "Json Mom", company: "CEO XYZ" },
  { id: 2559, name: "Lee Arnish", company: "CEO XYZ" },
];

// Entre Carousel

const image = document.getElementById("img");
const cName = document.getElementById("name");
const company = document.getElementById("company");
let imgCount = 0;
const imgChangeHandler = () => {
  imgCount++;
  const path = `../images/entre/img${imgArr[imgCount].id}.png`;
  const getName = imgArr[imgCount].name;
  const getCompany = imgArr[imgCount].company;
  company.innerHTML = getCompany;
  cName.innerHTML = getName;
  image.src = path;

  if (imgCount == imgArr.length - 1) {
    imgCount = -1;
  }
};

setInterval(() => {
  imgChangeHandler();
}, 1500);

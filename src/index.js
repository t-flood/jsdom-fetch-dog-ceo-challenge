console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function () {
  loadImages();
  loadBreeds();
});

const loadImages = () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  return fetch(imgUrl)
    .then((response) => response.json())
    .then((results) => {
      results.message.forEach((image) => addImage(image));
    });
};

const addImage = (picUrl) => {
  const container = document.getElementById("dog-image-container");
  const newImage = document.createElement("img");
  newImage.src = picUrl;
  container.appendChild(newImage);
};

const loadBreeds = () => {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((results) => {
      const breeds = Object.keys(results.message);
      addBreeds(breeds);
    });
};

const addBreeds = (breeds) => {
  const ul = document.getElementById("dog-breeds");
  breeds.forEach((breed) => {
    const li = document.createElement("li");
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener("click", function (event) {
      event.target.style.color = "firebrick";
    });
  });
};

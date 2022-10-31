// Створити сторінку, що показує нумерований список пісень:
const list = document.getElementById("js-play-list");

const showList = (item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("play-list__item");
  listItem.innerText = `Author: ${item.author} \n Song: ${item.song}`;
  list.appendChild(listItem);
};

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

playList.forEach((item) => {
  showList(item);
});

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
const content = document.getElementById("js-wrapper");
const modalBtn = document.createElement("button");
const span = document.createElement("span");
span.textContent = "OPEN";
modalBtn.appendChild(span);
content.appendChild(modalBtn);
modalBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("modal");

  const span = document.createElement("span");
  span.textContent = "Noting to read here, just close it";
  div.appendChild(span);

  const innerBtn = document.createElement("button");
  const innerBtnText = document.createElement("span");
  innerBtnText.textContent = "CLOSE";
  innerBtn.appendChild(innerBtnText);
  div.appendChild(innerBtn);
  content.appendChild(div);
  modalBtn.disabled = true;
  innerBtn.addEventListener("click", () => {
    div.remove();
    modalBtn.disabled = false;
  });
});

// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
const trafficLights = document.getElementsByClassName("traffic__light");

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const trafficBtn = document.getElementById("btn");

trafficBtn.addEventListener("click", () => {
  if (redlight.classList.contains("traffic__red")) {
    redlight.classList.remove("traffic__red");
    yellowlight.classList.add("traffic__yellow");
  } else if (yellowlight.classList.contains("traffic__yellow")) {
    yellowlight.classList.remove("traffic__yellow");
    greenlight.classList.add("traffic__green");
  } else if (greenlight.classList.contains("traffic__green")) {
    greenlight.classList.remove("traffic__green");
    redlight.classList.add("traffic__red");
  }
});

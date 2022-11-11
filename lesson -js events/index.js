// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
// +
// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
document.body.addEventListener("keydown", (event) => {
  const resizer = document.createElement("div");
  if ((event.code === "KeyE" || event.code === "Comma") && event.ctrlKey) {
    event.returnValue = false;
    let elem = document.querySelector(".textarea");
    if (event.code === "KeyE" && elem.nodeName === "DIV") {
      let newEl = document.createElement("textarea");
      newEl.setAttribute("cols", 50);
      newEl.setAttribute("rows", 20);
      newEl.className = "textarea";
      newEl.textContent = elem.textContent;
      elem.replaceWith(newEl);
    } else if (event.code === "Comma" && elem.nodeName === "TEXTAREA") {
      let newEl = document.createElement("div");
      newEl.className = "textarea";
      newEl.textContent = elem.value;
      resizer.className = "textarea--resizer";

      const initResize = e => {
        e.preventDefault;
        window.addEventListener("mousemove", startResize);
        window.addEventListener("mouseup", stopResize);
      };

      const startResize = e => {
        newEl.style.width = (e.clientX - newEl.offsetLeft) + "px";
      };
      const stopResize = e => {
        window.removeEventListener('mousemove', startResize);
        window.removeEventListener('mouseup', stopResize);
      };

      resizer.addEventListener("mousedown", initResize);
      newEl.appendChild(resizer);
      elem.replaceWith(newEl);
    }
  }

});

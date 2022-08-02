var qustion = "Sayohat qilishga tayyormisiz?";

var elBody = document.querySelector("body")
var elContent = document.createElement("div");
var elTitle = document.createElement("h1");
var elText = document.createElement("p");
var elText2 = document.createElement("p");
var elText3 = document.createElement("p");
var elForm = document.createElement("form");
var elInput = document.createElement("input");
var elBtn = document.createElement("button");
var elBtnReset = document.createElement("button");
var answerClick = document.createElement("p");

var intro = confirm(qustion);

elBody.appendChild(elContent);
elContent.appendChild(elTitle);
elContent.appendChild(elText);
elContent.appendChild(elText2);
elContent.appendChild(elText3);
elContent.appendChild(elForm);
elForm.appendChild(elInput);
elForm.appendChild(elBtn);
elForm.appendChild(elBtnReset);

elContent.setAttribute("class", "content");
elTitle.setAttribute("class", "content__title");
elText.setAttribute("class", "content__paragraph");
elText2.setAttribute("class", "content__paragraph");
elText3.setAttribute("class", "content__paragraph");
elForm.setAttribute("class", "content__form");
elInput.setAttribute("class", "content__input")
elInput.setAttribute("type", "text");
elInput.setAttribute("placeholder", "Summani kiriting");
elInput.setAttribute("aria-label", "Sayohatga tayyormisiz");
elInput.setAttribute("name", "user-price");
elInput.setAttribute("autocomplete", "off");
elBtn.setAttribute("class", "content__button")
elBtn.setAttribute("type", "submit");
elBtnReset.setAttribute("class", "content__button")
elBtnReset.setAttribute("type", "reset");
elInput.setAttribute("required", "")
answerClick.setAttribute("class", "content__text content__text2");

elTitle.textContent = "Sayohat qiling";
elText.textContent = "Ekanom = 10.000 so`m dan 15000 gacha";
elText2.textContent = "Biznes = 15.001 so`m dan 25000 gacha";
elText3.textContent = "Vip = 25.001 so`m dan";
elBtn.textContent = "Yuborish";
elBtnReset.textContent = "Uchirsh";

elForm.addEventListener("submit", function (noreset) {
  noreset.preventDefault();


  elContent.appendChild(answerClick);

  if (elInput.value >= 10000 && elInput.value <= 15000) {
    answerClick.setAttribute("class", "content__text");
    answerClick.textContent = "Rahmat sizning klassingiz 'Ekanom'"
  }
  else if (elInput.value >= 15001 && elInput.value <= 25000) {
    answerClick.setAttribute("class", "content__text ");
    answerClick.textContent = "Rahmat sizning klassingiz 'Biznes'"
  }
  else if (elInput.value >= 25001) {
    answerClick.setAttribute("class", "content__text");
    answerClick.textContent = "Rahmat sizning klassingiz 'Vip'"
  }
  else if (isNaN(elInput.value)) {
    answerClick.setAttribute("class", "content__text content__text2");
    answerClick.textContent = "Summada faqat son qiymatlari ishlatilsin!!!"
  }
  else {
    answerClick.setAttribute("class", "content__text content__text2");
    answerClick.textContent = "Kechirasiz, minimal summa 10.000 so`m"
  }

  elInput.value = "";
})

elForm.addEventListener("reset", function (reset) {
  reset.preventDefault();

  answerClick.textContent = " ";
})

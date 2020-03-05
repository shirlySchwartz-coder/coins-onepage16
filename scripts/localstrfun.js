function localStoageCheck(now, coinId) {
  let tempLocal;
  if (localStorage.length === 0) {
    console.log("Local Storage Is Empty !");
  } else {
    console.log("Local Storage Is Not Empty !");
  }
}

function saveCoinsToLS(array) {
  let coinsLSArr = {
    name: "localSAllCoins",
    data: array
  };
  let coinsLSArr_str = JSON.stringify(coinsLSArr);

  localStorage.setItem("coinsLSArr", coinsLSArr_str);
}
//Get coins array From local storage
function getCoinsFromLS() {
  let arr = localStorage.getItem("coinsLSArr");
  let objArray = JSON.parse(arr);
  console.log(objArray);
  return objArray;
}

function addLocalStorage(name, data) {
  console.log(data + "saving to local storage");
  localStorage.setItem(name, data);
}

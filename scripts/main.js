var allCoins = [];
var default_page = "panel1";
var selected_coins = [];
var lsArray = false;
var liveBtn = $("live");

$(function() {
  localStorage.clear();
  allCoins = getData();
  $(document).ajaxStart(function() {
    $(".cover").show();
  });
  $(document).ajaxComplete(function() {
    $(".cover").hide();
  });

  if (!lsArray) {
    allCoins = getData();
  } 
  else {
    alert("Take from LS!");
    allCoins = getCoinsFromLS();
    printCards(allCoins);
  }
});

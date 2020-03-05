function getData() {
  //$(".cover").show();
  $.ajax({
    type: "GET",
    url: "https://api.coingecko.com/api/v3/coins/list",
    success: function(data) {
      if (data.length > 0) {
        $(".cover").hide();

        allCoins = data;
        if (allCoins.length > 0) {
          console.log(allCoins);
          printCards(allCoins);
          saveCoinsToLS(allCoins);
          lsArray = true;
        }
      }
    },
    error: function() {
      alert("error!");
    }
  });
}

function getInfoOnCoin(wrepper, coinId, time) {
  let now = new Date();
  localStoageCheck(now, coinId);
  console.log(time, now);
  $.ajax({
    type: "GET",
    url: `https://api.coingecko.com/api/v3/coins/${coinId}`,
    success: function(infoCoin) {
      console.log(infoCoin);
      let localStorageObj = {
        res: infoCoin,
        time: time.toString()
      };
      addLocalStorage(coinId, JSON.stringify(localStorageObj));
      printInfoOnCoin(wrepper, infoCoin, time);
    },
    error: function() {
      alert("error!");
    }
  });
}


function getSearchCoin() {
    var searchcoin = {};
    let search = $("#search").val();
    if (search.length < 3) {
      alert("Search Phrase too Short...");
      return;
    }
    $.ajax({
      type: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${search}`,
      success: function(searchcoin) {
        $("#card-wrapper").html("");
        console.log(searchcoin);
        createCard(searchcoin);
      }
    });
  }
function createCard(coin) {
  var div_card = $("#card-wrapper");
  var card = $(
    `<div class='col-md-4 card'  cardkey= ${coin.id} id=${coin.id}></div>`
  );
  //console.log(coin.id);

  var body = $('<div class="card-body"></div>');
  var first_row = $('<div class="row"></div>');

  var symbol = $(`<div class="card-title col" ><h4>${coin.symbol}<h4></div>`);

  var label_switch = $('<label class="switch" ></label>');
  var input_switch = $(
    `<input type="checkbox" name="sliderCheck" id=${coin.id} >`
  );
  var span_switch = $('<span class="slider round"></span>');

  $(label_switch).append(input_switch);
  $(label_switch).append(span_switch);

  $(input_switch).on("change", function(e) {
    let input_checked = e.target;
    console.log(input_checked);
    if ($(input_checked).is(":checked")) {
      $(input_checked).addClass("active");
      if (selected_coins.length > 4) {
        //  alert("more then 5!!!");
        createModal(selected_coins, event.target);
      } else {
        selected_coins.push(coin.id);
        console.log(selected_coins);
      }
    } else {
      if ($(input_checked).is(":checked", false)) {
        $(input_checked).removeClass("active");
        console.log(selected_coins);
      }
    }
  });

  var name = $(`<div class="card-text">Name : ${coin.name}</div>`);
  var id = $(`<div class="card-text">Id : ${coin.id}</div><br>`);

  var infobtn = $(
    `<button class="btn btn-primary collapsible"  id="info_btn">More Info</button>`
  );
  var infoWrapper = $(`<div class="content"></div>`);
  infobtn.on("click", function() {
    var time = new Date();
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      console.log("hide");
    } else {
      content.style.display = "block";
      console.log("show");
      console.log(time);
      getInfoOnCoin(infoWrapper, coin.id, time);
    }
  });

  $(first_row)
    .append(symbol)
    .append(label_switch);
  $(body)
    .append(first_row)
    .append(name)
    .append(id)
    .append(infobtn)
    .append(infoWrapper);
  $(card).append(body);
  div_card.append(card);
}
function printCards(cardData) {
  for (let i = 0; i < 90; i++) {
    createCard(cardData[i]);
  }
}

function printInfoOnCoin(wrepper, coinInfo, time) {
    wrepper.html("");
    var coin_img = $(
      `<img src="${coinInfo.image.large}" id="coin_img" srcset="">`
    );
    var coin_vs_USD = $(
      `<div><label>USD : </label> ${coinInfo.market_data.current_price.usd} <b>$</b> </div>`
    );
    var coin_vs_EUR = $(
      `<div><label>EUR : </label> ${coinInfo.market_data.current_price.eur} <b>€</b> </div>`
    );
    var coin_vs_ILS = $(
      `<div><label>ILS : </label> ${coinInfo.market_data.current_price.ils} <b>₪</b></div>`
    );
  
    wrepper
      .append(coin_img)
      .append(coin_vs_USD)
      .append(coin_vs_EUR)
      .append(coin_vs_ILS);
    console.log(time.toUTCString());
  }

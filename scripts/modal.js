function createModal(array, checkbox) {
  //let content="";
  let temp = "";
  var cancel_arr = [];
  $(checkbox).prop("checked", !$(checkbox).prop("checked"));
  let div_modal = $(
    `<div class="modal" tabindex="-1" role="dialog" id="modalwindow"></div>`
  );
  let modal_dialog = $(`<div class="modal-dialog" role="document"></div>`);
  let modal_content = $(`<div class="modal-content"><div>`);

  let modal_header = $(` <div class="modal-header">
                              <h5 class="modal-title">Selected Coins - Please select which coin to remove ! </h5>
                            </div>`);
  let modal_close = $(`<button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true">&times;
                            </span>
                          </button>`);

  for (let i = 0; i < 5; i++) {
    //console.log(selected_coins[i]);
    temp += `<input type="checkbox" id="${selected_coins[i]}">${selected_coins[i]} </input>`;

    console.log(temp);
    if ($(temp).is(":checked")) {
      $(input_checked).removeClass("active");
      cancel_arr = $(input_checked).id;
      console.log("1: " + cancel_arr);
      //selected_coins.splice(selected_coins.indexOf(temp.id),1);
      //console.log(selected_coins);
    }
  }
  let modal_body = $(`<div class="modal-body"><p>${temp} </p></div>`);
  let modal_footer = $(`<div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" id="closemodal" onclick="modalInputs()">
                              Close
                            </button>
                            <button type="button" class="btn btn-primary" id="save_btn" onclick="saveNewArr(cancel_arr)">
                              Save changes
                            </button>
                          </div>`);

  $(modal_header).append(modal_close);
  $(modal_content)
    .append(modal_header)
    .append(modal_body)
    .append(modal_footer);
  $(div_modal)
    .append(modal_dialog)
    .append(modal_content);

  $("#modal").append(div_modal);
  $(".modal").show();
  $("#modal").show();
  addLocalStorage("SelectedCoins", selected_coins);
}

///modal options
function modalInputs() {
  $("#closemodal").click(function() {
    $("#modalwindow").modal("hide");
  });
}

function saveNewArr() {
  save_btn.addEventListner("click", function() {
    console.log("save :" + cancel_arr);
  });
}

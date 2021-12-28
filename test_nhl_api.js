$(document).ready(function () {
  $("#submit").click(function () {
    var dateValue = $("#dateSelect").val();
    $nhlLink = "https://www.nhl.com/gamecenter/ + $dateValue";
    $.ajax({
      url: "https://statsapi.web.nhl.com/api/v1/schedule?date=" + dateValue,
      success: function (data) {
        $("#schedule-container").text(data.copyright);
        dates.forEach(function (ele) {
          let card = $($("#schedule-container").html());
          card.find(".data.copyright").attr(value, ele);
          card.find(".date.games");
          //...fill all data in template like above.
          //
          // let card = $($("#schedule-container").html()); // append the each card to main div.
        }, $(".card-list"));
      },
      error: function (err) {
        alert("Uh Oh. something's gone wrong!");
      },
    });
  });
});

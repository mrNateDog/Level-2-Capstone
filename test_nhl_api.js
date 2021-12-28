//DATE PICKER
$(document).ready(function () {
  $("#resetButton").click(function () {
    $(".card-deck").empty();
  });
  $("#submit").click(function () {
    var dateValue = $("#dateSelect").val();
    $nhlLink = "https://www.nhl.com/gamecenter/ + $dateValue";

    fetch("https://statsapi.web.nhl.com/api/v1/schedule?date=" + dateValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // $("#schedule-container").text(data.copyright);
        let cardCount = data.totalGames;
        let x = 0;
        while (x < cardCount) {
          data.dates.forEach((date) => {
            date.games.forEach((game) => {
              // $("#dateHeader").append(dateValue);
              // $("#schedule-container" ).append("<br/>");
              // $("#schedule-container" ).append("<br/>");
              $("#schedule-container").append(game.teams.away.team.name);
              $("#schedule-container").append(" <strong> vs </strong>");
              $("#schedule-container").append(game.teams.home.team.name);
              $("#schedule-container").append("<br/>");
              $("#schedule-container").append("<br/>");
              x++;
            });
          });
        }
      });
  });
});

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
        data.dates.forEach((date) => {
          date.games.forEach((game) => {
            console.count(game); //determined the number of games
            let cardCount = 0;
            $("#dateHeader").append("Games for " + dateValue);
            $("#schedule-container").append("<br/>");
            $("#schedule-container").append("<br/>");
            $("#schedule-container").append(game.teams.away.team.name);
            $("#schedule-container").append(" <strong> vs </strong>");
            $("#schedule-container").append(game.teams.home.team.name);
            $("#schedule-container").append("<br/>");
            cardCount++;
          });
        });
      });
  });
});

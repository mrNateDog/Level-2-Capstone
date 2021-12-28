//DATE PICKER
$(document).ready(function () {
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
            let cardCount = 0;
            $("#schedule-container" + cardCount).append(
              game.teams.away.team.name
            );
            $("#schedule-container" + cardCount).append(" <b> vs </b>");
            $("#schedule-container" + cardCount).append(
              game.teams.home.team.name
            );
            $("#schedule-container" + cardCount).append("<br/>");
            cardCount++;
          });
        });
      });
  });
});

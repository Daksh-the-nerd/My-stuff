function addUser()
{
    var player_2_username = document.getElementById("player2_name_input").value;
    var player_1_username = document.getElementById("player1_name_input").value;

    localStorage.setItem("1st_username",player_1_username);
    localStorage.setItem("2nd_username",player_2_username);

    window.location = "game_page.html"
}





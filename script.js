$("#big").hide();
$("#full").hide();
$("#the").hide();
$("#friend").hide();

$("#click").click(function() {
    var year = parseInt($("#birthYear").val());
    var firstInitial = $("#initial").val();
    console.log(parseInt($("#birthYear").val()));
    console.log($("#birthYear").val());
    if (year === "" || firstInitial === "") {

    } else if (year <= 1999 && "A".charCodeAt(0) <= firstInitial.toUpperCase().charCodeAt(0) && firstInitial.toUpperCase().charCodeAt(0) <= "M".charCodeAt(0)) {
        $("#big").hide();
        $("#full").show();
        $("#the").hide();
        $("#friend").hide();
        $("#result").text("You are Full House");
        console.log(1);
    } else if (year <= 1999 && "N".charCodeAt(0) <= firstInitial.toUpperCase().charCodeAt(0) && firstInitial.toUpperCase().charCodeAt(0) <= "Z".charCodeAt(0)) {
        $("#big").hide();
        $("#full").hide();
        $("#the").show();
        $("#friend").hide();
        $("#result").text("You are Full House");
    } else if (year >= 2000 && "A".charCodeAt(0) <= firstInitial.toUpperCase().charCodeAt(0) && firstInitial.toUpperCase().charCodeAt(0) <= "M".charCodeAt(0)) {
        $("#big").hide();
        $("#full").hide();
        $("#the").hide();
        $("#friend").show();
    } else if (year >= 2000 && "N".charCodeAt(0) <= firstInitial.toUpperCase().charCodeAt(0) && firstInitial.toUpperCase().charCodeAt(0) <= "Z".charCodeAt(0)) {
        $("#big").show();
        $("#full").hide();
        $("#the").hide();
        $("#friend").hide();
    }

});
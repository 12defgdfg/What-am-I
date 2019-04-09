$("#big").hide();
$("#full").hide();

$("#click").click(function() {
    var year = $("#birthYear").val();
    var firstInitial = $("#initial").val();
    //console.log("N".charChodeAt(0) <= firstInitial.toUpperCase().charChodeAt(0));
    //console.log(firstInitial.toUpperCase().charChodeAt(0)  <= "Z".charChodeAt(0));
    if (year === "" || firstInitial === "") {

    } else if (year <= 1999 || firstInitial <= 15) {
        $("#full").show();
        $("#big").hide();
    } else if (year >= 2000 || "N".charChodeAt(0) <= firstInitial.toUpperCase().charChodeAt(0) && firstInitial.toUpperCase().charChodeAt(0)  <= "Z".charChodeAt(0)) {
        $("#big").show();
        $("#full").hide();
    }
});
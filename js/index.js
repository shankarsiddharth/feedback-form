$(document).ready(function(){
    $("#load").click(function(){
        $.get("https://shankarsiddharth.github.io/sample_data.json", function(data, status){
        //alert("Data 1: " + data.review1 + "\nData 2: " + data.review2 + "\nStatus: " + status);
        if(status == 'success'){
            $("#review1").text(data.review1);
            $("#review2").text(data.review2);
        }else{
            console.log("GET request failed.");
        }
    });
    });
    //http://requestb.in/1a969ou1
    $("#submit").click(function(){
        var review1 = $("#review1").val();
        var review2 = $("#review2").val();
        //alert("Data 1: " + review1 + "\nData 2: " + review2);
        var review = {
            "review1": review1,
            "review2": review2
        };
        $.post("https://requestb.in/1a969ou1", review ,function(response, status){
            console.log("Status: " + status);
    });
    });
});
$(document).ready(function(){
    $("#add").on('click', function(){
        clickedAdd();
    });
    $("#subtract").on('click', function(){
        clickedSubtract();
    });
    $("#multiply").on('click', function(){
        clickedMultiply();
    });
    $("#divide").on('click', function(){
        clickedDivide();
    });
});



function clickedAdd(){
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            clickPostDataAdd();
        }
    })
}

function clickedSubtract(){
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            clickPostDataSubtract();
        }
    })
}

function clickedDivide(){
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            clickPostDataDivide();
        }
    })
}

function clickedMultiply(){
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            clickPostDataMultiply();
        }
    })
}

function clickPostDataAdd() {

    var inputOne = {};
    var inputTwo = {};

    $.each($("#inputValueOne").serializeArray(), function (i, field) {
        inputOne = field.value;
    });

    $("#inputValueOne").find("input[type=number]").val("");

    $.each($("#inputValueTwo").serializeArray(), function (i, field) {
        inputTwo = field.value;
    });

    $("#inputValueTwo").find("input[type=number]").val("");

    $.ajax({
        type: "POST",
        url: "/data",
        data: inputOne, inputTwo,

        beforeSend: function () {
            var x = parseInt(inputOne);
            var y = parseInt(inputTwo);
            $("#answer").text(x + y);
            //$("#answer").text(x - y);
            //$("#answer").text(x / y);
            //$("#answer").text(x * y);

        },
        success: function () {

        }
    });

}

function clickPostDataSubtract() {

    var inputOne = {};
    var inputTwo = {};

    $.each($("#inputValueOne").serializeArray(), function (i, field) {
        inputOne = field.value;
    });

    $("#inputValueOne").find("input[type=number]").val("");

    $.each($("#inputValueTwo").serializeArray(), function (i, field) {
        inputTwo = field.value;
    });

    $("#inputValueTwo").find("input[type=number]").val("");

    $.ajax({
        type: "POST",
        url: "/data",
        data: inputOne, inputTwo,

        beforeSend: function () {
            var x = parseInt(inputOne);
            var y = parseInt(inputTwo);
            //$("#answer").text(x + y);
            $("#answer").text(x - y);
            //$("#answer").text(x / y);
            //$("#answer").text(x * y);

        },
        success: function () {

        }
    });

}

function clickPostDataMultiply() {

    var inputOne = {};
    var inputTwo = {};

    $.each($("#inputValueOne").serializeArray(), function (i, field) {
        inputOne = field.value;
    });

    $("#inputValueOne").find("input[type=number]").val("");

    $.each($("#inputValueTwo").serializeArray(), function (i, field) {
        inputTwo = field.value;
    });

    $("#inputValueTwo").find("input[type=number]").val("");

    $.ajax({
        type: "POST",
        url: "/data",
        data: inputOne, inputTwo,

        beforeSend: function () {
            var x = parseInt(inputOne);
            var y = parseInt(inputTwo);
            //$("#answer").text(x + y);
            //$("#answer").text(x - y);
            //$("#answer").text(x / y);
            $("#answer").text(x * y);

        },
        success: function () {

        }
    });

}

function clickPostDataDivide() {

    var inputOne = {};
    var inputTwo = {};

    $.each($("#inputValueOne").serializeArray(), function (i, field) {
        inputOne = field.value;
    });

    $("#inputValueOne").find("input[type=number]").val("");

    $.each($("#inputValueTwo").serializeArray(), function (i, field) {
        inputTwo = field.value;
    });

    $("#inputValueTwo").find("input[type=number]").val("");

    $.ajax({
        type: "POST",
        url: "/data",
        data: inputOne, inputTwo,

        beforeSend: function () {
            var x = parseInt(inputOne);
            var y = parseInt(inputTwo);
            //$("#answer").text(x + y);
            //$("#answer").text(x - y);
            $("#answer").text(x / y);
            //$("#answer").text(x * y);

        },
        success: function () {

        }
    });

}
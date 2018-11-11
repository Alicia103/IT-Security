function addComment() {
    // Get the input value
    var value = $('#inp').val();

    // Escaped comment
    var ar = [];
    ar.push(value);
    var fixedValue = "";
    $(ar).each(function (i, elm) {
        var input = elm;
        fixedValue += "<li>" + $("<div>").text(input).html() + "</li>\n";
    });
    $('#rightDiv').append("<ul style='list-style-type: none' id='newRightDiv'></ul>");
    $("#newRightDiv").append(fixedValue);
}

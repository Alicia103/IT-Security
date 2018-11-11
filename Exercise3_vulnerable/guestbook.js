function addComment() {
    // Get the input value
    var value = $('#inp').val();

    // This is the vulnerable comment
    $('#falseDiv').append("<ul style='list-style-type: none' id='newFalseList'></ul>");
    $("#newFalseList").append("<li>" + value + "</li>");
}

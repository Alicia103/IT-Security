function addComment() {
    
    var value = $('#inp').val();

    $('#falseDiv').append("<ul style='list-style-type: none' id='newFalseList'></ul>");
    $("#newFalseList").append("<li>" + value + "</li>");
}

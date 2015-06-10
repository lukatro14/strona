$(document).ready(function () {
     $.get("api/posts.json", function (data) {
         var source = $("#entry-template").html();
         var template = Handlebars.compile(source);
         $.each(data, function (index, value) {
             var html = template(value);
             $('#messages').append(html);
         });
     });
 })
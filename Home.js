$(document).ready(function () {
    $(".login_button").click(function () {
        var isValid = true;

        //validate the username
        if ($(".user_name").val() == " ") {
            $(".user_error").next().text("Please enter a username.");
            isValid = false;
        }
        else {
            $(".user_name").next().text("");
        }

        //validate the password
        if ($(".pass_word").val() == " ") {
            $(".pass_error").next().text("Please enter a password.");
            isValid = false;
        }
        else {
            $(".pass_word").next().text(" ");
        }

        //submit the form if all entries are valid
        if (isValid) {
            $(".login_form").submit();
        }
    });
});



function(error, login_form) {
        
    // name attrib of the field
    var n = login_form.user_name("name");
 
    if (n == "user_name")
        login_form.user_name("user_error", "Please re-enter your username");
    else if (n == "pass_word")
        login_form.pass_word("pass_error", "Please re-enter your password");	
    
}



$(function() {

    var newHash      = "",
        $mainContent = $("#main-content"),
        $pageWrap    = $("#page-wrap"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $("nav").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        $("nav a[href='"+newHash+"']").addClass("current");
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});





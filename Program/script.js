$(document).ready(function () {
    // Event handler for day selection
    $(".day").click(function () {
        // Remove active class from all days and programs
        $(".day").removeClass("active");
        $(".program").removeClass("active");

        // Add active class to the selected day and its program
        $(this).addClass("active");
        $("#program" + $(this).attr("id").substring(3)).addClass("active");
    });
});

/**
 * Created by umbopepato on 09/04/2017.
 */

$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: false,
        fixedElements: '.fab'
    });
});

function nextPage() {
    $.fn.fullpage.moveSectionDown();
}
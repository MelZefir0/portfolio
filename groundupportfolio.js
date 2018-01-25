var w = $(window),
    b = $('#bkgd, #bkgd2');

var fixbkgd = function(){
    var x = w.width() + 'px ',
        y = w.height() + 'px ';
    b.css({
        'border-width' : y + x
    });
}
    
w.resize(fixbkgd);
fixbkgd();
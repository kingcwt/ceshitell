
var blufn=function () {
    // $(document).height() ==>document.documentElement.offsetHeight  =>整个文档的高度
    // $(window).height() ==>document.documentElement.clientHeight  => 可见区域的高度
    var h = $(document).height()-$(window).height();
    console.log(h);
    $(document).scrollTop(h);
};
$(":input").on('blur', blufn);
$(".cot").on('blur', blufn);

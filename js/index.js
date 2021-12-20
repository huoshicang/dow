$(function() {
    var spans = $('span');
    var divs = $("li div");
    $('#content').html(`<object type="text/html" data=时钟/index.html width="100%" height="100%"></object>`);

    $.each((spans), function (index_span, span) {
        span.addEventListener('click',()=>{
            $.each((divs), function (index_div, div) {
                if (index_div === index_span){
                   div.classList.add('active');
                }else {
                    div.classList.remove('active');
                }
            });
            $.each((spans), function (index, span) {
                span.classList.remove('active');
            });
            span.classList.add('active');
        });
    });

    var documentation = $('.documentation');
    console.log("文档是自己整理的，但不一定会，如果有错误的地方可以发邮件联系：2717334980@qq.com");
    documentation.each(function(indexInArray, valueOfElement) {
        var href;
        $(valueOfElement).click(function(e) {
            href = valueOfElement.title
            $('#content').html(`<object type="text/html" data=${href} width="100%" height="100%"></object>`);
            var file_url = href.replace(/html/g, 'md');
            $('.nav a').attr('href', file_url);
        });
    });
});

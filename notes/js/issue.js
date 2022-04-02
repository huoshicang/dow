$(function() {
    $.each($('.panel'), function(indexInArray, item) {
        item.addEventListener('click', () => {
            $.each($('.panel'), function(indexInArray, a) {
                a.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
    // $('.panel').click(function(e) {
    //     console.log('ss');
    // });
    // $('.panmel').each(function(index, element) {
    //     element.click(function(e) {
    //         console.log('ss');
    //     })
    // });
});

// const panels = document.querySelectorAll('.panel');
// panels.forEach((item) => {
//     item.addEventListener('click', () => {
//         panels.forEach((e) => {
//             e.classList.remove('active');
//         });
//         item.classList.add('active');
//     });
// });
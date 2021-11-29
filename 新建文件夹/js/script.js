var lis = document.querySelectorAll('.headers_li');

lis.forEach(li => {
    li.addEventListener('click', () => {
        lis.forEach(li => {
            li.classList.remove('active');
        });
        li.classList.add('active');
    });
});


var lun = document.querySelector('.lun');
window.addEventListener('DOMContentLoaded', function () {
    const times = document.getElementById('close');
    const modalForm = document.getElementsByClassName('container')[0];

    times.addEventListener('click', function (e) {
        modalForm.classList.add('d-none');
    });
});

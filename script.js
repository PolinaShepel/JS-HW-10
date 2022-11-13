const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', event => {

    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');

    const dataName = event.target.dataset.name;
    document.querySelector('.visible-text').classList.remove('visible-text');

    document.querySelector(`.text-hide[data-name='${dataName}']`).classList.add('visible-text');
});
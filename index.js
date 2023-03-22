const windowLoaded = () => {
    document.addEventListener('click', handleClick)
}

const handleClick = (e) => {
    e.preventDefault()
    switch (e.target.dataset.name) {
        case 'Home':
            window.scrollTo({ block: "start", inline: "nearest", top: document.querySelector('.page__main').offsetTop, behavior: 'smooth' });
            break;
        case 'About':
            window.scrollTo({ block: "start", inline: "nearest", top: document.querySelector('.page__about').offsetTop, behavior: 'smooth' });
            break;
        case 'Contact':
            window.scrollTo({ block: "start", inline: "nearest", top: document.querySelector('.page__contact').offsetTop, behavior: 'smooth' });
            break;
    };

    if (e.target.dataset.name === 'All' || e.target.dataset.name === 'UI' || e.target.dataset.name === 'UX' || e.target.dataset.name === 'Design') {
        document.querySelector('.button_active').classList.remove('button_active')
        e.target.classList.add('button_active')

        const all = document.querySelectorAll('.items-works__item')

        switch (e.target.dataset.name) {
            case 'All':
                all.forEach((el) => el.style.display = 'block')
                break;
            case 'UI':
                const el1 = document.querySelector('[data-work-type="ui"]');
                all.forEach((el) => el.style.display = 'none')
                el1.style.display = 'block'
                break;
            case 'UX':
                const el2 = document.querySelector('[data-work-type="ux"]');
                all.forEach((el) => el.style.display = 'none')
                el2.style.display = 'block'
                break;
            case 'Design':
                const el3 = document.querySelector('[data-work-type="design"]');
                all.forEach((el) => el.style.display = 'none')
                el3.style.display = 'block'
                break;
        };
    }
}

window.addEventListener('load', windowLoaded())
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
    }
}

window.addEventListener('load', windowLoaded())
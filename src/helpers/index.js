const createElWithClass = (tag, className, txt = null) => {
    const el = document.createElement(tag);
    el.classList.add(className);
    el.textContent ? txt : '';
    return el;
}

export { createElWithClass }
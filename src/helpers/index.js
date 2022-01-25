//add a class or a set of classes to an element
const _addClass = (el, className) => {
    if (Array.isArray(className)) {
        el.classList.add(...className)
    } else {
        el.classList.add(className)
    }
}
//append multiple children
const appendChildren = (parent, children) => children.forEach(child => parent.append(child));
const createEl = (tag, className, txt = null) => {
    const el = document.createElement(tag);
    _addClass(el, className);
    el.textContent = txt ? txt : '';
    return el;
}

export { createEl, appendChildren }
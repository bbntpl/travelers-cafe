//add a class or a set of classes to an element
const _addClass = (el, className) => {
    if (Array.isArray(className)) {
        el.classList.add(...className)
    } else {
        el.classList.add(className)
    }
}
//append multiple children
const appendChildren = (parent, children) => { 
    return children.forEach(child => parent.append(child));
};
const createEl = (tag, className, txt = null) => {
    const el = document.createElement(tag);
    _addClass(el, className);
    el.textContent = txt ? txt : '';
    return el;
}
const importAll = (dir) => dir.map(file => file.keys().map(file));
const importAllModules = (context, reg) => {
    const map = {}
    let tmp = {}
    for (let key of context.keys()) {
        const keyArr = key.split('/')
        keyArr.shift()
        map[keyArr.join('.').replace(reg, '')] = context(key).default
    }
    console.log(map);
    for (let key in map) {
        tmp = {
            ...tmp,
            ...map[key]
        }
    }
    return tmp
}

export { createEl, appendChildren, importAllModules, importAll }
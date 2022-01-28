import { createEl, appendChildren, importAll } from '../helpers';
import data from '../database/data.yaml';

const dirFoods = '../assets/images/foods/'
const regExt = /\.svg|png|jpg$/;

//import images from the target directiories
const breakfasts = require.context(`../assets/images/foods/breakfasts`, true, /\.svg|png|jpg$/);
const drinks = require.context(`../assets/images/foods/drinks`, true, /\.svg|png|jpg$/);
const salads = require.context(`../assets/images/foods/salads`, true, /\.svg|png|jpg$/);
const sandwiches = require.context(`../assets/images/foods/sandwiches`, true, /\.svg|png|jpg$/);
const soups = require.context(`../assets/images/foods/soups`, true, /\.svg|png|jpg$/);
const specials = require.context(`../assets/images/foods/specials`, true, /\.svg|png|jpg$/);

const MenuPage = (() => {
    //menu data
    const menuData = data.menu;
    const menuProduct = data.menu.product;
    const menuFoods = data.menu.categories;

    const menuContexts = [breakfasts, drinks, salads, sandwiches, soups, specials];

    //map the clustered imported contexts that contain images
    const menuImages = importAll(menuContexts);

    //create an item in menu
    const _createMenuProduct = (img, title) => {
        const productWrapper = createEl('div', 'menu-list__product');
        const productPreviewWrapper = createEl('div', 'menu-product__preview-wrapper');
        const productPreview = createEl('img', 'menu-product__preview');
        const menuProductInfo = createEl('div', 'menu-product__info-container');
        const menuInfoUpperSection = createEl('span', 'menu-product__info-upper');
        const menuProductName = createEl('h5', 'menu-product__name', title);
        const menuProductPrice = createEl('h5', 'menu-product__price', menuProduct.price);
        const menuInfoLowerSection = createEl('div', 'menu-product__info-lower');
        const menuProductDesc = createEl('p', 'menu-product__desc', menuProduct.desc);

        productPreview.src = img;

        appendChildren(productWrapper, [productPreviewWrapper, menuProductInfo]);
        productPreviewWrapper.append(productPreview);
        appendChildren(menuProductInfo, [menuInfoUpperSection, menuInfoLowerSection]);
        appendChildren(menuInfoUpperSection, [menuProductName, menuProductPrice]);
        appendChildren(menuInfoLowerSection, [menuProductDesc]);

        return productWrapper;
    }

    //create a component of elements that groups the menu item
    const _createFoodSection = (dir, dirIndex) => {
        const menuFoodSection = createEl('div', 'menu-list__food-section');
        const menuFoodHeader = createEl('div', 'menu-list__header', menuFoods[dirIndex]);
        const menuProductList = createEl('div', 'menu-list__products');
        appendChildren(menuFoodSection, [menuFoodHeader, menuProductList]);
        dir.forEach((img, imgIndex) => {
            const newProduct = _createMenuProduct(img, `${menuFoods[dirIndex]} ${imgIndex+1}`);
            menuProductList.append(newProduct)
        });
        return menuFoodSection;
    }
    const _createFoodLists = (array) => {
        const menuListWrapper = createEl('div', 'menu__list');
        array.forEach((dir, i) => menuListWrapper.append(_createFoodSection(dir, i)));
        return menuListWrapper;
    }
    const _createMenu = () => {
        const menu = createEl('div', 'menu');
        const menuHeader = createEl('h1', 'menu__header', menuData.header);
        appendChildren(menu, [menuHeader, _createFoodLists(menuImages)]);
        return menu;
    }
    const initialize = () => {
        const menuOverlay = createEl('div', ['module__menu-page', 'center']);
        const menuWrapper = createEl('div', ['center', 'o-wrapper']);
        menuOverlay.append(menuWrapper);
        menuWrapper.append(_createMenu());
        return menuOverlay;
    }
    return { initialize }
})();

export default MenuPage;
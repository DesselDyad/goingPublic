//global
const user = require('../mongo/db/global/user');
const role = require('../mongo/db/global/role');
const global = require('../mongo/db/global/global');
const newsletter = require('../mongo/db/global/newsletter');
const crumbs = require('../json/json_modules/crumbs');
const css_loader = require('./css_loader');
const js_loader = require('./js_loader');
//fish
const fish = require('../mongo/db/fish/fish');
const fish_species = require('../mongo/db/fish/fish_species');
const locations = require('../mongo/db/fish/location');
//zombie
const zombie = require('../JSON/json_modules/zombie');
const forum = require('../mongo/db/zombie/forum');
//svendeprøve
const svende_user = require('../mongo/db/svende/user');
const contact_info = require('../mongo/db/svende/contact_info');
const contact_message = require('../mongo/db/svende/contact_message');
const categories = require('../mongo/db/svende/categories');
const articles = require('../mongo/db/svende/article');
const advertisements = require('../mongo/db/svende/advertisements');

module.exports = {
    /**
     * Created a role_id variable for EJS files to easily check user role (editor or admin)
     */
    populateReqUser: _user => {
        return new Promise( async(resolve, reject) => {
            try {
                let _role = await user.getUserRole(_user.role)
                resolve(_role);
  _          }
            catch (e) {
                reject(e);
            }
        })
    },
    home_data : ip => {
        return new Promise(async (resolve, reject) => {
            try {
                let obj = {};
                //page ressources
                //stat data
                obj.global = await global.update(ip);
                resolve(obj);
            }
            catch (e) {
                reject(e);
            }
        })
    },
    fishData : ip => {
        return new Promise(async (resolve, reject) => {
            try {
                let obj = {};
                //page ressources
                //header data
                obj.latest = await fish.getLatest();
                obj.fish_species = await fish_species.getAll();
                obj.locations = await locations.getAll();
                obj.dates = await fish.getDistinctDates();
                obj.records = await fish.getFishRecordsData();
                //stat data
                obj.global = await global.update(ip);
                //page background data
                obj.sheets = await css_loader.read_css_sheets();
                obj.scripts = await js_loader.read_scripts();
                obj.crumbs = await crumbs.getAll();
                //admin resources (do i even need these here? tbd)
                obj.users = await user.getAll();
                obj.subscribers = await newsletter.getAll();
                obj.roles = await role.getAll();
                resolve(obj);
            }
            catch (e) {
                reject(e);
            }
        })
    },
    fishAdmin_data : () => {
        return new Promise(async (resolve, reject) => {
            try {
                let obj = {};
                obj.fish_species = await fish_species.getAll();
                obj.fishes = await fish.getAll();
                obj.locations = await locations.getAll();
                obj.fishers = await user.getAll();
                obj.dates = await fish.getDistinctDates();
                //page ressources
                obj.sheets = await css_loader.read_css_sheets();
                obj.scripts = await js_loader.read_scripts();
                obj.crumbs = await crumbs.getAll();
                //admin resources
                obj.users = await user.getAll();
                obj.subscribers = await newsletter.getAll();
                obj.roles = await role.getAll();
                resolve(obj);
            }
            catch (e) {
                reject(e);
            }
        })
    },
    zombieData : ip => {
        return new Promise(async (resolve, reject) => {
            try {
                let obj = {};
                //global ressources
                obj.global = await global.update(ip);
                obj.sheets = await css_loader.read_css_sheets();
                obj.scripts = await js_loader.read_scripts();
                obj.crumbs = await crumbs.getAll();
                //page ressources
                obj.zombie = await zombie.getAll();
                obj.forums = await forum.getAll();
                //admin resources
                obj.users = await user.getAll();
                obj.subscribers = await newsletter.getAll();
                obj.roles = await role.getAll();
                resolve(obj);
            }
            catch (e) {
                reject(e);
            }
        })
    },
    zombieAdmin_data : () => {
        return new Promise(async (resolve, reject) => {
            try {
                let obj = {};
                //page ressources
                obj.sheets = await css_loader.read_css_sheets();
                obj.scripts = await js_loader.read_scripts();
                obj.crumbs = await crumbs.getAll();
                obj.zombie = await zombie.getAll();
                //page ressources
                obj.zombie = await zombie.getAll();
                obj.forums = await forum.getAll();
                //admin resources
                obj.users = await user.getAll();
                obj.subscribers = await newsletter.getAll();
                obj.roles = await role.getAll();
                resolve(obj);
            }
            catch (e) {
                reject(e);
            }
        })
    },
    svendeData : () => {
        return new Promise(async (resolve, reject) => {
            try {
                let obj = {
                    sidebar: {}
                };
                obj.contact_info = await contact_info.getAll();
                obj.menu_categories = await categories.getMenuItems();
                obj.sidebar.sidebar_articles = await articles.getGeneralSideBarArticles();
                obj.sidebar.advertisements = await advertisements.getGeneralSideBarAdvertisements();
                obj.crumbs = await crumbs.getAll();
                resolve(obj);
            }
            catch (e) {
                reject(e);
            }
        })
    },
    svendeAdmin_data : () => {
        return new Promise(async (resolve, reject) => {
            try {
                let obj = {};
                obj.contact_info = await contact_info.getAll();
                obj.menu_categories = await categories.getMenuItems();
                obj.articles = await articles.getAll();
                obj.users = await user.getAll();
                obj.adDescription = await advertisements.getDescription();
                obj.ads = await advertisements.getAllAdvertisements();
                obj.ad_prices = await ad_prices.getPrices();
                obj.roles = await role.getAll();
                obj.crumbs = await crumbs.getAll();
                resolve(obj);
            }
            catch (e) {
                reject(e);
            }
        })
    }
}
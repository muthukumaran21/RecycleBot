export const constants = {
    /**
     * recycleDB_settings
     * @property database_id       - 
     */
    recycleDB_settings: {
        "database_id": "63f1bd1d0f0d317273a09ec2"
    },
    /**
     * Settings
     */
    Settings: {},
    /**
     * SecuritySettings
     * @property database_id       - 
     */
    SecuritySettings: {
        "database_id": "63f101250f0d317273a0939e"
    },
    /**
     * Photo_settings
     * @property database_id       - Please enter ID of your Appery.io Data Base
     * @property master_key       - Use X-Appery-Master-Key for tests. Please use X-Appery-Session-Token instead of X-Appery-Master-Key in production
     */
    Photo_settings: {
        "database_id": "63f164ca0f0d317273a09ebf",
        "master_key": "2a44ac4b-7616-4d26-a921-5d1c2a634dfb"
    }
};
export const routes = {
    "Screen1": "screen1",
    "Screen2": "screen2",
    "Screen1_46739": "chat_screen",
    "Screen1_13759": "screen1",
    "Login": "login",
    "SignUp": "signup",
    "Home": "home",
    "PrivacyPolicy": "privacypolicy",
    "TermsOfService": "termsofservice",
    "Autocomplete": "home",
    "Screen1_76990": "camera",
    "RecyclingLocations": "recyclinglocations",
    "UploadPhotoScreen": "uploadphotoscreen",
    "Map": "map",
    "signup": "Autocomplete",
};
export const pushSettings = {
    appID: '9c21cc0b-e4c1-4ce0-a643-952287eed916',
    baseUrl: 'https://api.appery.io/rest/push/reg',
    baseSendUrl: 'https://api.appery.io/rest/push/msg',
    initOptions: {}
};
export const projectInfo = {
    guid: '9c21cc0b-e4c1-4ce0-a643-952287eed916',
    name: 'RecycleBot',
    description: ''
};
export const IGNORED_VALUE = Symbol.for("AIO_REST_IGNORED_VALUE");
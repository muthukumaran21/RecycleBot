import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    ExportedClass as FormUtils
} from '../scripts/custom/FormUtils';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Login.html',
    selector: 'page-login',
    styleUrls: ['Login.scss']
})
export class Login {
    public imageUri: string;
    public aioChangeDetector: ChangeDetectorRef;
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable?, isSelected?) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __isPropertyInMapping(_currentItem, property) {
        return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
    }
    public __setMapping(data: any = {}, keyName: string, propName?: string): void {
        const changes = data.detail || {};
        if (propName) {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
        this.$aio_changeDetector.detectChanges();
    }
    @ViewChild('loginForm_el', {
        static: false
    }) public loginForm_el;
    @ViewChild('loginForm', {
        static: true
    }) public loginForm;
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public formUtils: FormUtils) {
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ngOnInit() {
        this.pageNgOnInit__j_115();
    }
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_115();
    }
    async pageNgOnInit__j_115(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        const databaseId = this.Apperyio.config.get("SecuritySettings.database_id");
        if (databaseId == 'SPECIFY YOUR DATABASE ID') {
            const alert = await this.Apperyio.getController("AlertController").create({
                header: 'Alert',
                subHeader: 'Database Id is not specified',
                message: 'Please open SecuritySettings and specify your database id as database_id property',
                buttons: ['OK']
            });
            await alert.present();
        }
        this.formUtils.showPasswordOnClick('page-login');
    }
    async pageIonViewDidEnter__j_115(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        this.formUtils.init(this.loginForm.form);
    }
    async loginformNgSubmit__j_123(event?, currentItem?) {
        if (this.loginForm.valid) {
            let __aio_tmp_val__: any;
            /* Invoke data service */
            this.invokeService_dbLogin();
        }
    }
    async signinbuttonClick__j_131(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        this.formUtils.markFormControlsAsTouched(this.loginForm.form, ['username', 'password']);
    }
    async signuptextClick__j_133(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigateTo('SignUp');
    }
    private $aio_dataServices = {
        "dbLogin": "invokeService_dbLogin",
        "CameraService2": "invokeService_CameraService2"
    }
    invokeService_dbLogin(cb?: Function) {
        this.Apperyio.getService("LoginService").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {};
                let params = {};
                let headers = {};
                let __aio_tmp_val__: any;
                this.$aio_changeDetector.detectChanges();
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'loginForm', 'ionic5form', 'formData'));
                /* Present Loading */
                await (async () => {
                    let options = {
                        'spinner': 'circles',
                    }
                    let controller = this.Apperyio.getController('LoadingController');
                    const loading = await controller.create(options);
                    return await loading.present();
                })();
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        await this.$aio_mappingHelper.setServiceDataValue("sessionToken", [], this.$aio_mappingHelper.getSubdata(res, ["sessionToken"]));
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Run TypeScript */
                        if (this.loginForm.form && this.loginForm.form.controls.rememberme.value) {
                            this.formUtils.rememberMe(this.loginForm.form.controls.username.value, this.loginForm.form.controls.password.value);
                        }
                        /* Navigate to Page */
                        this.Apperyio.navigateTo('Home');
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    /* onerror */
                    async (err: any) => {
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        /* Present Toast */
                        await (async () => {
                            let options = {
                                'color': 'danger',
                                'duration': 1000,
                                'message': 'Invalid user\u0027s credentials',
                                'position': 'top',
                                'buttons': []
                            }
                            let controller = this.Apperyio.getController('ToastController');
                            const toast = await controller.create(options);
                            return await toast.present();
                        })();
                    }
                )
            }
        );
    }
    invokeService_CameraService2(cb?: Function) {
        this.Apperyio.getService("CameraService").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {};
                let __aio_tmp_val__: any;
                service.execute({
                    data: data
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
}
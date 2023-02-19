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
    templateUrl: 'SignUp.html',
    selector: 'page-sign-up',
    styleUrls: ['SignUp.scss']
})
export class SignUp {
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
    @ViewChild('signUpForm_el', {
        static: false
    }) public signUpForm_el;
    @ViewChild('signUpForm', {
        static: true
    }) public signUpForm;
    markFormControlsAsTouched(): any {
        this.formUtils.markFormControlsAsTouched(this.signUpForm.form, ['firstName', 'lastName', 'username', 'password']);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public formUtils: FormUtils) {
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ngOnInit() {
        this.pageNgOnInit__j_84();
    }
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_84();
    }
    async pageNgOnInit__j_84(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        this.formUtils.showPasswordOnClick('page-sign-up');
    }
    async pageIonViewDidEnter__j_84(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        this.signUpForm.reset();
    }
    async signupformNgSubmit__j_94(event?, currentItem?) {
        if (this.signUpForm.valid) {
            let __aio_tmp_val__: any;
            /* Invoke data service */
            this.invokeService_dbSignup();
        }
    }
    private $aio_dataServices = {
        "dbSignup": "invokeService_dbSignup"
    }
    invokeService_dbSignup(cb?: Function) {
        this.Apperyio.getService("SignupService").then(
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
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'signUpForm', 'ionic5form', 'formData'));
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
                                'message': 'Invalid user\u0027s data',
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
}
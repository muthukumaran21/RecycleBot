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
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'UploadPhotoScreen.html',
    selector: 'page-upload-photo-screen',
    styleUrls: ['UploadPhotoScreen.scss']
})
export class UploadPhotoScreen {
    public src: string;
    public imageURI: string;
    public data: any;
    public imagedata: any;
    public aioChangeDetector: ChangeDetectorRef;
    public currentItem: any = null;
    public mappingData: any = {
        "j_75__visible": false,
    };
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
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_71();
    }
    async pageIonViewDidEnter__j_71(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        if (!this.Apperyio.config.get("Photo_settings.database_id")) {
            const alert = await this.Apperyio.getController("AlertController").create({
                header: 'Missed parameter',
                subHeader: '',
                message: 'Please specify Photo_settings.database_id setting.',
                buttons: ['OK']
            });
            await alert.present();
        } else if (!this.Apperyio.config.get("Photo_settings.master_key")) {
            const alert = await this.Apperyio.getController("AlertController").create({
                header: 'Missed parameter',
                subHeader: '',
                message: 'Please specify Photo_settings.master_key setting.',
                buttons: ['OK']
            });
            await alert.present();
        }
    }
    async takephotobuttonClick__j_73(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_CameraService3();
    }
    async uploadphotobuttonClick__j_75(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_FileReadService1();
    }
    private $aio_dataServices = {
        "CameraService3": "invokeService_CameraService3",
        "FileReadService1": "invokeService_FileReadService1",
        "recycleDB__files_upload_service1": "invokeService_recycleDB__files_upload_service1"
    }
    invokeService_CameraService3(cb?: Function) {
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
                        let mappingData: any = {};
                        /* Mapping */
                        this.imageURI = this.$aio_mappingHelper.updateData(this.imageURI, [], this.$aio_mappingHelper.getSubdata(res, ["imageURI"]));
                        mappingData.j_74__imageSrc = () => this.$aio_mappingHelper.getSubdata(res, ["fileSrc"]);
                        mappingData.j_74__visible = () => this.$aio_mappingHelper.getSubdata(res, ["imageURI"]);
                        mappingData.j_75__visible = () => this.$aio_mappingHelper.getSubdata(res, ["imageURI"]);
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
    invokeService_FileReadService1(cb?: Function) {
        this.Apperyio.getService("FileReadService").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {};
                let __aio_tmp_val__: any;
                this.$aio_changeDetector.detectChanges();
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, ["filePath"], this.$aio_mappingHelper.getSubdata(this.imageURI, []));
                /* Present Loading */
                await (async () => {
                    let options = {
                        'animated': true,
                        'keyboardClose': true,
                        'message': 'Please wait ...',
                        'showBackdrop': true,
                        'spinner': 'crescent',
                    }
                    let controller = this.Apperyio.getController('LoadingController');
                    const loading = await controller.create(options);
                    return await loading.present();
                })();
                service.execute({
                    data: data
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.imagedata = this.$aio_mappingHelper.updateData(this.imagedata, [], this.$aio_mappingHelper.getSubdata(res, ["data"]));
                        /* Invoke data service */
                        this.invokeService_recycleDB__files_upload_service1();
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
    invokeService_recycleDB__files_upload_service1(cb?: Function) {
        this.Apperyio.getService("recycleDB__files_upload_service").then(
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
                data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getSubdata(this.imagedata, []));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Dismiss loading */
                        await this.Apperyio.getController("LoadingController").dismiss();
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
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
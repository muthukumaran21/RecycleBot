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
declare var google: any;
@Component({
    templateUrl: 'Map.html',
    selector: 'page-map',
    styleUrls: ['Map.scss']
})
export class Map {
    public markers: any;
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
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
        this.markers = [];
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_29();
    }
    async pageIonViewDidEnter__j_29(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_geoService();
    }
    async googlemapMapClick__j_31(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        const self = this;
        const alert = await this.Apperyio.getController("AlertController").create({
            header: 'Add Location',
            inputs: [{
                name: 'name',
                type: 'text',
                placeholder: 'Location Name'
            }],
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel');
                }
            }, {
                text: 'Add',
                handler: (res) => {
                    if (res.name && res.name.length) {
                        self.markers.push({
                            name: res.name,
                            latitude: event.coords.lat,
                            longitude: event.coords.lng
                        });
                    } else {
                        this.Apperyio.getController("ToastController").create({
                            header: 'Warning',
                            message: 'Name is required',
                            position: 'bottom',
                            color: 'danger',
                            duration: 2000
                        }).then(toast => toast.present());
                        return false;
                    }
                }
            }]
        });
        await alert.present();
    }
    private $aio_dataServices = {
        "geoService": "invokeService_geoService"
    }
    invokeService_geoService(cb?: Function) {
        this.Apperyio.getService("GeoService_Google_Map").then(
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
                        mappingData.j_31__center_latitude = () => this.$aio_mappingHelper.getSubdata(res, ["latitude"]);
                        mappingData.j_31__center_longitude = () => this.$aio_mappingHelper.getSubdata(res, ["longitude"]);
                        /* Run TypeScript */
                        this.markers.push({
                            name: 'You are here',
                            latitude: res.latitude,
                            longitude: res.longitude
                        });
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
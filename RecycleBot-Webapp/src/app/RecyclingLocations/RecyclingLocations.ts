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
    Marker
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
declare var google: any;
@Component({
    templateUrl: 'RecyclingLocations.html',
    selector: 'page-recycling-locations',
    styleUrls: ['RecyclingLocations.scss']
})
export class RecyclingLocations {
    public myPosition: Marker;
    public lat: number;
    public lng: number;
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
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    async button1Click__j_19(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        let _this = this;
        let onSuccess = (position) => {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
        };

        function onError(error) {
            console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    private $aio_dataServices = {
        "GeoService1": "invokeService_GeoService1"
    }
    invokeService_GeoService1(cb?: Function) {
        this.Apperyio.getService("GeoService").then(
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
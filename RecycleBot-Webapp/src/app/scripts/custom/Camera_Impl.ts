import { Injectable } from '@angular/core';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import _ from "lodash";
import { Observable } from "rxjs";
import { ApperyioHelperService } from '../apperyio/apperyio_helper';
import { EntityApiService } from '../apperyio/apperyio';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable()
class CameraService {
    constructor(private entityAPI: EntityApiService, private Apperyio: ApperyioHelperService, private camera: Camera, private webview: WebView) {
    }
    
    private getBoolean(val) {
        if (typeof val === "boolean") {
            return val;
        }
        if (typeof val === "string") {
            return (val === "false" || !val) ? false : true;
        }
        return !!val;
    }
    
    private getOptions(requestData): CameraOptions {
        let options: CameraOptions = {};
                        
        let quality = parseInt(requestData.quality);
        if (quality && quality > 0 && quality <= 100) {
            options.quality = quality;
        }
        
        let destinationType = requestData.destinationType;
        if (this.camera.DestinationType[destinationType] == undefined) {
            destinationType = "FILE_URI";
        }
        options.destinationType = this.camera.DestinationType[destinationType];
        
        let sourceType = requestData.sourceType;
        if (this.camera.PictureSourceType[sourceType] == undefined) {
            sourceType = "CAMERA";
        }
        options.sourceType = this.camera.PictureSourceType[sourceType];
        
        let mediaType = requestData.mediaType;
        if (this.camera.MediaType[mediaType] == undefined) {
            mediaType = "PICTURE";
        }
        options.mediaType = this.camera.MediaType[mediaType];
        
        if (requestData.allowEdit != undefined) {
            options.allowEdit = this.getBoolean(requestData.allowEdit);
        }

        let encodingType = requestData.encodingType;
        if (this.camera.EncodingType[encodingType] == undefined) {
            encodingType = "JPEG";
        }
        options.encodingType = this.camera.EncodingType[encodingType];
        
        let targetWidth = parseInt(requestData.targetWidth);
        if (targetWidth && targetWidth > 0) {
            options.targetWidth = targetWidth;
        }
        
        let targetHeight = parseInt(requestData.targetHeight);
        if (targetHeight && targetHeight > 0) {
            options.targetHeight = targetHeight;
        }
        
        let cameraDirection = requestData.cameraDirection;
        if (this.camera.Direction[cameraDirection] == undefined) {
            cameraDirection = "BACK";
        }
        options.cameraDirection = this.camera.Direction[cameraDirection];
        
        if (requestData.correctOrientation != undefined) {
            options.correctOrientation = this.getBoolean(requestData.correctOrientation);
        }
        
        if (requestData.saveToPhotoAlbum != undefined) {
            options.saveToPhotoAlbum = this.getBoolean(requestData.saveToPhotoAlbum);
        }
        
        if (requestData.popoverOptions) {
            options.popoverOptions = requestData.popoverOptions;
        }
        
        return options;
    }
    
    private execCordova(observer, options) {
        this.camera.getPicture(options).then((imageData) => {
            if (options.destinationType === this.camera.DestinationType.DATA_URL
                 && options.mediaType !== this.camera.MediaType.VIDEO) {
                observer.next({imageDataBase64: imageData});
            } else {
                observer.next({
                    imageURI: imageData,
                    fileSrc: this.webview.convertFileSrc(imageData)
                });
            }
            observer.complete();
        }, (err) => {
            observer.error(err);
        });
    }

    private execPreview(observer, options) {
        
        let dummyImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAaJJREFUaEPd2ltugzAUhGHTVcD+FwZvsIuUsTiIcDG+zIHj/FKqNJXwfEr7UJTGOfeZH24cR9e2LZ5W0zRNrus6//zPf53DC8MwLN/ZD1sF4ZvfCbwj66Pv+4/1sHG72RvOfmAZc7XVQ1ANmNDGFYIsY+62fUGQRUzMpgMEWcLEbjmFIAuYlA2XEPQmJvXsIAS9gck58xaCnsTknhUFQU9gSs6IhiBNTOm1kyBIA8O4ZjIEMTGsa2VBEGMAC4GyIahkCBOBiiAoZxAbgYohKGWYBgJRIChmoBYC0SAoNFQTgagQtB+M/6efuC9Ah6A9ZvvQQKAGX+YD6G3vOUma987W+1q1pwI53DxbUr0J6H/BiP3EH/sesR0c+hkjGiRmqCaGAkkZqIUphuQM08AUQUoGsTHZEMYQJiYLwhzAulYyhImQGNdMgmggpNJrR0M0EVLJGVGQJxBS7lm3kCcRUs6ZQcgbCCn17EvImwgpZcMpxAJCit1ygFhCSDGbviAWEdLdthViGSGFNnpIDQjpauvvfKhm+0INCGmPaZYnlX/wzLl/gQMOeWDLh1EAAAAASUVORK5CYII=",
            dummyImgPath = "assets/images/no-image.jpg";
        if (options.destinationType === this.camera.DestinationType.DATA_URL) {
                observer.next({imageDataBase64: dummyImg});
            } else {
                observer.next({
                    imageURI: dummyImgPath,
                    fileSrc: dummyImgPath
                });
            }
            observer.complete();
        
    }
    
    private execEcho(observer, echo) {
        try {
            echo = JSON.parse(echo);
        } catch (e) {
        }

        observer.next(echo);
        observer.complete();
    }
    
    execute(reqOpts?: any) {
        return new Observable((observer) => {
            try {
                (async () => {
                    let srvName = await this.Apperyio.getGSNameByImpl(this);
                    if (!srvName) {
                        observer.error("Service was not found");
                        return;
                    }
                    let service = this.entityAPI.get(srvName),
                        echo = service.echo;
                    if (_.isUndefined(echo)) {
                        let requestData = _.extend({}, service.request.data, reqOpts.data);
                        
                        let options: CameraOptions = this.getOptions(requestData);
                        
                        if(!(<any>window).cordova) {
                            this.execPreview(observer, options)
                        } else {
                            this.execCordova(observer, options)
                        }
                    } else {
                        this.execEcho(observer, echo);
                    }
                })()
            } catch (e) {
                observer.error(e);
            }
        });
    }
}

/*
    Service class should be exported as ExportedClass
*/
export { CameraService as ExportedClass };
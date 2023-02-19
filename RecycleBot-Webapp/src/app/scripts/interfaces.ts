import _ from "lodash";
declare global {
    interface Window {
        [key: string]: any;
    }
    interface Navigator {
        camera: any
        notification: any
        device: any
        splashscreen: any
    }
    var device, cordova, Media, StatusBar, Camera, CameraPopoverOptions, CameraPopoverHandle;
    var _: _;
}
// Appery.io models
export interface $aio_empty_object {};
//
export interface MessageModel {
    "me": boolean,
    "message": string,
    "time": string
}
export interface MessagesModel extends Array < MessageModel > {}
export interface Marker {
    "latitude": string,
    "longitude": string
}
//
export interface SignupServiceResponse {
    "_id": string,
    "_updatedAt": string,
    "sessionToken": string,
    "_createdAt": string,
    "username": string
}
//
export interface LogoutServiceResponse {}
//
export interface Photo__files_upload_serviceResponse {
    "filename": string,
    "fileurl": string
}
//
export interface recycleDB__files_upload_serviceResponse {}
//
export interface LoginServiceResponse {
    "sessionToken": string,
    "_id": string
}
//
export interface RESTServiceResponse {}
//
export interface GeoService_Google_MapResponse {
    "latitude": number,
    "longitude": number
}
//
export interface GeoServiceResponse {
    "longitude": number,
    "latitude": number
}
//
export interface CameraServiceResponse {
    "imageURI": string,
    "fileSrc": string,
    "imageDataBase64": string
}
//
export interface FileReadService_File_ReadResponse {
    "data": any
}
//
export interface FileReadServiceResponse {
    "data": any
}
//
export interface CameraService_Take_photo_and_upload_into_Appery_databaseResponse {
    "imageURI": string,
    "imageDataBase64": string,
    "fileSrc": string
}
//
export interface CameraService_CameraResponse {
    "fileSrc": string,
    "imageDataBase64": string,
    "imageURI": string
}
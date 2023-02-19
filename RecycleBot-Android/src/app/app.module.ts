import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
    FormsModule
} from '@angular/forms';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    IonicModule
} from '@ionic/angular';
import {
    IonicStorageModule
} from '@ionic/storage';
import {
    ApperyioModule
} from './scripts/apperyio/apperyio.module';
import {
    ApperyioDeclarablesModule
} from './scripts/apperyio/declarables/apperyio.declarables.module';
import {
    PipesModule
} from './scripts/pipes.module';
import {
    DirectivesModule
} from './scripts/directives.module';
import {
    ComponentsModule
} from './scripts/components.module';
import {
    CustomComponentsModule
} from './scripts/custom-components.module';
import {
    CustomModulesModule
} from './scripts/custom-modules.module';
import {
    Sanitizer
} from '@angular/core';
import {
    NgDompurifySanitizer
} from '@tinkoff/ng-dompurify';
import {
    createTranslateLoader
} from './scripts/apperyio/translate_module';
import {
    TranslateModule
} from '@ngx-translate/core';
import {
    TranslateLoader
} from '@ngx-translate/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    AgmCoreModule
} from '@agm/core';
import {
    app
} from './app';
import {
    AppRoutingModule
} from './app-routing.module';
import {
    ExportedClass as GeoService_Google_Map
} from './scripts/custom/GeoService_Impl_Google_Map';
import {
    ExportedClass as GeoService
} from './scripts/custom/GeoService_Impl';
import {
    ExportedClass as CameraService
} from './scripts/custom/Camera_Impl';
import {
    ExportedClass as FileReadService_File_Read
} from './scripts/custom/FileReadService_Impl_File_Read';
import {
    ExportedClass as FileReadService
} from './scripts/custom/FileReadService_Impl';
import {
    ExportedClass as CameraService_Take_photo_and_upload_into_Appery_database
} from './scripts/custom/Camera_Impl_Take_photo_and_upload_into_Appery_database';
import {
    ExportedClass as CameraService_Camera
} from './scripts/custom/Camera_Impl_Camera';
import {
    ExportedClass as SignupService
} from './scripts/services/SignupService';
import {
    ExportedClass as LogoutService
} from './scripts/services/LogoutService';
import {
    ExportedClass as LoginService
} from './scripts/services/LoginService';
import {
    ExportedClass as RESTService
} from './scripts/services/RESTService';
import {
    ExportedClass as Photo__files_upload_service
} from './scripts/services/Photo__files_upload_service';
import {
    ExportedClass as recycleDB__files_upload_service
} from './scripts/services/recycleDB__files_upload_service';
import {
    ExportedClass as statesDictionary
} from './scripts/custom/statesDictionary';
import {
    ExportedClass as FormUtils
} from './scripts/custom/FormUtils';
import {
    Geolocation
} from '@ionic-native/geolocation/ngx';
import {
    Camera
} from '@ionic-native/camera/ngx';
import {
    File
} from '@ionic-native/file/ngx';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
var getIonicModuleConfig, getIonicStorageModuleConfig;
@NgModule({
    declarations: [
        app
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        IonicModule.forRoot((typeof getIonicModuleConfig === "function")? getIonicModuleConfig(): undefined),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCfR3zPae0npHsjna6GoreJUsJVyye_xVA'
        }),
        HttpClientModule,
        ApperyioModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        ApperyioDeclarablesModule,
        CustomComponentsModule,
        CustomModulesModule,
        IonicStorageModule.forRoot((typeof getIonicStorageModuleConfig === "function")? getIonicStorageModuleConfig(): undefined),
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    bootstrap: [
        app
    ],
    entryComponents: [
        //app
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WebView,
        Device,
        Keyboard,
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
        Geolocation,
        Camera,
        File,
        GeoService_Google_Map,
        GeoService,
        CameraService,
        FileReadService_File_Read,
        FileReadService,
        CameraService_Take_photo_and_upload_into_Appery_database,
        CameraService_Camera,
        SignupService,
        LogoutService,
        LoginService,
        RESTService,
        Photo__files_upload_service,
        recycleDB__files_upload_service,
        statesDictionary,
        FormUtils,
    ]
})
export class AppModule {}
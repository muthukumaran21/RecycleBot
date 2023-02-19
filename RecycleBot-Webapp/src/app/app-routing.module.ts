import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () =>
            import ('./Login/Login.module').then(m => m.LoginPageModule),
    },
    {
        path: 'signup',
        loadChildren: () =>
            import ('./SignUp/SignUp.module').then(m => m.SignUpPageModule),
    },
    {
        path: 'privacypolicy',
        loadChildren: () =>
            import ('./PrivacyPolicy/PrivacyPolicy.module').then(m => m.PrivacyPolicyPageModule),
    },
    {
        path: 'termsofservice',
        loadChildren: () =>
            import ('./TermsOfService/TermsOfService.module').then(m => m.TermsOfServicePageModule),
    },
    {
        path: 'home',
        loadChildren: () =>
            import ('./Home/Home.module').then(m => m.HomePageModule),
    },
    {
        path: 'camera',
        loadChildren: () =>
            import ('./camera/camera.module').then(m => m.cameraPageModule),
    },
    {
        path: 'recyclinglocations',
        loadChildren: () =>
            import ('./RecyclingLocations/RecyclingLocations.module').then(m => m.RecyclingLocationsPageModule),
    },
    {
        path: 'uploadphotoscreen',
        loadChildren: () =>
            import ('./UploadPhotoScreen/UploadPhotoScreen.module').then(m => m.UploadPhotoScreenPageModule),
    },
    {
        path: 'map',
        loadChildren: () =>
            import ('./Map/Map.module').then(m => m.MapPageModule),
    },
    {
        path: 'Autocomplete',
        loadChildren: () =>
            import ('./SignUp/SignUp.module').then(m => m.SignUpPageModule),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}
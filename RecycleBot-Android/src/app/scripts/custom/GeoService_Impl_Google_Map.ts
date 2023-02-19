import {
    Injectable
} from '@angular/core';
import _ from "lodash";
import {
    Observable
} from "rxjs";
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';
import {
    EntityApiService
} from '../apperyio/apperyio';
import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

@Injectable()
class GeoService {
    constructor(private entityAPI: EntityApiService, private Apperyio: ApperyioHelperService, private http: HttpClient) {}
    execute(reqOpts ? : any) {
        return new Observable((observer) => {
            try {
                var service = this.entityAPI.get('GeoService'),
                    echo = service.echo,
                    defaults = service.request.data,
                    request,
                    response;
                if (_.isUndefined(echo)) {
                    /**
                     * Passed request data structure IS RECOMMENDED to match the default request, described in service!
                     * An example of how to merge default request data with passed data (_.extend() should be used with flat objects only):
                     */
                    request = _.extend({}, defaults, reqOpts);

                    /**
                     * CUSTOM CODE for processing request and forming responce could be placed here
                     * Response structure IS RECOMMENDED to match default response, described in service!
                     * An example of forming an empty response:
                     */

                    navigator.geolocation.getCurrentPosition((position) => {
                        observer.next(position.coords);
                        observer.complete();
                    }, (error) => {
                        console.log('error', error);
                        observer.error(error);
                    });
                } else {
                    try {
                        echo = JSON.parse(echo);
                    } catch (error) {
                        console.log('error', error);
                        observer.error(error);

                    }

                    observer.next(echo);
                    observer.complete();
                }
            } catch (error) {
                console.log('error', error);
                observer.error(error);
            }
        });
    }
}

/*
    Service class should be exported as ExportedClass
*/
export {
    GeoService as ExportedClass
};
import {
    HttpClient,
    HttpParams
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';

import {
    AutoCompleteService
} from 'ionic4-auto-complete';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class SimpleFunction implements AutoCompleteService {
    labelAttribute = 'name';

    public objects: any = [{
        "name": "Plastic",
        "desc": "Plastic is recycleable"
    }, {
        "name": "Cardboard",
        "desc": "Cardboard is recycleable"
    }, {
        "name": "Paper",
        "desc": "Paper is recycleable"
    }];

    constructor(private Apperyio: ApperyioHelperService) {}

    getResults(keyword) {
        keyword = keyword.toLowerCase();

        return this.objects.filter(
            (object) => {
                const value = object[this.labelAttribute].toLowerCase();

                return value.includes(keyword);
            }
        );
    }
}

/*
    Service class should be exported as ExportedClass
*/
export {
    SimpleFunction as ExportedClass
};
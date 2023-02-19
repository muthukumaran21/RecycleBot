import { Component, forwardRef, ContentChild, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonDatetime } from '@ionic/angular';
import { Subscription } from 'rxjs';


@Component({
    template: `
        <ion-text class="placeholder" *ngIf="!value">{{placeholder || ('Select ' + (presentation === "time" ? 'time' : 'a date'))}}</ion-text>
        <ion-text *ngIf="value">{{formatDate(value)}}</ion-text>
        <button class="click-button" type="button" id="open-datetime{{id}}"></button>
        <ion-modal class="aio-datetime-modal" trigger="open-datetime{{id}}" [keepContentsMounted]="true">
            <ng-template>
                <ion-content>
                    <ng-content></ng-content>
                </ion-content>
            </ng-template>
        </ion-modal>
    `,
    selector: 'aio-datetime',
    styles: [`
        :host {
            margin-top: var(--margin-top, 12px);
            margin-bottom: var(--margin-bottom, 12px);
            margin-left: var(--margin-start, 12px);
            margin-right: var(--margin-end, 12px);
        }
        
        :host ion-text {
            color: var(--placeholder-color);
        }
        
        :host .click-button {
            left: 0px;
            top: 0px;
            margin: 0px;
            position: absolute;
            width: 100%;
            height: 100%;
            border: 0px;
            background: transparent;
            cursor: pointer;
            appearance: none;
            outline: none;
            z-index: 1;
        }
            
        .aio-datetime-modal {
            --border-radius: 8px;
            --width: 325px;
            --height: 434px; 
        }
    `],
    providers: [{ 
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ApperyioDatetime),
        multi: true
    }],
})
export default class ApperyioDatetime implements ControlValueAccessor {
    @ContentChild(IonDatetime) datetimeInput!: IonDatetime ;

    value!: string | string[];
    @Input() placeholder = "";
    @Input() presentation = "";
    @Input() formatOptions?: Object;
    @Input() locale = "";
    
    subscriptionOnChange!: Subscription;
    subscriptionOnBlur!: Subscription;
    id = Math.random().toString();

    constructor() { }

    ngAfterContentInit() {
        // contentChild is set
        this.subscriptionOnChange = this.datetimeInput.ionChange.subscribe((e: CustomEvent) => {
            this.value = e.detail.value;
            this.onChange(this.value);
        });
        this.subscriptionOnBlur = this.datetimeInput.ionBlur.subscribe(() => {
            this._onTouched();
        });
        if (this.datetimeInput.value) {
            setTimeout( () => {
            this.value = <any>this.datetimeInput.value;
            this.onChange(this.value);
            }, 10);
        }
    }

    ngOnDestroy() {
        this.subscriptionOnChange && this.subscriptionOnChange.unsubscribe();
        this.subscriptionOnBlur && this.subscriptionOnBlur.unsubscribe();
    }

    writeValue(value: any) {
        this.value = value;
    }

    registerOnChange(fn: (_: any) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this._onTouched = fn;
    }

    onChange(_: any) {}
    _onTouched() {}
    
    formatDate(value) {
        if (!value) {
            return "";
          }
        let options;
        if (!this.formatOptions) {
            switch (this.presentation) {
              case "date": 
                options = {dateStyle: "medium"}; 
                break;
              case "date-time":
                options = {dateStyle: "medium", timeStyle: "short"}; 
                break;
              case "month":
                options = {month: "long"}; 
                break;
              case "month-year":
                options = {year: "numeric", month: "long"}; 
                break;
              case "time":
                options = {timeStyle: "short"}; 
                break;
              case "time-date":
                options = {dateStyle: "medium", timeStyle: "short"}; 
                break;
              case "year":
                options = {year: "numeric"}; 
                break;
              default: 
                options = {dateStyle: "medium", timeStyle: "short"}; 
            }
        } else {
            options = this.formatOptions;
        }
        let res;
        try {
            res = new Date(value).toLocaleString(this.locale || 'en-US', options);
        } catch (e) {
            console.log(e);
            res = value
        }
        return res;
    }
}

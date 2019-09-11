import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';

import {
    Contact,
    ContactService,
    FavoriteIconDirective,
    InvalidEmailModalComponent,
    InvalidPhoneNumberModalComponent,
 } from '../shared';
import { AppMaterialModule } from '../../app.material.module';
import { ContactEditComponent } from './contact-edit.component';

describe('ContactEditComponent tests', () => {
    let fixture: ComponentFixture<ContactEditComponent>;
    let component: ContactEditComponent;
    let rootElement: DebugElement;

    const contsactServiceStub = {
        contact: {
            id: 1,
            name: 'janet'
        },

        save: async function (contact: Contact) {
            component.contact = contact;
        },

        getContact: async function () {
            component.contact = this.contact;
            return this.contact;
        },

        updateContact: async function (contact: Contact) {
            component.contact = contact;
        },
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContactEditComponent,
                FavoriteIconDirective,
                InvalidEmailModalComponent,
                InvalidPhoneNumberModalComponent
            ],
            imports: [
                AppMaterialModule,
                FormsModule,
                NoopAnimationsModule,
                RouterTestingModule
            ],
            providers: [{
                provide: ContactService,
                useValue: contsactServiceStub
            }]
        });

        TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [InvalidEmailModalComponent, InvalidPhoneNumberModalComponent]
            }
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        rootElement = fixture.debugElement;
    });
});

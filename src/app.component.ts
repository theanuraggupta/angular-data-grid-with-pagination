import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { NumericTextBoxAllModule, RatingAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from './order.service';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';

@Component({
    standalone: true,
    imports: [ CommonModule, ToolbarModule, GridAllModule,        NumericTextBoxAllModule, RatingAllModule , DialogModule, DatePickerAllModule, DropDownListAllModule, ReactiveFormsModule, FormsModule, CheckBoxModule],
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    public data: Observable<DataStateChangeEventArgs>;
    public pageOptions: Object;
    public state: DataStateChangeEventArgs;

    constructor( private service: OrdersService) {
        
        this.data = service;
    }

    public dataStateChange(state: DataStateChangeEventArgs): void {
        this.service.execute(state);
    }

    public ngOnInit(): void {
        this.pageOptions = { pageSize: 10, pageCount: 4 };
        let state = { skip: 0, take: 10 };
        this.service.execute(state);
    }
}


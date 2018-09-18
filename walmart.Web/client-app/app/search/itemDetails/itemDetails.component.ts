import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SearchService } from '../search.service';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { SearchDetails } from '../../models/searchModels';

@Component({
    selector: 'itemDetails',
    templateUrl: './itemDetails.component.html',
    styleUrls: [
        './itemDetails.component.scss'
    ]
})
export class ItemDetailsComponent implements OnInit {
    recommendations: SearchDetails[] = new Array<SearchDetails>();
    loading:boolean=false;
    constructor(private _searchService: SearchService) {
        this.loading=true;
        this._searchService.getRecommendations(this._searchService.modalItem.itemId).subscribe(data => {
            this.recommendations = data;
            this.loading=false;
        })
    }
    ngOnInit() {

    }
}
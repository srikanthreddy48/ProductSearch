import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SearchService } from './search.service';
import { SearchDetails } from '../models/searchModels';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { MatDialog } from '@angular/material';
import { ItemDetailsComponent } from './itemDetails/itemDetails.component'


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    providers: []
})
export class SearchComponent implements OnInit {
    items: SearchDetails[] = new Array<SearchDetails>();
    results: boolean;
    searchText: string = "";
    public openDetailsDialogRef;
    loading: boolean = false;
    constructor(private _searchService: SearchService, public dialog: MatDialog) {
        this.results = false;
    }
    onImageClick(item: SearchDetails) {
        this._searchService.modalItem = item;
        this.openDetailsDialogRef = this.dialog.open(ItemDetailsComponent, {
            disableClose: false,
            width: '500px'
        });
    }
    onSearchClick() {
        this.loading = true;
        this._searchService.getItems(this.searchText).subscribe(data => {
            this.items = data;
            if (data.length > 0) {
                this.results = true;
            }
            this.loading = false;
        })
    }
    ngOnInit() { }
}
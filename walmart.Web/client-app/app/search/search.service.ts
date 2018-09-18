import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SearchDetails } from '../models/searchModels';

@Injectable()
export class SearchService {
    public baseUrl: string;
    private headers: HttpHeaders;
    public modalItem: SearchDetails;
    constructor(private http: HttpClient) {
        this.baseUrl = 'http://localhost:5000/api/Search';
    }
    getItems = (itemType: string): Observable<SearchDetails[]> => {
        const endpoint = `${this.baseUrl + '/getSearchResults'}?searchText=${itemType}`;
        return this.http.get<SearchDetails[]>(endpoint);
    }
    getRecommendations = (itemId: number): Observable<SearchDetails[]> => {
        const endpoint = `${this.baseUrl + '/getRecommendationProducts'}?itemId=${itemId}`;
        return this.http.get<SearchDetails[]>(endpoint);
    }
}

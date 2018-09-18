import { Component } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd, RouterLink } from '@angular/router';

@Component({
    selector: 'app-notification-message',
    templateUrl: './notification.component.html'
})
export class NotificationMessageComponent
{
    private NotificationMessage: string;
    public NotificationMessageIsVisible: boolean;
    public isError: boolean = false;

    constructor(private router: Router) { }

    showNotificationMessage(msg: string, isError: boolean)
    {
        this.NotificationMessage = msg;
        this.NotificationMessageIsVisible = true;
        this.isError = isError;
    }

    hideNotificationMessage()
    {
        this.NotificationMessageIsVisible = false;
    }
}
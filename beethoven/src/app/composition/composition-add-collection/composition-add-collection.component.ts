import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdSnackBar } from "@angular/material";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';

import { LoginComponent } from '../../shared/login/login.component';
import { DialogAddCollectionComponent } from '../../shared/dialog-add-collection/dialog-add-collection.component';
import { DataService } from '../../core/data.service';

@Component({
    selector: 'lb-composition-add-collection',
    templateUrl: './composition-add-collection.component.html',
    styleUrls: ['./composition-add-collection.component.scss']
})
export class CompositionAddCollectionComponent implements OnInit {

    @Input() composition;

    constructor(
        private mdDialog: MdDialog,
        private mdSnackBar: MdSnackBar,
        private dataService: DataService
    ) { }

    ngOnInit() {
    }

    add(composition) {
        this.dataService.auth().switchMap(authState => {
            if (authState) {
                return Observable.of(authState);
            }
            return this.mdDialog.open(LoginComponent).afterClosed();
        }).take(1).subscribe(authState => {
            if (authState) {
                let dialogRef = this.mdDialog.open(DialogAddCollectionComponent);
                dialogRef.componentInstance.userId = authState.uid;
                dialogRef.componentInstance.composition = composition;
            } else {
                this.mdSnackBar.open('You must be logged in to use this feature.', 'OK', { duration: 3000 });
            }
        });
    }

}

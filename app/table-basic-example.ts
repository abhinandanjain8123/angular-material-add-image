import { Component } from '@angular/core';

export interface PeriodicElement {
  imageUrl: string;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'https://github.com/SiddAjmera.png', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { imageUrl: 'https://github.com/SiddAjmera.png', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { imageUrl: 'https://github.com/SiddAjmera.png', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { imageUrl: 'https://github.com/SiddAjmera.png', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['imageUrl'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
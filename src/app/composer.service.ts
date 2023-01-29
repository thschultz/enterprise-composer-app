// WEB 425 Angular with TypeScript
// Contributors:
// Richard Krasso
// Thomas James Schultz

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// injectable
@Injectable({
  providedIn: 'root',
})

// export statement
export class ComposerService {

  composers: Array<IComposer>


  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: 'Hans Zimmer', genre: 'Classical'
      },
      {
        composerId: 101, fullName: 'John Williams', genre: 'Classical'
      },
      {
        composerId: 102, fullName: 'Danny Elfman', genre: 'Classical'
      },
      {
        composerId: 103, fullName: 'Ennio Morricone', genre: 'Classical'
      },
      {
        composerId: 104, fullName: 'Howard Shore', genre: 'Classical'
      },

    ]
  }

  // get composers
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  // get composer by id
  getComposer(composerId: number) {
    // loop through composers
    for (let composer of this.composers) {
      // if composerId matches, return composer
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    // if no match, return null
    return {} as IComposer;
  }

  // filter by composers by name (case sensitive)
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter((composer) =>
          composer.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1)
      )
    );
  }

}

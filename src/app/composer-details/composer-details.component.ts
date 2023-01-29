import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router';
import { ComposerService } from '../composer.service';


// create the component
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css'],
})

// export the class
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer!: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    // get the composer id from the route
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!, 10);

    if (this.composerId) {
      // get composer by id
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }
}

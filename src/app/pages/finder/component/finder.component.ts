import { Component, OnInit } from '@angular/core';
// Component parts
import { AbstractFinderService } from '../service/abstract-finder.service';

@Component({
  selector: 'dogs-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {

  constructor(private finderService: AbstractFinderService) { }

  ngOnInit(): void {
  }

}

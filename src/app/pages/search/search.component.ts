import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
searchvalue: string='';
changeSearchValue(eventData: Event){
this.searchvalue=((<HTMLInputElement>eventData.target).value);
}
}

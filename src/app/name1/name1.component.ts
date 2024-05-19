import { Component } from '@angular/core';
import { Name2Component } from "../name2/name2.component";
import { StudentmarksComponent } from "../studentmarks/studentmarks.component";

@Component({
    selector: 'app-name1',
    standalone: true,
    templateUrl: './name1.component.html',
    styleUrl: './name1.component.scss',
    imports: [Name2Component, StudentmarksComponent]
})
export class Name1Component {

  names: string[] = [];

  updateName(value: string) {
    this.names.push(value);
    console.log('Updated names array:', this.names);
  }

}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './name2.component.html',
  styleUrl: './name2.component.scss'
})
export class Name2Component {
  ngOnInit() {
    console.log('Received names:', this.names);
  }

  @Input() names: string[] = [];


}

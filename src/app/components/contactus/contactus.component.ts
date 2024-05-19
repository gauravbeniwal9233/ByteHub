import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgxMaskDirective, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss',
  providers: [provideNgxMask()]
})
export class ContactusComponent {

  contactUsForm:FormGroup;
  selectedTechnologies: string[] = [];


  constructor(
    private _formbuilder: FormBuilder
  ) {}


  ngOnInit(): void {

    this.contactUsForm = this._formbuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      primaryRole: [null, [Validators.required]],
      email: [null, [Validators.email]],
      phoneNo: [null, [Validators.required]],
      comment: [null],
      technologies: new FormControl([]),
    });
  }


  submit(formData: FormGroup) {
    // console.log(formData.value);
    console.log(this.contactUsForm.value);
    console.log(formData.valid);

  }


    onCheckboxChange(event: any, technology: string) {
      if (event.target.checked) {
        this.selectedTechnologies.push(technology);
      } else {
        const index = this.selectedTechnologies.indexOf(technology);
        if (index !== -1) {
          this.selectedTechnologies.splice(index, 1);
        }
      }
      this.contactUsForm.get('technologies').setValue(this.selectedTechnologies);
    }
}

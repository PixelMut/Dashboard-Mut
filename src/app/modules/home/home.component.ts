import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['+32' ],
      subject: [''],
      textarea : ['', Validators.required]

    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    console.log('efszfse');
    console.log(this.contactForm);
    // this.formSubmit.emit(form.value);
    // this.contactForm.reset();
  }

}

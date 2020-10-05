import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ContactFormService} from '../../shared/services/contact-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private cfSrv: ContactFormService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', [ Validators.required , 	Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['+32' ],
      subject: [''],
      textarea : ['', Validators.required]

    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    // console.log('efszfse');
    // console.log(this.contactForm);
    this.cfSrv.onSubmit(this.contactForm).subscribe(
      elt => {
        alert(elt['result']);
        // console.log(elt['result'])
      }
    )
    // this.formSubmit.emit(form.value);
    // this.contactForm.reset();
  }

}

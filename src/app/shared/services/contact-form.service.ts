import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient) { }

  onSubmit(contactForm): Observable<any> {
    // if (contactForm.status == "VALID" && this.honeypot.value == "") {
      contactForm.disable(); // disable the form if it's valid to disable multiple submissions
      let formData: any = new FormData();
      formData.append('name', contactForm.get('name').value);
      formData.append('email', contactForm.get('email').value);
      formData.append('phone', contactForm.get('phone').value);
      formData.append('subject', contactForm.get('subject').value);
      formData.append('textarea', contactForm.get('textarea').value);
      // this.isLoading = true; // sending the post request async so it's in progress
      // this.submitted = false; // hide the response message on multiple submits
      return this.http.post('https://script.google.com/macros/s/AKfycbxbnYucowt-3Xy1Jea8P4WDDCO_kNFOYxfjJX6cUA/exec', formData).pipe(
        (response) => {
          // choose the response message

          contactForm.enable(); // re enable the form after a success
          contactForm.reset();
          console.log(response);
          if (response["result"] === 'success') {
            return response;
          } else {
            return response;
          }
          // this.submitted = true; // show the response message
          // this.isLoading = false; // re enable the submit button

        }
      );
    // }
  }

}

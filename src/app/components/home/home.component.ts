import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  // templateUrl: './home.component.html',
  template: `
  <button (click)="showSuccess()">Show Success</button>
  <button (click)="showError()">Show Error</button>
`,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // private lastToastId: number | null = null;

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    const toastRef = this.toastr.success('Hello world!', 'Very nice!', {
      disableTimeOut: true,
      closeButton: true, 
      progressBar: true,
      progressAnimation: 	'decreasing',
      tapToDismiss: false
    });
  }

  showError() {
    const toastRef = this.toastr.error('Hello world!', 'Some issues here?', {
      disableTimeOut: true, 
      closeButton: false,
      tapToDismiss: true
    });
  }


}

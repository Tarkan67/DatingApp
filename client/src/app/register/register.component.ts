import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  

  register() {
    this.accountService.register(this.model).subscribe({
      next: (response:any) => { 
        console.log(response);
        this.cancel();
      },
      error: (error:any) => {console.log(error)}
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }

}


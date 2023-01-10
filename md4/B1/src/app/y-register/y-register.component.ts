import { Component } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-y-register',
  templateUrl: './y-register.component.html',
  styleUrls: ['./y-register.component.css']
})
export class YRegisterComponent {
  formProfile!: FormGroup;
    isConfirmPasswordDirty: boolean = false;
    passwordsMatching: boolean = false;
    countries:any[] = ['Việt Nam','Trung Quốc' ,'Mỹ'];
    ngOnInit():void{
    this.formProfile = new FormGroup({
      'password' : new FormControl( '',[
        Validators.required,
        Validators.minLength(6)
  
      ]),
      'confirmpassword' : new FormControl( '',[
        Validators.required,
        Validators.minLength(6)
  
      ]),
  
      'email' :new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      'country' :new FormControl('',[
        Validators.required,
      ]),
      'age' :new FormControl('',[
        Validators.required,
        Validators.min(18),
      ]),
      'gender' :new FormControl('',[
        Validators.required,
      ]),
      'phone' :new FormControl('',[
        Validators.required,
        Validators.pattern("^((\\+84-?)|0)?[0-9]{10}$"),
      ])
    });
  }
    ConfirmedValidator(arg0: string, arg1: string) {
      throw new Error('Method not implemented.');
    }
  onSubmitForm(){
    console.log(this.formProfile.value);
  }
  checkPasswords(pw: string, cpw: string) {
    this.isConfirmPasswordDirty = true;
    if (pw === cpw) {
      this.passwordsMatching = true;
    } else {
      this.passwordsMatching = false;
    }
  }
  
  }
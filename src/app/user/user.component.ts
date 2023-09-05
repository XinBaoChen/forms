import { Component } from '@angular/core';
import { User } from './user.model';
import { UserRepository } from './repository.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  model: UserRepository = new UserRepository()
  newUser:User = new User()
  parsedJson: any
  parsedJsonEmail: any
  parsedJsonName: any
  userCounter:number = this.model.getUsers().length

  get jsonUser(){
    return JSON.stringify(this.newUser)
  }

  addUser(u:User){
    this.userCounter = this.userCounter + 1
    this.model.addUser(new User(this.userCounter, this.parsedJsonName, this.parsedJsonEmail))
    }

    displayLog(model:any){
      console.log(model)
    }

    formSubmit:boolean = false

    submitForm(form: NgForm){
      this.formSubmit = true
      if(form.valid){
        this.parsedJson = JSON.parse(JSON.stringify(this.newUser))
        this.parsedJsonName = this.parsedJson.name
        this.parsedJsonEmail = this.parsedJson.email
        this.addUser(this.newUser)
        this.newUser = new User()
        form.reset()
        this.formSubmit = false
      }
    }
  }

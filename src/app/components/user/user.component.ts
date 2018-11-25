import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  //name : string; empty property has been declared
  //name : string = 'John Doe'; variable has been declared, but it will be overided if ngOnInit has any declaration.
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    console.log("constructor from user component ran..");
  }

  ngOnInit() {
    console.log("ngOnInit from user component ran..");
    this.name = "John Doe";
    this.age = 30;
    this.email = "johndoe@gmail.com";
    this.address = {
      street: "King Street",
      city: "Alexandria",
      state: "VA"
    };
    this.hobbies = ["watching nba", "playing chess", "cooking"];
    this.hello = [1, "wasssup", "great", "perfect"];
  }
  onClick() {
    this.name = "Nashyyyyyy!";
    //    this.hobbies.push('New Hobby');
  }
  addHobby(hobby) {
    console.log("hobby logged");
    //    this.hobbies.push(hobby); // will add at end of array
    this.hobbies.unshift(hobby); // will add at end of array
    return false;
  }
  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string;
  city: string;
  state: string;

}
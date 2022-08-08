import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user:User = {
    name : '',
    birthDate:'',
    email:''
  }

  constructor(private service:UserService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id:number = this.route.snapshot.params["id"]
    if(id)
      this.getUser(id)
  }

  saveUser():void{
    this.service.save(this.user).subscribe(
      { next : (n) => this.router.navigate(['/users']),
        error : (e) => console.error(e)
      }
    )
  }

  getUser(id:number):void{
    this.service.get(id).subscribe(
      { next : (n) => {
        this.user = n
        this.user["id"] = n["id"]
      },
        error : (e) => console.error(e)
      }
    )
  }

}
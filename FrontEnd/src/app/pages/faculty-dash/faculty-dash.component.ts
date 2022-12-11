import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-faculty-dash',
  templateUrl: './faculty-dash.component.html',
  styleUrls: ['./faculty-dash.component.css']
})
export class FacultyDashComponent implements OnInit {
  responses:any=[];
  result:any=[];
  constructor(public apiservice : ApiService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.apiservice.getResponse().subscribe(res=>{
      this.responses = res;
      console.log(res)
    })
  }

}

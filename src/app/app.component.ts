import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 name='youssef';
 value='assets/img/team';
 status=false;
 title='youssef';



  ngOnInit(){

  }
 updateImages():void{
  this.status = !this.status;
  if (this.status) //active status
   this.value = 'https://svgshare.com/i/Gw7.svg';
  else this.value = 'https://svgshare.com/i/Gwo.svg';
}

 }

  



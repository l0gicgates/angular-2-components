import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  @Input('background') background: string;

  constructor() { }

  ngOnInit() {
  }


 getBackground() {
   if(this.background) 
   {
    return "#"+this.background;
   }
   else 
   {
     return "#31bcc9";
   }
   
 }
}

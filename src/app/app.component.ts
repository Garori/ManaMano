import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ManaMano';

  ngOnInit():void {
    setTimeout(function () {
      let viewheight = window.innerHeight;
      let viewwidth = window.innerWidth;
      let viewport = document.querySelector("meta[name=viewport]");
      if(viewport != null){
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
      }
    }, 300);
  }
}

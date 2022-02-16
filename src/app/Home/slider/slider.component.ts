import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  showLeft(e:any){
    $(".cont").css('left','5%');
    $(".cont-two").css('right','-95%');
  }

  showRight(e:any){
    $(".cont-two").css('right','5%');
    $(".cont").css('left','-95%');
  }

  constructor() { }

  ngOnInit(): void {
    $('.slider .container, .content,.shap-one').click(function(){
      $(".cont").css('left','-95%');
      $(".cont-two").css('right','-95%');
    });


  }

}

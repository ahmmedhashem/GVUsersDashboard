import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  one:boolean = true;
  two:boolean = true;
  three:boolean = true

  chback(event:any){
    let ele = event.srcElement;
    let val = $(ele).val();

    $(ele).css('background','linear-gradient(90deg, rgba(0, 243, 126, 0.5) 0%, rgba(0, 243, 126, 0) 120.44%)');

    if(val == 'aarrtt'){
      this.one = true;
      if($('.rroobb').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.two =false;
      }
      if($('.mmuuii').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.three = false;
      }
    }else if(val == 'rroobb'){
      this.two = true;
      if($('.aarrtt').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.one = false;
      }
      if($('.mmuuii').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.three = false;
      }
    }else{
      this.three =true;
      if($('.aarrtt').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.one = false;
      }
      if($('.rroobb').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.two =false
      }
    }
  }

  close(event:any){

    let ele = event.srcElement.offsetParent;
    // $(ele).fadeOut();
    // console.log(event);
    let card = event.srcElement.parentElement.classList[1];
    if(card == 'aarrttc'){
      this.one = false;
      $('.aarrtt').css('background','unset');
    }else if(card == 'rroobbc'){
      this.two = false;
      $('.rroobb').css('background','unset');
    }else{
      this.three =false;
      $('.mmuuii').css('background','unset');
    }


  }

  constructor() { }

  ngOnInit(): void {
  }

}


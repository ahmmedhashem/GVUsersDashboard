import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

    artt:boolean = true;
    rob:boolean = true;
    mui:boolean = true;

  change(event:any){
    let ele = event.srcElement;
    let cont = $(ele).val();
    console.log(cont);
    $(ele).css({'background':'linear-gradient(90deg, rgba(0, 243, 126, 0.5) 0%, rgba(0, 243, 126, 0) 120.44%)','border':'none'});
    $(ele).siblings('.minus').text('-');
    $(ele).siblings('.minus').css('background-color','#DA0A2C');

    if(cont == 'artt'){
      this.artt = true;
      if($('.robotics').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.rob =false;
      }
      if($('.music').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.mui = false;
      }
    }else if(cont == 'rob'){
      this.rob = true;
      if($('.art').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.artt = false;
      }
      if($('.music').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.mui = false;
      }
    }else{
      this.mui =true;
      if($('.art').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.artt = false;
      }
      if($('.robotics').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
        this.rob =false
      }
    }
  }



  changeBack(event:any){
    let curEle = event.srcElement;
    let ele = event.srcElement.nextElementSibling;
    let clele = $(ele).val();
    if($(ele).css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
      $(ele).css({'background':'linear-gradient(90deg, rgba(0, 243, 126, 0.5) 0%, rgba(0, 243, 126, 0) 120.44%)','border':'none'});
      $(curEle).text('-');
      $(curEle).css('background-color','#DA0A2C')
      if(clele == 'artt'){
        this.artt = true;
        if($('.robotics').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.rob =false;
        }
        if($('.music').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.mui = false;
        }
      }else if(clele == 'rob'){
        this.rob = true;
        if($('.art').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.artt = false;
        }
        if($('.music').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.mui = false;
        }
      }else{
        this.mui =true;
        if($('.art').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.artt = false;
        }
        if($('.robotics').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.rob =false
        }
      }
    }else{
      $(ele).css({'background':'unset','border':'10px solid', 'border-image-slice': '1','border-width': '1px','border-image-source': 'linear-gradient(to right,#00F37E,#000)'});
      $(curEle).text('+');
      $(curEle).css('background-color','#00F37E')

      if(clele == 'artt'){
        this.artt = false;
        if($('.robotics').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.rob =false;
        }
        if($('.music').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.mui = false;
        }
      }else if(clele == 'rob'){
        this.rob = false;
        if($('.art').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.artt = false;
        }
        if($('.music').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.mui = false;
        }
      }else{
        this.mui =false;
        if($('.art').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.artt = false;
        }
        if($('.robotics').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
          this.rob =false
        }
      }
    }

  }





  constructor() { }

  ngOnInit(): void {
  }

}

$("style").last().append(`

#users .uzr.kady1 img.co {
  width: 0px !important;
    height: 0px !important;
  margin-right: 1px;
}

#users .uzr.kady1 span.uhash{
    -webkit-text-fill-color: transparent;
  width: 0px !important;
    height: 0px !important;
  margin-right: 0px;}


#users .uzr.kady1 img.u-ico {

margin-left: 3px;
    
     

      
    }

#users .uzr.kady1 img.ustat {
     width: 10px !important;
  border-radius: 0px 10px 50px 50px !important;
  height: 10px !important;
  min-height: 0% !important;
  z-index: 0 !important;
margin-left: -0px !important;
margin-top: 0px !important;
      
    }

#users .uzr.kady1 .fitimg.u-pic {




  border-radius: 10px 10px 10px 10px !important;
  margin-top: 6px !important;
  height: 52px !important;
  margin-left: 0px!important;
  z-index: 0 !important;
margin-bottom: 10px !important;
padding: 27px !important;
margin-top:3px;


box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;

   
  
  border: 1px solid #fff;
}

#users .uzr.kady1 .u-msg {
	
  
   -webkit-background-clip: text;
  
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
 background-image: url(https://up6.cc/2023/01/167459183804791.gif);
  padding: 0px !important;
	margin-bottom: 0px !important;
margin-left: 10px;
background-size: cover;
margin-top: 11px !important;

}





#users .uzr.kady1 {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 0px 10px 10px 0px;
   
  
  border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/05/168485163264211.gif);
background-size: 100%;
    
}



#users .uzr.kady1 .d-flex.fl {
  padding-right: 0px !important;
}

#users .uzr.kady1 .u-topic {

  margin-left: 1px ;

}



#users .uzr.kady1 .kady_star1 {
 width: 0px;

margin-top: -0px;
cursor: pointer;
margin-left: -0px;
}

`);
var l_itvkady=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvkady);
        $("#users .uzr:contains('‘*ء')").addClass('kady1');
        $("#users .uzr.kady1 .fitimg.u-pic").append('<img class="kady_star1" src="https://user.1des.net//border/bac16.gif">');
		$("#users .uzr.kady1 span.u-topic").after('<img id="mystory1" class="My_vedio1" title="ستوري" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://user.1des.net/imagedesgin/img1.gif">');
        $("#users .uzr.kady1 span.uhash, #users .uzr.kady1 img.co").hide(); 
        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
        $("div#users .uzr.kady1 .My_vedio1").click(function(){
        $("#movon1").show();
        $('#movon1').addClass('kady1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/5G4-g8bhnDA" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
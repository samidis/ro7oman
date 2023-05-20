$("style").last().append(`

#users .uzr.sami img.co {
  width: 1px !important;
    height: 1px !important;
  margin-right: 1px;
}

#users .uzr.sami span.uhash{
   -webkit-text-fill-color: transparent;
width: 1px !important;
    height: 1px !important;
  margin-right: 1px;}


#users .uzr.sami img.u-ico {
margin-left: 2px;
 
     

      
    }

#users .uzr.sami img.ustat {
    width: 0px !important;
  border-radius: 50px !important;
  height: 11px !important;
  min-height: 0% !important;
  z-index: 0 !important;
margin-left: 2px !important;
margin-top: 2px !important;
      
    }

#users .uzr.sami .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 6px !important;
  height: 52px !important;
  margin-left: 8px!important;
  z-index: 0 !important;
margin-bottom: 9px !important;
padding: 30px !important;
border:2px solid #a8a8a8;margin-top:3px;border-radius:100px;

box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 5px #a8a8a8
}

#users .uzr.sami .u-msg {
	
  -webkit-background-clip: text;
  
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
 background-image: url(https://up6.cc/2023/01/167459183804791.gif);
  padding: 0px !important;
	margin-bottom: 0px !important;
margin-left: 16px;
background-size: cover;
margin-top: 8px !important;

}





#users .uzr.sami {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 0px 5px 0px 5px;
   
  
  border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/04/168220144230821.png);
background-size: 100%;
    
}



#users .uzr.sami .d-flex.fl {
  padding-right: 0px !important;
}

#users .uzr.sami .u-topic {
-webkit-text-fill-color: transparent;
  margin-left: 4px;
margin-bottom: 33px !important;
}

#users .uzr.sami .itarr_sami1 {
height: 92px;
margin-top: -40px;
cursor: pointer;
margin-left: -43px;
}




`);
var l_itvsami=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvsami);
        $("#users .uzr:contains('???? ??????')").addClass('sami1');
        $("#users .uzr.sami1 .fitimg.u-pic").append('<img class="sami_star1" src="https://i.ibb.co/5G9Ttb7/10.gif">');
		$("#users .uzr.sami1 span.u-topic").after('<img id="mystory1" class="My_vedio1" title="?????" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://i.ibb.co/47VS4nY/image.png">');
        $("#users .uzr.sami1 span.uhash, #users .uzr.sami1 img.co").hide(); 
        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
        $("div#users .uzr.sami1 .My_vedio1").click(function(){
        $("#movon1").show();
        $('#movon1').addClass('sami1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/qKVW_wJs91Q" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);

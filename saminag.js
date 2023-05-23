

$("style").last().append(`

#users .uzr.sami img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 340px;
}

#users .uzr.sami span.uhash{
    margin-right: 350px;
  margin-top: 24px;
  margin-left: 0px;}


#users .uzr.sami img.u-ico {
    
     

      
    }

#users .uzr.sami img.ustat {
      width: 54px !important;
  border-radius: 0px 50px 50px 50px !important;
  height: 52px !important;
  margin-top: 5px !important;
  min-height: 0% !important;
  margin-left: 14px;
  z-index: 0 !important;
  display: none;
      
    }

#users .uzr.sami .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 23px !important;
  height: 52px !important;
  margin-left: 25px!important;
  z-index: 0 !important;
margin-bottom: 9px !important;
padding: 30px !important;
}

#users .uzr.sami .u-msg {
	text-align: center;
  -webkit-background-clip: text;
  
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
 background-image: url(https://up6.cc/2023/05/168484951832672.gif);
  padding: 0px !important;
	margin-bottom: 25px !important;
margin-left: 18px;
margin-right: 50px;
background-size: cover;
margin-top: 17px !important;

}





#users .uzr.sami {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 4px;
   
  
  border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/05/168484986652031.png);
background-size: 100%;
    
}



#users .uzr.sami .d-flex.fl {
  padding-right: 0px !important;
}

#users .uzr.sami .u-topic {
-webkit-text-fill-color: transparent;
  margin-left: 5px;
}

#users .uzr.sami .itarr_samia {
 width: 132px;
height: 89px;
margin-top: -53px;
cursor: pointer;
margin-left: -65px;
}





`);

var l_itvsami=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvsami);
        $("#users .uzr:contains('SAMI.-')").addClass('sami');
       $("#users .uzr.siggm .fitimg.u-pic").append('<img class="itarr_samia" title="Ø§Ø·Ø§Ø±ÙŠ" src="https://up6.cc/2023/05/168484951831041.png">');
		$("#users .uzr.sami span.u-topic").after('<img id="mystory1" class="My_vedio1" title="ستوري" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://up6.cc/2023/05/168484951889833.gif">');
        $("#users .uzr.sami span.uhash, #users .uzr.sami img.co").hide(); 
        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
        $("div#users .uzr.sami .My_vedio1").click(function(){
        $("#movon1").show();
        $('#movon1').addClass('athb1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/gvcWhSWGRe4" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
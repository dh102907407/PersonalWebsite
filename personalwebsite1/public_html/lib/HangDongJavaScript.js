var pagenumber=0;
var ifProjectExpand=false;
var player; function onYouTubeIframeAPIReady(){player=new YT.Player('3Dproject')}

$(document).ready(function(){
	arrowFunction();	 
        menuDirection();
        projectExpand();
       

});// JavaScript Document


function arrowFunction(){
			
            $('#arrowright').click(function(){
                
                 pagenumber+=1;
		if (pagenumber===1){
		mainpageSeperate();
                projectsGather();
             }  
             else if(pagenumber===2){
                projectsSeperate(); 
                resumeScrollDown();
                 
             } else if(pagenumber===3){
              
                 resumeScrollUp();
                contactGather();
             }
             
                else if(pagenumber===4){
                 pagenumber=0;
                 contactSeperate();
                 mainpageGather();
             }
		 menuExpand();
            });
			
			
           
    
    
    $('#arrowleft').click(function(){
		
                pagenumber-=1;	
                 menuExpand();
                if (pagenumber===-1){
               mainpageSeperate();
               contactGather();
                    pagenumber=3;
                }
             else if (pagenumber===0)	{		
               mainpageGather(); 
               projectsSeperate();
			}
             else if(pagenumber===1){
               projectsGather(); 
               resumeScrollUp();
                        }
             else if(pagenumber===2){
              contactSeperate();
               resumeScrollDown();
                        }
              menuExpand();
            });	
			
}


function menuDirection(){
    $('#blue').on('click',function(e) {
        projectsGather();
        mainpageSeperate();
        resumeScrollUp();
        contactSeperate();
        pagenumber=1;
        menuExpand();
    });
     $('#orange').on('click',function(e) {
        projectsSeperate();
        mainpageGather();
        resumeScrollUp();
        contactSeperate();
       
        pagenumber=0;
        menuExpand();
    });
     $('#green').on('click',function(e) {
        projectsSeperate();
        mainpageSeperate();
        resumeScrollDown();
      
        contactSeperate();
        pagenumber=2;
        menuExpand();
    });
      $('#yellow').on('click',function(e) {
        contactGather();
        projectsSeperate();
        mainpageSeperate();
        resumeScrollUp();
       
        pagenumber=3;
        menuExpand();
    });
    
}

    
function projectsGather(){
                $("#project1").animate({ left:'50%',top:'60px',marginLeft:'-470px',opacity:"0.9"});
                $("#project2").animate({ left:'50%',top:'60px',marginLeft:'20px',opacity:"0.9"});
                $("#project3").animate({ left:'50%',top:'350px',marginLeft:'-470px',opacity:"0.9"}); 
                $("#project4").animate({ left:'50%',top:'350px',marginLeft:'20px',opacity:"0.9"});
				
}
function projectsSeperate(){
                $("#project1").animate({ left:'20%',top:'-30%',opacity:"0"});
                $("#project2").animate({ left:'80%',top:'-30%',opacity:"0"});
                $("#project3").animate({ left:'20%',top:'100%',opacity:"0"}); 
                $("#project4").animate({ left:'80%',top:'100%',opacity:"0"});
            }
function mainpageSeperate(){
                $("#webdeveloperText").animate({ marginLeft:'-500px'});
        	$("#javacoderText").animate({ marginTop:'200px'});
                $("#vertileLine").animate({height:"0px",top: '342px'});
                $("#name").animate({ opacity:'0'});
}
function mainpageGather(){
               
                $("#webdeveloperText").animate({ marginLeft:'0px'});
        	$("#javacoderText").animate({ marginTop:'40px'});
                $("#vertileLine").animate({height:"100px",top: '292px'});
                $("#name").animate({ opacity:'1'});
}


function projectExpand(){
     $('#project1').on('click',function(e) {
         if(ifProjectExpand===false){
//        $("#project1").animate({ left:'700px',top:'0px',height:'660px',width:'1150px',paddingTop:'100px',paddingLeft:'50px'});
        $("#project1").animate({ left:'470px',top:'0px',height:'640px',width:'1150px'});
        $("#project2").animate({ opacity:'0'});
        $("#project3").animate({ opacity:'0'});
        $("#project4").animate({ opacity:'0'});
        $(".learnMore").css({display:'none'});
	$(".projectPicture").css({display:'none'});
	$(".projectList").css({display:'none'});
        $(".projectName").css({display:'none'});
         $('#project1').addClass('cuestacks-bg').removeClass('bg') 
        

        $("#return").animate({ opacity:'1'});
        setIfProjectExpand();
    }else{
        projectReset();
    }
    });
     $('#project2').on('click',function(e) {
        if(ifProjectExpand===false){
        $("#project2").animate({ left:'-20px',top:'0px',height:'640px',width:'1150px'});
        $("#project1").animate({ opacity:'0'});
        $("#project3").animate({ opacity:'0'});
        $("#project4").animate({ opacity:'0'});
        $("#3Dproject").css({display:'inline'});
	$("#3Dproject")[0].src += "&autoplay=1";
        $(".projectPicture").css({display:'none'});
	$(".projectList").css({display:'none'});
        $(".learnMore").css({display:'none'});
        $(".projectName").css({display:'none'});

        $("#return").animate({ opacity:'1'});
        setIfProjectExpand(); 
         }else{
        projectReset();
    }
    });
     $('#project3').on('click',function(e) {
         if(ifProjectExpand===false){
        $("#project3").animate({ left:'470px',top:'0px',height:'640px',width:'1150px'});
        $("#project2").animate({ opacity:'0'});
        $("#project1").animate({ opacity:'0'});
        $("#project4").animate({ opacity:'0'});
        $("#return").animate({ opacity:'1'});
        setIfProjectExpand(); 
        $(".projectPicture").css({display:'none'});
	$(".projectList").css({display:'none'});
        $(".learnMore").css({display:'none'});
        $(".projectName").css({display:'none'});
        $('#project3').addClass('lpr-bg').removeClass('bg') ;
        
         }else{
        projectReset();
    }
    });
     $('#project4').on('click',function(e) {
           if(ifProjectExpand===false){
         $("#project4").animate({ left:'-20px',top:'0px',height:'640px',width:'1150px'});
         $("#project2").animate({ opacity:'0'});
         $("#project3").animate({ opacity:'0'});
         $("#project1").animate({ opacity:'0'});
         $("#return").animate({ opacity:'1'});
         $(".projectPicture").css({display:'none'});
	 $(".projectList").css({display:'none'});
         $(".learnMore").css({display:'none'});
         $(".projectName").css({display:'none'});
         $('#project4').addClass('allKindsOfProject-bg').removeClass('bg') 
         setIfProjectExpand();
          }else{
        projectReset();
    }
    });
    $('#return').on('click',function(e) {
          projectReset();
          ifProjectExpand=false;
    }); 
}


function setIfProjectExpand(){
     if(ifProjectExpand===true){
        ifProjectExpand=false;
    }else{
        ifProjectExpand=true;
    }
}

function projectReset(){
                $("#project1").animate({ left:'50%',height:'270px',width:'450px',top:'60px',marginLeft:'-470px',opacity:"0.9"});
                $("#project2").animate({ left:'50%',height:'270px',width:'450px',top:'60px',marginLeft:'20px',opacity:"0.9"});
                $("#project3").animate({ left:'50%',height:'270px',width:'450px',top:'350px',marginLeft:'-470px',opacity:"0.9"}); 
                $("#project4").animate({ left:'50%',height:'270px',width:'450px',top:'350px',marginLeft:'20px',opacity:"0.9"});
		 $(".projectPicture").css({display:'inline'});
		 $("#projectList").css({display:'inline'});
                 $(".projectName").css({display:'inline'});
                 $(".learnMore").css({display:'inline'});
                 $("#3Dproject").css({display:'none'});
		 $(".projectDemo").animate({opacity:'0'});
         $("#return").animate({ opacity:'0'});
         setIfProjectExpand();
         $('#project1').removeClass('cuestacks-bg').addClass('bg') ;
         $('#project3').removeClass('lpr-bg').addClass('bg') ;
         $('#project4').removeClass('allKindsOfProject-bg').addClass('bg') ;
         $(".projectList").css({display:'inline'});
        
}
function resumeScrollDown(){
        $("#resume").animate({ top:'80px'});
}
function resumeScrollUp(){
        $("#resume").animate({ top:'-600px'});
    
    
}

function contactGather(){
      $("#contactPortral").animate({ left:'50%',opacity:1});
      $("#contactText2").animate({ left:'50%',opacity:1});
      $("#contactText").animate({ left:'50%',opacity:1});
}
function contactSeperate(){
      $("#contactPortral").animate({ left:'100%',opacity:0});
      $("#contactText2").animate({ left:'100%',opacity:0});
      $("#contactText").animate({ left:'0%',opacity:0});
}


function menuExpand(){
    if (pagenumber===0){
        $("#orange1").animate({ width:'220px'});
        $("#blue1").animate({ width:'190px'});
        $("#green1").animate({ width:'190px'});
        $("#yellow1").animate({ width:'190px'});
    }
    if (pagenumber===1){
        $("#orange1").animate({ width:'190px'});
        $("#blue1").animate({ width:'220px'});
        $("#green1").animate({ width:'190px'});
        $("#yellow1").animate({ width:'190px'});
    }
    if (pagenumber===2){
        $("#orange1").animate({ width:'190px'});
        $("#blue1").animate({ width:'190px'});
        $("#green1").animate({ width:'220px'});
        $("#yellow1").animate({ width:'190px'});
    }
    if (pagenumber===3){
        $("#orange1").animate({ width:'190px'});
        $("#blue1").animate({ width:'190px'});
        $("#green1").animate({ width:'190px'});
        $("#yellow1").animate({ width:'220px'});
    }
    
}


function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("3Dproject");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}
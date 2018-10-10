function getByClass(clsName,parent){
        var oParent=parent?document.getElementById(parent):document,
            eles=[],
            elements=oParent.getElementsByTagName('*');
      
        for(var i=0,l=elements.length;i<l;i++){
          if(elements[i].className==clsName){
            eles.push(elements[i]);
          }
        }
        return eles;
      }
    
    window.onload=drag;
    function drag(){
        var oTitle=getByClass('login_logo','loginPanel')[0];
        // 拖曳
        oTitle.onmousedown=fnDown;
    
    }
    
    function fnDown(event){
       //鼠标按下时候的坐标
        var oDrag=document.getElementById('loginPanel');
        disX=event.clientX-oDrag.offsetLeft,
        disY=event.clientY-oDrag.offsetTop;
        document.onmousemove=function(event){
        event = event || window.event;//鼠标的位置
        fnMove(event,disX,disY);
      }
    }
    function fnMove(e,cosX,cosY){
        var oDrag=document.getElementById('loginPanel');
        //鼠标移动之后的坐标
      var winW=document.documentElement.clientWidth || document.body.clientWidth,
          winH=document.documentElement.clientHeight || document.body.clientHeight;
          var maxW=winW-oDrag.offsetWidth-10;
          var maxH=winH-oDrag.offsetHeight;
    

        
            l=e.clientX-cosX,
             t=e.clientY-cosY;
             if(l<0){
                 l=0;
             }else if(l>maxW){
                 l=maxW;
             }
            if(t<0){
            t=10;
        }else if(t>maxH){
            t=maxH;
        }
        oDrag.style.left=l+'px';
        oDrag.style.top=t+'px';

    }
    
    
    
    

/*let but = document.getElementById('#but')
let img = document.getElementById('#img')
let imgs = new Array('leo.jpg', 'raf.jpg,', 'Donat.jpg', 'mick.jpg');
let i = 0;

but.onClick = function() {
  i++;
  img.src = imgs[i];  
}
*/
let donat = 'Donat.jpg'
let leo = 'leo.jpg'
let mick = 'mick.jpg'
let raf = 'raf.jpg'
let turt ='turtiles.jpg'
let but = document.getElementById('#but')
let img = document.getElementById('#img')
let s = 0
function f3(){
    
    if(s==0){
        $('#img').attr('src', turt)
        s++
    }

    else if(s==1){
        $('#img').attr('src', donat)
        s++
    }

    else if(s==2){
        $('#img').attr('src', leo)
        s++
    }

    else if(s==3){
        $('#img').attr('src', mick)
        s++
    }

    else if(s==4){
        $('#img').attr('src', raf)
        s++
    }
    if(s==5){
        s=0
    }
    
}
$('#but').click(f3)
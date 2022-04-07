function getCurrentTime(){
        var today=new Date();
        var date=today.getDate();
        var month=today.getMonth();
        var year=today.getFullYear();
        var h=today.getHours();
        var m=today.getMinutes();
        h=h<10?'0'+h:h;
        m=m<10?"0"+m:m;
        setTimeout(function(){getCurrentTime(),1000});
        document.getElementById('op').innerHTML=date+'/'+month+'/'+year+', '+h+':'+m;
}
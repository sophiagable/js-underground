
  $(function(){
    let Hour,Min,Sec;
    function Init(){
      let today = new Date();
      Hour = today.getHours();
      Hour =  Hour>= 12 ?Hour-12:Hour;
      Min = today.getMinutes();
      Sec = today.getSeconds(); 
      let Hdeg = Hour==0 ? 0 : Hour*(360/12)+Min*(30/60);
      let Mdeg = Min*(360/60)+Sec*(6/60);
      let Sdeg = Sec*(360/60);
      let HourRotate = 'rotate('+Hdeg+'deg)';
      let MinRotate ='rotate('+Mdeg+'deg)';
      let SecRotate ='rotate('+Sdeg+'deg)';
      $('#HourHand').css('transform',HourRotate);
      $('#MinHand').css('transform',MinRotate);
      $('#SecHand').css('transform',SecRotate);
    }
     setInterval(function(){
       Init();
     },1000)
   
 })
const cl=console.log;

//let d= new Date();
//cl(d);

//let hr=d.getHours();
//cl(hr);
//let min=d.getMinutes();
//let sec=d.getSeconds();
//let session ="AM";

//by default session value is AM
// if hours is greater than 12
//then session will be PM


//if (hr >=12){
	session="PM";
	
//}

// 21 hours is 9pm so it is greater than 12 so it will print in console PM
//cl(hr,min,sec);   //1 18 33


//let result=`${hr} : ${min} : ${sec} ${session}`

//cl(result);

  //const digitalClock=document.getElementById("digitalClock");
  //digitalClock.innerHTML=result;
  
  const createClock=()=>{
	   
	  let d=new Date()
	  let hr=d.getHours();
	  let min=d.getMinutes();
	  let sec=d.getSeconds();
	  let session="AM";
 
  
  if(hr>=12){
	  session="PM"
  }
  if (hr>12){
	  hr=hr-12
  }
  
 // if (sec < 10){
	//  sec = '0' + sec 
  //}
  
  //if(min<10){
	//  min = '0' + min
  //}
  
 // if(hr<10){
	//  hr='0' + hr
  //}
  
  const setZero=(num)=>{
	  if (num < 10){
		  return "0" + num
	  } else {
		  return num
	  }
  }
  //cl(setZero(5));
  
  let result=`${setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${session}`
  
 const digitalClock=document.getElementById("digitalClock");
  digitalClock.innerHTML=result;
  
  setTimeout(createClock,1000);
  
  } 
  
  createClock();
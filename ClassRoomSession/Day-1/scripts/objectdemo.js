
function show(){
    const Userdata={
         uname: document.data.uname.value,
         email:document.data.email.value ,
         city:document.data.city.value
    }
    console.log(uname)
    console.log(email)
    console.log(city)
    document.getElementById('show').innerHTML=Userdata.uname
    document.getElementById('show').innerHTML=Userdata.email
    document.getElementById('show').innerHTML=Userdata.city
    }
    
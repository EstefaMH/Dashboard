let btn = document.getElementById("btn-logout");

btn.addEventListener("click" , (e)=>{
   
    e.preventDefault();
    handleLogout();
    
})


const handleLogout = () => {
    
    let admin = new Admin();
    admin.removeUser();
  
}

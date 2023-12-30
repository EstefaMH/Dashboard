let btn = document.getElementById("btn-logout");

btn.addEventListener("click" , (e)=>{
    e.preventDefault();

    handleLogout();
})


export const handleLogout = () => {
  
    con
    let admin = new Admin();

    admin.removeUser();
  
}

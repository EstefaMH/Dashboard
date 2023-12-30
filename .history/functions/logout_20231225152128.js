let btn = document.getElementById("btn-logout");

btn.addEventListener((e)=>{
    e.preventDefault();

    handleLogout();
})


export const handleLogout = () => {
  
    let admin = new Admin();

    admin.removeUser();
  

  )
}

async function submitFormRegister() {

    const admin = new Admin();

    let form = new FormData(form_register)
    console.log(form);
    const jsonData = {};
  
    form.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    admin.userName = jsonData['userName'];
    admin.email = jsonData['email'];
    admin.password = jsonData['password'];
    
    postAdmin(admin.userName,admin.password , admin.email)
   
debugger
    response == 200 || 201 
    ? 
    handleRegister() : console.error("error " , response.status)
    
  }
  

  
  
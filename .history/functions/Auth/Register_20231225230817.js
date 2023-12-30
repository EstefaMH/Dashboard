async function submitFormRegister() {

    const admin = new Admin();
  
  
    let form = new FormData(form_register)
    console.log(form)
    const jsonData = {};
  
    form.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    admin.userName = jsonData['userName'];
    admin.email = jsonData['email'];
    admin.password = jsonData['password'];
    
    postAdmin(admin.userName,admin.password , admin.email)
    
  }
  

  
  
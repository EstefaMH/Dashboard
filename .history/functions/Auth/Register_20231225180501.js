async function submitFormRegister() {

    const admin = new Admin();
  
  
    let form = new FormData(form_register)
    const jsonData = {};
  
    form.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    admin.userName = jsonData['userName'];
    admin.email = jsonData['email'];
    admin.password = jsonData['password'];
    
    postAdmin(admin.userName,admin.password , admin.email)
    
  
    
  }
  
  async function submitFormLogin() {
  
    const admin = new Admin();
  
    let form = new FormData(form_login);
    const jsonData = {};
  
    form.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    let email = jsonData['email'];
    let password = jsonData['password'];
  
  
    let exists = await admin.validationCredentialsUser(email, password);
    console.log(exists ? exists : "esperar");
  
  
  }
  
  
  
  function submitRecoveryPassword() {
    let form = new FormData(form_login);
    const jsonData = {};
  
    form.forEach((value, key) => {
      jsonData[key] = value;
    });
  
  }
  
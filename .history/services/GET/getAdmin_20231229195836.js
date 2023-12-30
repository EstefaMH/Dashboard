async function getAdmin() {

    debugger
   

        const baseUrl = "http://localhost:3000";
       

        let response = await fetch(`${baseUrl}/admin`);
        

        return response;
    
  
}

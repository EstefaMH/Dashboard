async function getAdmin() {

    debugger
   

        const baseUrl = "http://localhost:3000";
       
        let response = await fetch(`${baseUrl}/admin`);
        let data = await response.json();

        return data;
    
  
}

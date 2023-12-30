async function getAdmin() {



        const baseUrl = "http://localhost:3000";
       

        let response = await fetch(`http://localhost:3000/admin`);
        

        return response;
    
  
}

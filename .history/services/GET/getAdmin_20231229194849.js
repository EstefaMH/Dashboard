async function getAdmin() {

    debugger
   

        const baseUrl = "http://localhost:3000";
        const headers = {
            method: "GET",
            cors: "no-cors"
        };

        let response = await fetch(`${baseUrl}/admin`);
        let data = await response.json();

        return data;
    
  
}

async function getAdmin() {


   let admin = fetch('http://localhost:3000/admin', {
        method: 'GET'
      })
       
        .catch(error => {
          console.error('Error:', error);
        });
        
    return admin
    
  
}

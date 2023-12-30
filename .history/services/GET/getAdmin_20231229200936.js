async function getAdmin() {


   let admin = fetch('http://localhost:3000/admin', {
        method: 'GET'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error! status: ' + response.status);
        }
        return response.json(); // Suponiendo que la respuesta es en formato JSON
      })
      .then(data => {
        console.log('Datos recibidos:', data);
        // Aquí puedes hacer lo que necesites con los datos recibidos
      })
        .catch(error => {
          console.error('Error:', error);
        });
        
    return admin
    
  
}

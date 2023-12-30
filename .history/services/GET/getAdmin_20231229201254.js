async function getAdmin() {


    async function getData(){
        
    }

     fetch('http://localhost:3000/admin', {
        method: 'GET'
    })
    
    let data = getData().then(response => {
            
            return response.json(); // Suponiendo que la respuesta es en formato JSON
        })

        .catch(error => {
            console.error('Error:', error);
        });

    return admin


}

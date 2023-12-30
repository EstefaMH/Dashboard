async function getAdmin() {


    async function getData(){

    }

     
    let data = getData().then(response => {
            
            return response.json(); // Suponiendo que la respuesta es en formato JSON
        })

        .catch(error => {
            console.error('Error:', error);
        });

    return admin


}

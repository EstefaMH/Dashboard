async function getAdmin() {


    async function getData() {
        let response = await fetch('http://localhost:3000/admin', {
            method: 'GET'
        })

        return response;

    }


    getData()
        .then((response)=>{
            return response;
          // Suponiendo que la respuesta es en formato JSON
        }).catch((error) => {
            console.error('Error:', error);
        });




}

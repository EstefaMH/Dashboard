async function getAdmin() {

    /*async function getData() {
        let response = await fetch('http://localhost:3000/admin', {
            method: 'GET'
        })

        return response;

    }

    getData()
        .then((response) => {
            return response;
        }).catch((error) => {
            console.error('Error:', error);
        });
*/

    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('Datos recibidos:', data);
  
}

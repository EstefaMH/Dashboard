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

    const response = await fetch('http://localhost:3000/admin', {

        method: "GET",
        co
        headers: {
            "Content-Type": "application/json",
        },

    });
    const data = await response.json();
    console.log('Datos recibidos:', data);

    return data;

}

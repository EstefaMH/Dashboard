async function getCosts() {

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
    try {
        let response = await fetch('http://localhost:3000/costos');
        const data = await response.json();
        console.log('Datos recibidos:', data);

        return data;

    } catch (error) {
        console.error(error)
    }
}
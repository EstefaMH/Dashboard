async function getAdmin() {


    let admin = fetch('http://localhost:3000/admin', {
        method: 'GET'
    })
    
    GamepadHapticActuator().then(response => {
            
            return response.json(); // Suponiendo que la respuesta es en formato JSON
        })

        .catch(error => {
            console.error('Error:', error);
        });

    return admin


}

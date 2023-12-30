function getAdmin() {

    debugger
    async function getData() {

        const baseUrl = "http://localhost:3000";
        const headers = {
            method: "GET",
            cors: "no-cors"
        };

        let response = await fetch(`${baseUrl}/admin`, headers);
        let data = await response.json();

        return data;
    }

    let admin = getData().then(function(response) => {
           return response
        })
        .catch((error) => {
            console.error(error)
            return error
        })

    return admin;

  
}

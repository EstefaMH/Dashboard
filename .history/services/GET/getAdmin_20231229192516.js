async function getAdmin() {

    debugger
    

        const baseUrl = "http://localhost:3000";
        const headers = {
            method: "GET",
            cors: "no-cors"
        };

        let response = await fetch(`${baseUrl}/admin`, headers);
        let data = await response.json()

        return data;
    }

   /* getData()
        .then((response) => {
            response.json()
            .then(data => {
                return data
            })
        })
        .catch((error) => {
            console.error(error)
            return error
        })*/

}
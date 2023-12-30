function getAdmin() {

    async function getData() {

        const baseUrl = "http://localhost:3000";
        const headers = {
            method: "GET",
            cors: 
        };

        return await fetch(`${baseUrl}/admin`, headers);
    }

    let data = getData()
        .then((response) => {
            console.log(response)
            console.log(response.body)
            return response.json()
        })
        .catch((error) => {
            console.error(error)
        })

    return data;
}

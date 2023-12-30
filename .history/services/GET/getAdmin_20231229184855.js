function getAdmin() {

    debugger
    async function getData() {

        const baseUrl = "http://localhost:3000";
        const headers = {
            method: "GET",
            cors: "no-cors"
        };

        let response = await fetch(`${baseUrl}/admin`, headers);

        return response;
    }

    let data = getData()
        .then((response) => {
            console.log(response.json)
            return response.json()
        }).then((data)=>)
        .catch((error) => {
            console.error(error)
            return error
        })

    return data;
}

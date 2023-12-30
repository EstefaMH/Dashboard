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

    let a = getData()
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error)
        })

    return a

}

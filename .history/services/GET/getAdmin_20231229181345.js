function getAdmin() {

    debugger
    async function getData() {

        const baseUrl = "http://localhost:3000";
        const headers = {
            method: "GET",
            cors: "no-cors"
        };

        return await fetch(`${baseUrl}/admin`, headers);
    }

    let data = getData()
        .then((response) => {
            console.log(response)
            
        }).then((body)=>{
            console.log(body)
            return response.json()
        })
        .catch((error) => {
            console.error(error)
        })

    return data;
}

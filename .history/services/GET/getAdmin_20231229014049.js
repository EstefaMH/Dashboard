function getAdmin() {

    debugger
    async function getData() {

        const baseUrl = "http://localhost:3000";

        return await fetch(`${baseUrl}/admin`);
    }

    let data = getData()
        .then((response) => {
            console.log(response)
            return data.json()
        })
        .catch((error) => {
            console.error(error)
        })

    return data;
}

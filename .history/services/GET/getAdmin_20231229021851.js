function getAdmin() {

    async function getData() {

        const baseUrl = "http://localhost:3000";
        const he = {
            method: "GET"
          };

        return await fetch(`${baseUrl}/admin`);
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

function getAdmin() {


    async function getData() {

        const baseUrl = "http://localhost:3000";

        return await fetch(`${baseUrl}/admin`);
    }

    let data = getData()
       .then(data => {
        console.log*ds
            return data.json()
        })
        .catch((error) => {
            console.error(error)
        })

    return data;
}

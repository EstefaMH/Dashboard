function getAdmin() {
    
    async function getData(){
        const baseUrl = "http://localhost:3000";

        const headers = {
            method: "GET",
        }

       return response = await fetch(`${baseUrl}/admin`, headers);
    }

    let data = getData()
        .then((response) => {
            console.log(response)

        }).then((data) => {
            return data.json()
        })-atch((error)=>{
            console.error(error)
        })
    
    return data;
}

function getAdmin() {
    
    async function getData(){
        const baseUrl = "http://localhost:3000";

        const headers = {
            method: "GET",
        }

       return response = await fetch(`${baseUrl}/admin`, headers);
    }

    let data = getAdmin()
        .then((response) => {
            console.log(response)
            return response;
        })
        .catch((error)=>{
            console.error(error)
        })
    
    return data;
}

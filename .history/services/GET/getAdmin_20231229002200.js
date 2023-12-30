function getAdmin() {
    
    async function getData(){
        const baseUrl = "http://localhost:3000";

        const headers = {
            method: "GET",
        }

        const response = await fetch(`${baseUrl}/admin`, headers);
    }

    let dgetAdmin()
        .then((response) => {
            console.log(response)
            return response;
        })
        .catch((error)=>{
            console.error(error)
        })
    
    return 
}

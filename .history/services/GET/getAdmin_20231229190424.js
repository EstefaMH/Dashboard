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
             response.json().then(data =>{
                .then(response => response.json()).then((data)=>{
                    console.log(data)
                   // let adminData = data.find(admin => admin.email === email);
                   // console.log(adminData)
        
                    return adminData;
                  
                })
                .catch((error) => console.error("Error en la solicitud " , error))
             })
        })
        .catch((error) => {
            console.error(error)
            return error
        })

    return data;
}

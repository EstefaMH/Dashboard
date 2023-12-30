async function postAdmin(userName,password ,email){

    console.log(Admin);

    const baseUrl = "http://localhost:3000";

    const headers = {
        method: "POST", 
        mode: "no-cors", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userName , password , email})
    }

    return await fetch(`${baseUrl}/admin`, headers)
}

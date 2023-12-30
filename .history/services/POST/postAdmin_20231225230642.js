async function postAdmin(userName,password , admin.email){

    console.log(Admin);

    const baseUrl = "http://localhost:3000";

    const headers = {
        method: "POST", 
        mode: "no-cors", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Admin)
    }

    return await fetch(`${baseUrl}/admin`, headers)
}

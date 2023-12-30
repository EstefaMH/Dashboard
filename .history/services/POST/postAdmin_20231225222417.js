async function postAdmin(userN){

    const baseUrl = "http://localhost:3000";

    const headers = {
        method: "POST", 
        mode: "no-cors", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }

    return await fetch(`${baseUrl}/admin`, headers)
}

async function postAdmin(userName,password ,email){

    console.log(Admin);

    const baseUrl = "http://localhost:3000";

    const data =  {userName , password , email}

    const headers = {
        method: "POST", 
        mode: "no-cors", 
        headers: {
            "Content-Type": "application/json",
        },
       
    }

    return await fetch(`${baseUrl}/admin`, headers, {body: JSON.stringify(data)})
}

async function postAdmin(userName, password, email) {

    try {

        const baseUrl = "http://localhost:3000";

        const data = { userName, password, email }

        const headers = {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        }

        const response = await fetch(`${baseUrl}/admin`, headers);
        
        response.status == 200 || 201 
        ? 
        handleRegister() : console.error("error" , response.status)
        


    } catch (error) {
        console.error("Error:", error);
    }

    
}
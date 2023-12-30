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

debugger
        const response = await fetch(`${baseUrl}/admin`, headers);
        const status = response.status;

        status == 201 || 200 ? location.href="index.html" : console.error(status);
        
    } catch (error) {
        console.error("Error:", error);
    }

    
}

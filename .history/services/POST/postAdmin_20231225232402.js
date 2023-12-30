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

        const result = await response.json();
        console.log("Success:", result);

        const responser = await fetch(`${baseUrl}/admin`, headers);


    } catch (error) {
        console.error("Error:", error);
    }

    
}
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
        const result = await response.json();
        console.log("Success:", result);

        return true;

    } catch (error) {
        console.error("Error:", error);
        return fa
    }

    
}

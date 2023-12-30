async function postCosts(name, type, value) {

    try {

        const baseUrl = "http://localhost:3000";

        const data = { name , type, value }

        const headers = {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        }

        const response = await fetch(`${baseUrl}/costos`, headers);

        return response.json();


    } catch (error) {
        console.error("Error:", error);
    }


}

async function getAdmin() {
    try {

        const baseUrl = "http://localhost:3000";

        const headers = {
            method: "GET",
        }

        const response = await fetch(`${baseUrl}/admin`, headers);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

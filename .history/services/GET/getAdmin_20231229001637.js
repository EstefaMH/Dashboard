const getAdmin = () => {
    try {

        const baseUrl = "http://localhost:3000";

        const data = { userName, password, email }

        const headers = {
            method: "GET",
        }

        const response = await fetch(`${baseUrl}/admin`, headers);
        
      return response.status;


    } catch (error) {
        console.error("Error:", error);
    }
}

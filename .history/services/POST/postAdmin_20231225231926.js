async function postAdmin(userName, password, email) {

    console.log(Admin);

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

    tr

    return await fetch(`${baseUrl}/admin`, headers)
}

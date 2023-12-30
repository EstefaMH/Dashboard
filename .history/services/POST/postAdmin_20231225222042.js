const postAdmin = () => {

    const baseUrl = "http://localhost:3000";

    const headers = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        }
    }

    let response = await fetch(`${baseUrl}/admin`, {

    })
}

const postAdmin = () => {
  
    const baseUrl = "http://localhost:3000";

    const headers =  {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }

    let response  = await fetch(`${baseUrl}/admin` , {
        
    })
}

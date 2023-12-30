class Admin {

    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    setUser(userName, email, password) {
        localStorage.setItem("userName", userName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }

    removeUser() {
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        localStorage.removeItem("password");

        location.href = ("login.html");
    }


    async findUser(email) {
        debugger
        let response = getAdmin().then((data) => {
            data
            let adminData = data.find(admin => admin.email === email);
            console.log(adminData)

            return adminData;

        })
        .catch((error) => console.error("Error en la solicitud ", error))
        

        return response;
    }

    async validationCredentialsUser(emailForm, passwordForm) {

        let user = await this.findUser(emailForm);
        console.log(user);

        if (user == undefined) {
            Swal.fire({
                title: "Usuario no encontrado",
                text: "Verifica tu email o registrate",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Registrarme",
                cancelButtonText: "Cancelar",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "register.html";
                }
            });
        }


        let { userName, password, email } = user


        if (emailForm != email) {

            Swal.fire({
                title: "Credenciales incorrectas",
                text: "El email ingresado es incorrecto",
                icon: "error"
            });

        } else if (passwordForm != password) {
            Swal.fire({
                title: "Credenciales incorrectas",
                text: "La contraseña ingresada es incorrecta",
                icon: "error"
            });

        } else {
            location.href = "dashboard.html";
            this.setUser(userName, email, password)
        }
    }

}




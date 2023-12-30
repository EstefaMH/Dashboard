const ValidationCosts = () => {
    
        let costos;
        do {
            costos = prompt("Ingresa tus costos fijos : ");
        
            if(costos == ""){
                alert("Completa la información");
            }    
        } while (costos == "");
        
        return costos;
    
}

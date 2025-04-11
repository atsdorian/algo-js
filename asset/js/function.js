function addition(a, b) {
    return a + b;

}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function validateNumber(input) {
    let number = parseFloat(input)
    if (isNaN(input)) {
        console.log('Invalid number');
        return null;
    }
    return number;

}
let Boolean = true
while (Boolean) {
    let string = prompt(

        "Quelle opération veux-tu faire ?\n"+
        "1 - Addition\n"+
        "2 - Soustraction\n"+
        "3 - Multiplication\n"+
        "4 - Division\n"+
        "5 -Quitter"
    );

    switch (string) {

        case "1":
            let number1 = validateNumber(prompt ("Premier nombre :"));
            let number2 = validateNumber(prompt ("Second nombre :"));
            if (number1 !==null && number2 !== null) {
                console.log(`resultat : ${addition(number1, number2)}`);
            }else{
                console.log("entrée invalide. Veuillez entrer des nombres");
            }
            break;
        
            case "2":
            let number3 = validateNumber(prompt ("Premier nombre :"));
            let number4 = validateNumber(prompt ("Second nombre :"));
            if (number3 !==null && number4 !== null) {
                console.log(`resultat : ${soustraction(number3, number4)}`);
            }else{
                console.log("entrée invalide. Veuillez entrer des nombres");
            }
            break;

            case "3":
            let number5 = validateNumber(prompt ("Premier nombre :"));
            let number6 = validateNumber(prompt ("Second nombre :"));
            if (number5 !==null && number6 !== null) {
                console.log(`resultat : ${multiplication(number5, number6)}`);
            }else{
                console.log("entrée invalide. Veuillez entrer des nombres");
            }
            break;

            case "4":
            let number7 = validateNumber(prompt ("Premier nombre :"));
            let number8 = validateNumber(prompt ("Second nombre :"));
            if (number1 !==null && number2 !== null) {
                console.log(`resultat : ${division(number7, number8)}`);
            }else{
                console.log("entrée invalide. Veuillez entrer des nombres");
            }
            break;
        
            case "5":
                console.log("merci d'avoir utilisé la calculatrice; Au revoir !");
                continuer= false
                break;

                default:
                    console.log("Choix invalide, veuillez choisir un nombre entre 1 et 5");
                    break;
                    
        }}
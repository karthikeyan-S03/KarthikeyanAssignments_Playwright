let score=87

switch(true){
    case (score>=90):
        console.log("Obtained Grade is A")
        break;

    case (score>=80 && score<=89):
        console.log("Obtained Grade is B")
        break;

    case (score>=70 && score<=79):
        console.log("Obtained Grade is C")
        break;

    case (score>=60 && score<=69):
        console.log("Obtained Grade is D")
        break;

    default:
        console.log("Obtained Grade is F")
        break;
    }
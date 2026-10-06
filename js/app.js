const seats = 12;
let enrolled = 11;

switch(enrolled) {
    case 12: {
        console.log("nie ma wolnych miejsc");
        break;
    }
    case 0: {
        console.log("wszystkie miejsca sa wolne");
        break;
    }
    default: {
        console.log(`wolne ${seats-enrolled} z ${seats} miejsc`);
        break;
    }
}
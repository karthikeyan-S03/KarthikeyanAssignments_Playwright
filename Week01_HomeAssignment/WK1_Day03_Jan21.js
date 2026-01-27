let browserName='Chrome'
let testType='Smoke'

if (browserName='Chrome'){
    console.log("Launching Chrome Browser . . .");
} else {
    console.log("Launching default Browser . . .");
}

switch (testType){
    case testType="Regression":
        console.log("Running Regression Tests . . .")
        break;
    case testType="Sanity":
        console.log("Running Sanity Tests . . .")
        break;
    case testType="Smoke":
        console.log("Running Smoke Tests . . .")
        break;
    default:
        console.log("Running general Tests . . .")
        break;
}
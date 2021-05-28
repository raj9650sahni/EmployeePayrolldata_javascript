//UC-1: 6 Digit Pin Code

let PinRegex = RegExp('^[1-9]{1}[0-9]{2}[\\s]{0,1}[0-9]{3}$');

let pincode_1 = "400088";
let pincode_2 = "A400088";
let pincode_3 = "400088B";
let pincode_4 = "400 088";

check_validity(pincode_1);

//UC-2: Restrict Alphabet at First Place
check_validity(pincode_2);

//UC-3: Restrict Alphabet at Last Place
check_validity(pincode_3);

//UC-4: Validate Space in the Middle
check_validity(pincode_4);

function check_validity(sample){
    let output = PinRegex.test(sample);
    console.log(sample+" Pincode is Valid: "+output);
}
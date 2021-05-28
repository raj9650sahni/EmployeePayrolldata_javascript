let PinRegex = RegExp('^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$');

//UC-1: Check Initial Part
let email_1 = "abc";
validityCheck(email_1);

//UC-2: Chect @ and Part Latter it.
let email_2 = "abc@bridgelab";
validityCheck(email_2);

//UC-3: Add . after Bridgelab
let email_3 = "abc.@bridgelab.co";
validityCheck(email_3);

//UC-4: Handling Optional Part
let email_4 = "abc.x_yz@bridgelabz.co.in";
validityCheck(email_4);

//UC-5: Final Email Address
let email_5 = "abc.xyz@bridgelabz.co.in";
validityCheck(email_5);


function validityCheck(sample){
    let output = PinRegex.test(sample);
    console.log(sample+" \nEmail is Valid: "+output);
}

const is_part_time = 1;
const is_Full_Time  =2;
const Part_Time_hrs = 4;
const is_Full_Time_hrs = 8;
const Wage_Per_Hr = 20;

//uc1

{
const is_Absent  =0;
let empcheck = Math.floor(Math.random() * 10)%2;
if(empcheck==is_Absent){
    console.log("UC1 - Employee is Absent");
} else{
    console.log("UC1 - Employee is PRESENT");
}
}





//uc2 switch case

{
const is_part_time = 1;
const is_Full_Time  =2;
const Part_Time_hrs = 4;
const is_Full_Time_hrs = 8;
const Wage_Per_Hr = 20;

let emphrs = 0;
let empcheck = Math.floor(Math.random() * 10) % 3;
switch (empcheck) {
    case is_part_time:
        emphrs = Part_Time_hrs;
        break;
    case is_Full_Time:
        emphrs = is_Full_Time_hrs;
        break;
    default:
        emphrs=0;

}

let empWage = emphrs * Wage_Per_Hr;
console.log("Uc2 - Emp-wage:" + empWage);
}



//uc-2 
{
const is_part_time = 1;
const is_Full_Time  =2;
const Part_Time_hrs = 4;
const is_Full_Time_hrs = 8;
const Wage_Per_Hr = 20;
function getWorkingHrs(empcheck){

    switch (empcheck) {
        case is_part_time:
            return Part_Time_hrs;
    
        case is_Full_Time:
           return is_Full_Time_hrs;
         
        default:
            return 0;

}
}

let empcheck = Math.floor(Math.random()*10)%3;
let emphrs =getWorkingHrs(empcheck);
let empWage = emphrs * Wage_Per_Hr;
console.log("UC -3 - Emp Wage:" + empWage);

}


//uc4

{   const Wage_Per_Hr = 20;
    const Num_of_working_Days = 20;
    let totalEmpHrs = 0;

    for (let day = 0;day<Num_of_working_Days;day++){
        let empcheck = Math.floor(Math.random() * 10 )%3;
        totalEmpHrs += getWorkingHrs(empcheck);
    }
    let empWage = totalEmpHrs * Wage_Per_Hr;
    console.log("Uc -4 Total Hrs : " + totalEmpHrs + " Emp Wage " + empWage);

}

//uc -5 
{
    const Max_Hrs_In_Month = 160;
    const Num_of_working_Days = 20;
    let totalEmpHrs = 0;
    let Total_Working_Days = 0;
    const Wage_Per_Hr = 20;

    while(totalEmpHrs <= Max_Hrs_In_Month  && Total_Working_Days<= Num_of_working_Days){
        let empcheck = Math.floor(Math.random() * 10 )%3;
        totalEmpHrs += getWorkingHrs(empcheck);
        Total_Working_Days +=1;
    }

    let empWage = totalEmpHrs * Wage_Per_Hr;
    console.log("Uc -5 Total Hrs : " + totalEmpHrs + " Emp Wage " + empWage);


}

//uc-6
function calcDailyWage(emphrs) {
    return emphrs*Wage_Per_Hr;
}

{
    const Max_Hrs_In_Month = 160;
    const Num_of_working_Days=20;
    let totalEmpHrs = 0;
    let Total_Working_Days = 0;
    let empDailyWageArr =  new Array();
    while (totalEmpHrs <=Max_Hrs_In_Month && Total_Working_Days <Num_of_working_Days) {
        Total_Working_Days++;
        let empcheck = Math.floor(Math.random()*10)%3;
        let emphrs = getWorkingHrs(empcheck);
        totalEmpHrs += emphrs;
        empDailyWageArr.push(calcDailyWage(emphrs));
    }

    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC6 -  Total Days: " + Total_Working_Days + " total Hrs: "+ totalEmpHrs + " emp Wage : " + empWage);

    console.log(empDailyWageArr);


// this is for conforming the total wage in the array to total wage we have find out my calcDailyWage Method
    let sum = 0;
    for (let i=0;i<empDailyWageArr.length;i++){
        sum = sum + empDailyWageArr[i];
    }
    console.log(sum);


    // uc - 7A usingt forEach method

let totEmpWage = 0;
function sumWage(dailywage) {
    totEmpWage += dailywage;
}

empDailyWageArr.forEach(sumWage);
console.log("UC-7A -  Total Days: " + Total_Working_Days + " total Hrs: "+ totalEmpHrs + " emp Wage : " + totEmpWage);




//using Reduce method

function totalWages(dailywage,totalWage) {
    return totalWage + dailywage;
}
console.log( "Uc 7A - Emp Wage with reduce" + empDailyWageArr.reduce(totalWages,0));




//uC 7B 

let DailyCntr = 0;
function mapDayWithWage(dailywage){
    DailyCntr++;
    return DailyCntr + "  =  "  + dailywage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage );
console.log("UC 7B - daily Wage Map");
console.log(mapDayWithWageArr);




//uc 7-c 
function fullTimeWage(dailywage){
    return dailywage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC 7c - Daily Wage filter When FullTime wage Earned");
console.log(fullDayWageArr);



//uc 7D

function FindfullTimeWage(dailywage){
    return dailywage.includes("160");
}
console.log("UC 7D first Time Full time Wage are earned on Day : " + mapDayWithWageArr.find(FindfullTimeWage)  );


//UC 7E
//check is every Element of  Full Time Wage is truly Holding Full Time Wage
function isAllFullTimeWage(dailywage){
    return dailywage.includes("160");
}


console.log("UC 7E - check all elements have full time :"  + fullDayWageArr.every(isAllFullTimeWage));


//UC -7F check if is there is any part timr wage
function isAnyPartTimeWage(dailywage){
    return dailywage.includes("80");
}
console.log("UC - 7F - check is there is any part Time Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));



//UC 7G - find the number of days employees worked

function totalDaysWorked(numOfDays,dailywage) {
    if (dailywage>0){
        return numOfDays + 1;
    }

    return numOfDays;
}
console.log("UC -7G - number of days emp worked : " +  empDailyWageArr.reduce(totalDaysWorked,0));

}

//uc -8 storing daily Wage in a map

{
    const Max_Hrs_In_Month = 160;
    const Num_of_working_Days = 20;
    let totalEmpHrs = 0;
    let Total_Working_Days = 0;
    let empDailyWageArr = new Array();
    let empDailyWagemap = new Map();
    function calcDailyWage(emphrs){
        return emphrs * Wage_Per_Hr;
    }

    while ( totalEmpHrs<=Max_Hrs_In_Month && Total_Working_Days < Num_of_working_Days){
        Total_Working_Days ++;
        let empcheck = Math.floor(Math.random()* 10)%3;
        let emphrs = getWorkingHrs(empcheck);
        totalEmpHrs += emphrs;
        empDailyWageArr.push(calcDailyWage(emphrs));
        empDailyWagemap.set(Total_Working_Days,calcDailyWage(emphrs));
}
      
    console.log(empDailyWagemap);
    function totalWages(totalWage,dailywage) {
        return totalWage + dailywage;
    }
    console.log("UC - 8 Emp wage map total Hrs ; " + Array.from(empDailyWagemap.values()).reduce(totalWages,0));



//uc -9 arrow functions


    const findTotal = (totalval,dailyVal) => { 
        return totalval + dailyVal;
    }

    let count =0;
    let totalHours =  Array.from(empDailyWagemap.values()).reduce(findTotal,0);
    let totalSalary = empDailyWageArr.filter(dailW => dailW>0).reduce(findTotal,0);
    console.log("UC9A - Emp Wage with Arrow :" + "total Hours :" + totalHours + " total Wages : " + totalSalary);


    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();

    empDailyWagemap.forEach((value,key,map) => {
        if (value==8) {
            fullWorkingDays.push(key);
        }
        if (value==4) {
            partWorkingDays.push(key);
        }
        else {
            nonWorkingDays.push(key);
        }

    })
    console.log(fullWorkingDays);
    console.log(partWorkingDays);
    console.log(nonWorkingDays);





    


}

{
    // uc 10 Object creations
    const Max_Hrs_In_Month = 160;
    const Num_of_working_Days = 20;
    let totalEmpHrs = 0;
    let Total_Working_Days = 0;
    let empDailyHrsAndWageArr = new Array();
    while ( totalEmpHrs <= Max_Hrs_In_Month && Total_Working_Days <Num_of_working_Days){
        Total_Working_Days++;
        let empcheck = Math.floor(Math.random()*10)%3;
        let emphrs = getWorkingHrs(empcheck);
        totalEmpHrs += emphrs;
        empDailyHrsAndWageArr.push ({ dayNum:Total_Working_Days,
        dailyHours:emphrs,
        dailWage:calcDailyWage(emphrs),
        toString() {
            return "\nday" + this.dayNum + '=> working hours is ' + this.dailyHours + 'And Wage Earned is =' + this.dailWage
        },
    });
    }
    console.log("UC 10 showing Daily Hours worked and Wage earned is: " + empDailyHrsAndWageArr);

}




    

















//write first method
function firstLast6(array) {
    if(array[0] == 6 || array[array.length-1] == 6){
        return true;
    } else {
        return false;
    }
}

//write second method
function has23(array) {
    if(array[0] == 2 || array[1] == 2 || array[0] == 3 || array[1] == 3){
        return true;
    } else {
        return false;
    }
}

//write third method
function fix23(array){
    if(array[0] == 2 && array[1] == 3){
        return [2,0,array[2]];
    } else {
        if(array[1] == 2 && array[2] == 3){
            return [array[0],2,0];
        } else {
            return array;
        }
    }
}

//write fourth method
function countYZ(string){
    var number = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i + 1] == " " && (string[i] == "z" || string[i] == "Z" || string[i] == "y" || string[i] == "Y")){
            number++;
        }
    }
    if(string[string.length - 1] == "z" || string[string.length - 1] == "Z" || string[string.length - 1] == "y" || string[string.length - 1] == "Y"){
        number++;
    }
    return number;
}

//write fifth method
function endOther(string1, string2){
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    if(string1.length >= string2.length){
        if(string2 == string1.substring(string1.length - string2.length, string1.length)){
            return true;
        } else {
            return false;
        }
    }
    if(string1.length < string2.length){
        if(string1 == string2.substring(string2.length - string1.length, string2.length)){
            return true;
        } else {
            return false;
        }
    }
    if(string1 == string2){
        return true;
    }
}

//write sixth method
function starOut(string){
    var newString = "";
    for(var i = 0; i < string.length; i++){
        if(string[i] != "*"){
            if(string[i + 1] != "*"){
                if(string[i - 1] != "*"){
                    newString += string[i];
                }
            }
        }
    }
    return newString;
}

//write seventh method
function getSandwich(str){
    var breadCount = 0;
    for(var i = 0; i < str.length; i++){
        if(str.substring(i, i+5) == "bread"){
            breadCount += 1;
        }
    }
    if(breadCount >= 2){
        return str.substring(str.indexOf("bread")+5, str.lastIndexOf("bread"));
    }else{
        return "";
    }
}

//write eigth method
function canBalance(array){
    var sum1 = 0;
    var result = false;
    for(var i = 0; i < array.length; i++){
        var sum2 = 0;
        sum1 += array[i];
        for(var j = i + 1; j < array.length; j++){
            sum2 += array[j];
        }
        if(sum1 == sum2){
            result = true;
        }
    }
    return result;
}

//write ninth method
function countClumps(array){
    var counter = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == array[i + 1] && array[i] != array[i - 1]){
            counter++;
        }
    }
    return counter;
}

//write tenth method
function evenlySpaced(a,b,c){
    if(a-b==b-c || a-c==c-b || b-c==c-a || b-a==a-c || c-a==a-b || c-b == b-a){
        return true;
    } else {
        return false;
    }
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstLast6([3,6,5,6]);
    document.getElementById("output").innerHTML += has23([0,1]);
    document.getElementById("output").innerHTML += fix23([0,1,3]);
    document.getElementById("output").innerHTML += countYZ("fez day");
    document.getElementById("output").innerHTML += endOther("abc", "Hiabc");
    document.getElementById("output").innerHTML += starOut("ab*cd");
    document.getElementById("output").innerHTML += getSandwich("breadjambread");
    document.getElementById("output").innerHTML += canBalance([3,6,5,6]);
    document.getElementById("output").innerHTML += countClumps([3,6,5,6]);
    document.getElementById("output").innerHTML += evenlySpaced([0,3,5]);
}

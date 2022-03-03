//Get the value from the page

//Controller Function
function getInput(){

    document.getElementById('alert').classList.add("invisible");

    let inputstring = document.getElementById('inputString').value;

    let revstring = reverseString(inputstring);

    display(revstring);
}

//Reverse the String
//logic function
function reverseString(inputstring){

    let revstring=[];

    // for loop

    for (let index = inputstring.length; index >= 0 ; index--) {
        revstring += inputstring[index];  
    }
    return revstring;
}

//Display the Message
//View function
function display(revstring){

    //make the alert visible
    document.getElementById('alert').classList.remove("invisible");

    //display the message
    document.getElementById('msg').innerHTML = `Your String reversed is: ${revstring}`;
}
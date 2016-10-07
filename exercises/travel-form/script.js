document.getElementById("submit").addEventListener("click", printForm);

function printForm(){
    var form = document.forms.travelForm;
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = isChecked(form.gender);
    var destination = form.destination.options[form.destination.options.selectedIndex].value;
    var diet = isChecked(form.diet);
    alert("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender.join(", ") + "\n" + "Destination: " + destination + "\n" + "Dietary Restrictions: " + diet.join(", "));
}

function isChecked(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i].checked){
            newArr.push(arr[i].value);
        }
    }
    return newArr;
}
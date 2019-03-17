function s1() 
{

    var fruits = document.getElementById("myInput")
    .value;

    switch(fruits) 
    {
    case "1":
        document.write("" + "This is first choice!" + "");
        break;
    case "2":
        document.write("" + "This is second choice!" + "");
        break;
    case "3":
        document.write("" + "This is third choice!" + "");
        break;
    default:
        document.write("" + "Wrong choice! Try again" + "");

    }

}
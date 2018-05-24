function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.


    // get form values
    var adjective = document.getElementById('adjective').value;
    var noun = document.getElementById('noun').value;
    var plural_noun = document.getElementById('plural_noun').value;
    var person = document.getElementById('person').value;
    var adjective2 = document.getElementById('adjective2').value;
    var clothing = document.getElementById('clothing').value;
    var noun2 = document.getElementById('noun2').value;
    var city = document.getElementById('city').value;
    var plural_noun2 = document.getElementById('plural_noun2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var body_part = document.getElementById('body_part').value;
    var letterofAlphabet = document.getElementById('letterofAlphabet').value;
    var celebrity = document.getElementById('celebrity').value;
    var plural_noun3 = document.getElementById('plural_noun3').value;
    var adjective4 = document.getElementById('adjective4').value;
    var place = document.getElementById('place').value;
    var body_part2 = document.getElementById('body_part2').value;
    var adjective5 = document.getElementById('adjective5').value;
    var adjective6 = document.getElementById('adjective6').value;
    var verb = document.getElementById('verb').value;
    var plural_noun4 = document.getElementById('plural_noun4').value;
    var number = document.getElementById('number').value;
    // Set title of story.
    var title = "Books for " + person;


    // Build story.
    var paragraph1 = "There are many " + adjective + " ways to choose a/an" + noun + " to read. First you could ask for recommendation from your friends or " + plural_noun + ". Just don't ask Aunt " + person  + " she only reads " + adjective2 + " books with " + clothing + " ripping goddessses on the cover. If your friends and family are no help, try checking out the " + noun2 + " Review in The " + city + " times";


    var paragraph2 = "If the " + plural_noun2 + " featured there are too " + adjective3 + " for your taste, try something a little more low " + body_part + " , like " + letterofAlphabet + " : The " + celebrity + " Magazine, or " + plural_noun3 + " Magazine. You could also choose a book the " + adjective4 + " fashioned way. Head to your local library or " + place + " and browse the shelves until something catches your " + body_part2 + "." ;

    var paragraph3 = " Or, you could save yourself a whole lot of " + adjective5 + " trouble and log on to www.bookish.com, the " + adjective6 + " new website to " + verb + " for books! With all the time you'll save not having to search for " + plural_noun4 + " you can read " + number + " more books!";


    // Display story.
    document.getElementById('title').innerHTML = title;
    document.getElementById('one').innerHTML = paragraph1;
    document.getElementById('two').innerHTML = paragraph2;
    document.getElementById('three').innerHTML = paragraph3;
}
function changeBackground() {
    // javascript can change CSS
    document.body.style.backgroundColor = "#bae2ff";
}
function font() {
    // javascript can change specific CSS elements
    document.getElementById('title').style.fontFamily = "Lobster Two";
}

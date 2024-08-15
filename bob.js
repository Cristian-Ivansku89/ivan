var arcHive = [
    bookOne = {
         codIdentificare: 1,
         numeBook: "Cautànd MeinKaumpf",
         author: "Christi",
         dataCreatii: 2030,
    },
    
    bookTwo = {
        codIdentificare: 2,
        numeBook: "The Watcher",
        author:"Marius",
        dataCreatii: 2035,
    },

    bookThree = {
        codIdentificare: 3,
        numeBook:"killing a language",
        author: "Lau",
        dataCreatii: 2033,
    },

];
/*var cautare = prompt("Display your number");
console.log(arcHive.book.codIdentificare);*/

var finding = prompt("Hello,which book do you want to choose?");
console.log(finding);
if(finding == bookOne.codIdentificare){
    var finding1 = alert(`Ati ales cartea ${bookOne.numeBook},scrisa de la autor ${bookOne.author} in ${bookOne.dataCreatii}`)
    console.log(finding1);
}
if(finding == bookTwo.codIdentificare){
    var finding2 = alert(`Ati ales cartea ${bookTwo.numeBook},scrisa de la autor ${bookTwo.author} in ${bookTwo.dataCreatii}`)
    console.log(finding2);
}
if(finding == bookThree.codIdentificare){
    var finding3 = alert(`Ati ales cartea ${bookThree.numeBook},scrisa de la autor ${bookThree.author} in ${bookThree.dataCreatii}`)
    console.log(finding3);
}
if(finding > 3){
    var finding4 = alert("Nu avem aceastà carte");
    console.log(finding4);
}
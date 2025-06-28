// mission: remove all the HTML tag an only keep the content inside

function sanitizeInput(input:string):string {
    return input.replace(/<[^>]*>/g,"").trim();
}



console.log(sanitizeInput("<p>Hello</p>") );         // "Hello"
console.log(sanitizeInput("Hi <b>there</b>!")) ;     // "Hi there!"
sanitizeInput("<script>alert(1)</script>") ;// "alert(1)"
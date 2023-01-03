let btnQuote = document.getElementsByTagName('button');
let paragraphQuote = document.getElementById('quote');
let paragraphAuther = document.getElementById('auther');
let quotes = [{quote:"Be yourself; everyone else is already taken.",auther:"― Oscar Wilde"},
{quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",auther:"― Marilyn Monroe"},
{quote:"So many books, so little time.",auther:"― Frank Zappa "},
{quote:"A room without books is like a body without a soul.",auther:"― Marcus Tullius Cicero"},
{quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",auther:"― Bernard M. Baruch"}];

function getQuote(){
    let x = Math.floor(Math.random()*quotes.length);
    paragraphQuote.innerHTML = quotes[x].quote;
    paragraphAuther.innerHTML = quotes[x].auther;
}

let newquote = document.querySelector("button");
let person = document.querySelector(".person");
let quote = document.querySelector(".text_quote");
const quotes = [
  {
    quote: `"Tell me and I forget.Teach me and I learn.Involve me and I remember"`,
    person: "R.NOMA",
  },
  {
    quote: `"Your time is limited,so don't waste it living someone else's life"`,
    person: "STEVE JOBS",
  },
  {
    quote: `"It doesn't matter how slowly you go as long as you don't stop."`,
    person: "Confucius",
  },
  {
    quote: `"Our lives begin to end the day we become silent about things that matter"`,
    person: "Martin Luther King Jr",
  },
  {
    quote: `"Remeber that not getting what you want is sometimes a wonderful stroke of luck"`,
    person: "Dalai Lama",
  },
  {
    quote: `"The journey of a thousand miles begins with one step"`,
    person: "Lao tzu",
  },
  {
    quote: `"If you look at what you have in life, you will have more .If you look at what you don't have in life, you'll never have enough"`,
    person: "Oprah Winfrey",
  },
  {
    quote: `"Forgiveness is simply freeing ourselves from wanting to punish."`,
    person: "NANYONGA.R",
  },

  {
    quote: `"We cannot solve problems with the kind of thinking we employed when we came up with them.”`,
    person: "— Albert Einstein",
  },
  {
    quote: `“When you change your thoughts, remember to also change your world."`,
    person: "——Norman Vincent Peale",
  },
  {
    quote: `“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together."`,
    person: "——Diane McLaren",
  },
];
newquote.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  person.innerHTML = quotes[random].person;
});

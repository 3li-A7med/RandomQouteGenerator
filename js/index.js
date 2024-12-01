
function getQuote() {
    const names = [
        "― Oscar Wilde", "― Marilyn Monroe", "― Frank Zappa", "― Albert Einstein",
        "― Marcus Tullius Cicero", "― Bernard M. Baruch", "― William W. Purkey", 
        "― Dr. Seuss", "― Mae West", "― Mahatma Gandhi", "― Robert Frost", 
        "― J.K. Rowling", "― Albert Camus", "― Mark Twain", "― Maya Angelou", 
        "― Elbert Hubbard"
    ];

    const quotes = [
        "“Be yourself; everyone else is already taken.”",
        "“I'm selfish, impatient, and a little insecure. ...”",
        "“So many books, so little time.”",
        "“Two things are infinite: the universe and human stupidity ...”",
        "“A room without books is like a body without a soul.”",
        "“Be who you are and say what you feel ...”",
        "“You know you're in love when you can't fall asleep ...”",
        "“You only live once, but if you do it right, once is enough.”",
        "“Be the change that you wish to see in the world.”",
        "“In three words I can sum up everything ...”",
        "“If you want to know what a man's like ...”",
        "“If you tell the truth, you don't have to remember anything.”",
        "“A friend is someone who knows all about you and still loves you.”",
        "“To live is the rarest thing in the world ...”",
        "“Always forgive your enemies; nothing annoys them so much.”"
    ];



    const num = Math.floor(Math.random() * quotes.length);

    document.getElementById("demo").textContent = quotes[num];
    document.getElementById("demoN").textContent = names[num];
}

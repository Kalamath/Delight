"use strict";

//Example file for seeding the database------------------------------------------------------------


 const lkp_category =
 [
     { name: "Food" },
     { name: "Fitness" },
     { name: "Music" },
     { name: "Tech" },
     { name: "Movies" },
     { name: "Reading" },
     { name: "Gaming" },
     { name: "Fashion" },
     { name: "Travel" },
     { name: "Politics" },
     { name: "Sports" },
     { name: "Anime/Cartoons" }
 ];

 const lkp_interests =
 [
     { interest_name: "Sushi", category_id: 1 },
     { interest_name: "Spaghett", category_id: 1 },
     { interest_name: "Coffee", category_id: 1 },
     { interest_name: "Greek", category_id: 1 },
     { interest_name: "Ginger Shots", fk_category_id: 1 },
     { interest_name: "Lasagna", fk_category_id: 1 },
     { interest_name: "Tofu Scramble", category_id: 1 },
     { interest_name: "Kale Salads", category_id: 1 },
     { interest_name: "Smoothie", category_id: 1 },
     { interest_name: "IHOP Grand Slam", category_id: 1 },
     { interest_name: "Hiking", category_id: 2 },
     { interest_name: "Bodybuilding", category_id: 2 },
     { interest_name: "Calisthenics", category_id: 2 },
     { interest_name: "Jogging", category_id: 2 },
     { interest_name: "Yoga", category_id: 2 },
     { interest_name: "Pilates", category_id: 2 },
     { interest_name: "Cycling", category_id: 2 },
     { interest_name: "Martial Arts", category_id: 2 },     
     { interest_name: "Water Aerobics", category_id: 2 },
     { interest_name: "Surfing", category_id: 2 },
     { interest_name: "Celine Dion", category_id: 3 },
     { interest_name: "Rihanna", category_id: 3 },
     { interest_name: "Drake", category_id: 3 },
     { interest_name: "The Rolling Stones", category_id: 3 },
     { interest_name: "Michael Jackson", category_id: 3 },
     { interest_name: "Elvis Presley", category_id: 3 },
     { interest_name: "Bob Dylan", category_id: 3 },
     { interest_name: "Eminem", category_id: 3 },
     { interest_name: "Jay-Z", category_id: 3 },
     { interest_name: "Beyonce", category_id: 3 },
     { interest_name: "Apple", category_id: 4 },
     { interest_name: "Android", category_id: 4 },
     { interest_name: "Facebook", category_id: 4 },
     { interest_name: "Snapchat", category_id: 4 },
     { interest_name: "Twitter", category_id: 4 },
     { interest_name: "Drones", category_id: 4 },
     { interest_name: "3D Printing", category_id: 4 },
     { interest_name: "Robotics", category_id: 4 },
     { interest_name: "Web Development", category_id: 4 },
     { interest_name: "The Dark Knight", category_id: 5 },
     { interest_name: "Deadpool", category_id: 5 },
     { interest_name: "The Notebook", category_id: 5 },
     { interest_name: "Men In Black", category_id: 5 },
     { interest_name: "Avengers: Endgame", category_id: 5 },
     { interest_name: "IT", category_id: 5 },
     { interest_name: "Pulp Fiction", category_id: 5 },     
     { interest_name: "Black Hawk Down", category_id: 5 },
     { interest_name: "The Shawshank Redemption", category_id: 5 },
     { interest_name: "The Alchemist", category_id: 6 },
     { interest_name: "48 Laws of Power", category_id: 6 },
     { interest_name: "Harry Potter(Books)", category_id: 6 },
     { interest_name: "Sapiens(Book)", category_id: 6 },
     { interest_name: "The Power of Habit", category_id: 6 },
     { interest_name: "Aurora Rising", category_id: 6 },
     { interest_name: "The Handmaid's Tale", category_id: 6 },
     { interest_name: "The Hitchhiker's Guide to the Galaxy", category_id: 6 },
     { interest_name: "To Kill a Mockingbird", category_id: 6 },
     { interest_name: "Where the Wild Things Are", category_id: 6 },
     { interest_name: "Mario Kart", category_id: 7 },     
     { interest_name: "Super Smash Bros.", category_id: 7 },
     { interest_name: "The Legend of Zelda", category_id: 7 },
     { interest_name: "Halo", category_id: 7 },
     { interest_name: "God of War", category_id: 7 },
     { interest_name: "Gears of War", category_id: 7 },
     { interest_name: "Xbox One", category_id: 7 },
     { interest_name: "Playstation 4", category_id: 7 },
     { interest_name: "The Elder Scrolls: Skyrim", category_id: 7 },
     { interest_name: "Call of Duty", category_id: 7 },
     { interest_name: "Air Jordans", category_id: 8 },
     { interest_name: "Louis Vuittons", category_id: 8 },
     { interest_name: "Red Bottoms", category_id: 8 },
     { interest_name: "Victoria's Secret", category_id: 8 },
     { interest_name: "Adidas", category_id: 8 },
     { interest_name: "Fashion Nova", category_id: 8 },
     { interest_name: "Fenty", category_id: 8 },
     { interest_name: "Yeezy", category_id: 8 },
     { interest_name: "Nike", category_id: 8 },
     { interest_name: "Bonobos", category_id: 8 },
     { interest_name: "AirBnB", category_id: 9 },
     { interest_name: "Japan", category_id: 9 },
     { interest_name: "Greece", category_id: 9 },
     { interest_name: "Egypt", category_id: 9 },
     { interest_name: "Italy", category_id: 9 },
     { interest_name: "London", category_id: 9 },
     { interest_name: "The Great Wall of China", category_id: 9 },
     { interest_name: "Iceland", category_id: 9 },
     { interest_name: "The Statue of Liberty", category_id: 9 },
     { interest_name: "Donald Trump", category_id: 10 },
     { interest_name: "Barack Obama", category_id: 10 },
     { interest_name: "Nancy Pelosi", category_id: 10 },
     { interest_name: "Democrat", category_id: 10 },
     { interest_name: "Republican", category_id: 10 },
     { interest_name: "House of Representatives", category_id: 10 },
     { interest_name: "Supreme Court", category_id: 10 },
     { interest_name: "US Senate", category_id: 10 },
     { interest_name: "2020 Elections", category_id: 10 },
     { interest_name: "United Nations", category_id: 10 },
     { interest_name: "Football", category_id: 11 },
     { interest_name: "Basketball", category_id: 11 },
     { interest_name: "Tennis", category_id: 11 },
     { interest_name: "Soccer", category_id: 11 },
     { interest_name: "Golf", category_id: 11 },
     { interest_name: "Baseball", category_id: 11 },
     { interest_name: "Cricket", category_id: 11 },
     { interest_name: "Softball", category_id: 11 },
     { interest_name: "Rugby", category_id: 11 },
     { interest_name: "Volleyball", category_id: 11 },
     { interest_name: "My Hero Academia", category_id: 12 },
     { interest_name: "Dragon Ball Z", category_id: 12 },
     { interest_name: "Cowboy Bebop", category_id: 12 },
     { interest_name: "Fruits Basket", category_id: 12 },
     { interest_name: "Death Note", category_id: 12 },
     { interest_name: "Gurren Lagann", category_id: 12 },
     { interest_name: "Naruto", category_id: 12 },
     { interest_name: "Jojo's Bizarre Adventure", category_id: 12 },
     { interest_name: "The Seven Deadly Sins", category_id: 12 },
     { interest_name: "Ghost in the Shell", category_id: 12 },

];

const prompts =
[
    { prompt_string: "Out of these five choices, pick the one that either you have heard of or is the most appealing!"},
    { prompt_string: "Good job! Pick Another!"},
    { prompt_string: "Here's another one!"},
    { prompt_string: "Keep 'em coming y'all!"},
    { prompt_string: "Oh man, here we go again!"},
    { prompt_string: "I'll keep pitching 'em up, you keep knocking it out of the park!"},
    { prompt_string: "I'm impressed! Here's another one!"},
    { prompt_string: "You're good at this! Go again!"},
    { prompt_string: "Almost there! Pick again!"},
    { prompt_string: "Last One"}

]


module.exports = 
 {     
    lkp_category,
    lkp_interests,
    prompts
};
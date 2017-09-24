/* TODO: Seed 10 users */
INSERT INTO users (fullname, email, username) VALUES
("John Absher", "john.absher@example.com", "jabsher"),
("David Gutierrez", "david.gutierrez@example.com", "dgutierrez");


/* TODO: Seed 40 texts */
INSERT INTO texts (caption) VALUES
("Great teachers are rare gems."),
("Felt small standing beneath the clouds."),
("Just do it!");


/* TODO: Seed 20 photos */
INSERT INTO photos (url, caption) VALUES
("https://i.pinimg.com/736x/b3/48/4c/b3484c816ba990b5ff29e5cd2299497f--wise-words-wise-sayings.jpg", 1),
("https://i.pinimg.com/736x/b6/d4/8b/b6d48b00d132a940e17dc57ae959a748--being-comfortable-quotes-inspirational-hiking-quotes.jpg", 2),
("https://i.pinimg.com/736x/de/f3/51/def35127fc73da5d7ab7d2f1f6fd0da0--quotes-about-changing-yourself-quote-about-being-yourself.jpg", 3);


/* Check if values have been added correctly */
SELECT * FROM users;
SELECT * FROM photos;
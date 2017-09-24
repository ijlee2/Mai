/* TODO: Seed 10 users */
INSERT INTO users (fullname, email, username) VALUES
("John Absher", "john.absher@example.com", "jabsher"),
("David Gutierrez", "david.gutierrez@example.com", "dgutierrez")
("Jay Rockefeller", "jarrock@example.com", "jayrock"),
("Jack Absher", "jackabsher@example.com", "jkabsher"),
("James Absher", "jamesabsher@example.com","jmsabsher"),
("Robert Absher", "robertabsher@example.com","robabsher"),
("Laura Absher"), "lauraabsher@example.com", "lauraabsher"),
("Eric Gutierrez", "ericg@example.com", "ericg"),
("Aaron Gutierrez", "aarong@example.com", "aarong"),
("Paul Gutierrez", "paul@example.com", "paulg");


/* TODO: Seed 40 texts */
INSERT INTO texts (caption) VALUES
("Great teachers are rare gems."),
("Felt small standing beneath the clouds."),
("Just do it!"),
("It's been way too long since we all got together!"),
("This view was worth the drive."),
("Enjoying a much-needed vacation."),
("I could not be happier right now!"),
("Nomnomnom"),
("Bon apetit!"),
("I’m way up, I feel blessed."),
("I’m here for a good time not a long time."),
("Weekend, please don’t leave me"),
("We all start as strangers."),
("These are the days we live for."),
("Some days start better than others."),
("I need a six month holiday, twice a year!"),
("I cannot see heaven being much better than this."),
("Life is better when you’re laughing."),
("Wish you were here."),
("You only live once, but if you do it right, once is enough."),
("Regardless of whatever crap life may throw at you, never stop having a moment filled with fun!"),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
(""),
("");


/* TODO: Seed 20 photos */
INSERT INTO photos (url, caption) VALUES
("https://i.pinimg.com/736x/b3/48/4c/b3484c816ba990b5ff29e5cd2299497f--wise-words-wise-sayings.jpg", 1),
("https://i.pinimg.com/736x/b6/d4/8b/b6d48b00d132a940e17dc57ae959a748--being-comfortable-quotes-inspirational-hiking-quotes.jpg", 2),
("https://i.pinimg.com/736x/de/f3/51/def35127fc73da5d7ab7d2f1f6fd0da0--quotes-about-changing-yourself-quote-about-being-yourself.jpg", 3),

("http://www.mistymountaincampresort.com/images/at_4.jpg", 4),

("https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2017/02/vladimir-kudinov-65978.jpg", 5),

("http://www.texasmonthly.com/wp-content/uploads/2015/03/Wilhites-Road-Trip.jpg", 6),

("http://www.dgreetings.com/birthday/images/21st-birthday-party.jpg", 7),

("https://c1.staticflickr.com/2/1646/26037409713_8d9f3b7204_b.jpg", 8),

("http://i.dailymail.co.uk/i/pix/2015/04/01/12/272FD76C00000578-0-image-a-6_1427886602163.jpg", 9),

("https://www.ytravelblog.com/wp-content/uploads/2015/10/BrooklynBridge2.jpg", 10),

("http://www.thelondoner.me/wp-content/uploads/2014/12/venice+blog+los+angeles+-+19.jpg", 11),

("https://i.ytimg.com/vi/oWNW0CYEU-I/maxresdefault.jpg", 12),

("http://greatfallsrafting.com/wp-content/uploads/2016/04/424.jpg", 13),

("https://img.grouponcdn.com/deal/3GKo39pjMJL1mQyZzGTwMi84Vwmr/3G-620x371/v1/c700x420.jpg", 14),

("https://www.elderoptionsoftexas.com/images/grandparents-with-grandchildren.jpg", 15),

("https://assets.babycenter.com/ims/2017/05/iStock-599684836_4x3.jpg?width=345", 16),

("https://i.ytimg.com/vi/346zc9ykO3c/maxresdefault.jpg", 17),

("https://farm2.staticflickr.com/1447/23682439854_2c31bfbb38_b.jpg", 18),

("http://partycity3.scene7.com/is/image/PartyCity/PI002109_rec?$_ml_content_gateway_header$", 19),
("http://www.wwe.com/f/styles/gallery_img_l/public/all/2016/09/09_Tailgate_08232016jtb_0070--f2e9cef9fde89444899bf4326875d1f7.jpg", 20),

("https://tctechcrunch2011.files.wordpress.com/2015/11/shutterstock_252786013.jpg?w=738", 21),

("https://images.techhive.com/images/article/2015/05/thelist-selfies-extreme-selfie-100584119-large.jpg", 22);



/* Check if values have been added correctly */
SELECT * FROM users;
SELECT * FROM photos;
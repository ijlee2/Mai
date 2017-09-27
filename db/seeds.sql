INSERT INTO Writers (id, fullname, email, username, hash, profile_url, flagged, created_at, updated_at) VALUES
("2c43aa1d-e8bf-44d1-bb10-cc28ccec0964", "John Absher"    , "john.absher@example.com"    , "john" , "$2a$15$Gcd5x3lhGkZKw1vFwKCLueHjTzpKi3TvH5hj1iKeCYNHvXhwPxeUm", "", false, "2017-09-26 04:15:06", "2017-09-25 04:15:06"),
("7592aa72-3832-4b2d-9b8e-658dc21b277d", "David Gutierrez", "david.gutierrez@example.com", "david", "$2a$15$Gcd5x3lhGkZKw1vFwKCLueHjTzpKi3TvH5hj1iKeCYNHvXhwPxeUm", "", false, "2017-09-26 15:05:57", "2017-09-25 15:05:57"),
("a5211e7d-8382-4221-b77a-824b051e2370", "Jason Joachim"  , "jason.joachim@example.com"  , "jason", "$2a$15$Gcd5x3lhGkZKw1vFwKCLueHjTzpKi3TvH5hj1iKeCYNHvXhwPxeUm", "", false, "2017-09-27 10:28:24", "2017-09-25 10:28:24"),
("a696e28e-79b0-47ed-a9ce-d2e681665459", "Isaac Lee"      , "isaac.lee@example.com"      , "isaac", "$2a$15$Gcd5x3lhGkZKw1vFwKCLueHjTzpKi3TvH5hj1iKeCYNHvXhwPxeUm", "", false, "2017-09-26 04:13:41", "2017-09-25 08:13:41");


INSERT INTO Stories (id, title, created_at, updated_at, writer_id) VALUES
("1fb41095-a0c7-4764-bd78-3cf1234ec257", "Inspirations"     , "2017-09-27 11:30:17", "2017-09-27 11:30:17", "2c43aa1d-e8bf-44d1-bb10-cc28ccec0964"),
("c24530d6-7b65-44ca-8e43-5cd58e44c3e9", "Taco Trucks"      , "2017-09-26 17:03:28", "2017-09-26 17:03:28", "a696e28e-79b0-47ed-a9ce-d2e681665459"),
("3f11625f-95b8-44b2-b6e8-d601c48eb35d", "Hike in Austin"   , "2017-09-26 20:30:17", "2017-09-26 20:30:17", "7592aa72-3832-4b2d-9b8e-658dc21b277d"),
("d584af97-0c4b-463d-970f-32c2cdbe91d7", "Hike in Austin II", "2017-09-27 11:43:31", "2017-09-27 11:43:31", "7592aa72-3832-4b2d-9b8e-658dc21b277d"),
("b1ede670-585b-4e02-924f-afd9b4861d4c", "Fractals"         , "2017-09-27 05:49:20", "2017-09-27 05:49:20", "a5211e7d-8382-4221-b77a-824b051e2370"),
("4405a89e-f9c1-4042-b730-217e9bc5a163", "Top 5 Games"      , "2017-09-27 11:52:25", "2017-09-27 11:52:25", "a696e28e-79b0-47ed-a9ce-d2e681665459"),
("81d7d549-176c-44b3-9f84-b8fe2fafad6f", "Best Curry Places", "2017-09-26 04:14:21", "2017-09-26 04:14:21", "7592aa72-3832-4b2d-9b8e-658dc21b277d"),
("63618791-709f-4691-95ae-4727299d790d", "Hidden Places"    , "2017-09-26 17:03:28", "2017-09-26 17:03:28", "a696e28e-79b0-47ed-a9ce-d2e681665459"),
("b8c5dac2-b14b-4ec4-9434-0f92a5679ea3", "Best PB&J Recipe" , "2017-09-26 18:35:26", "2017-09-26 18:35:26", "2c43aa1d-e8bf-44d1-bb10-cc28ccec0964"),
("f2f62de0-7335-4360-a462-7071d37a1762", "Must Read Books"  , "2017-09-27 11:47:43", "2017-09-27 11:47:43", "7592aa72-3832-4b2d-9b8e-658dc21b277d"),
("2000a6d2-2ffb-43de-9795-daa66d59aa6f", "My Morning"       , "2017-09-26 22:23:51", "2017-09-26 22:23:51", "a5211e7d-8382-4221-b77a-824b051e2370"),
("a9151086-364f-44ab-b29e-3a5d8f466c53", "Top 3 Desserts"   , "2017-09-27 10:28:24", "2017-09-27 10:28:24", "2c43aa1d-e8bf-44d1-bb10-cc28ccec0964"),
("4828900f-8643-4aac-9565-dc0b3618fc70", "My Afternoon"     , "2017-09-27 09:48:59", "2017-09-27 09:48:59", "a5211e7d-8382-4221-b77a-824b051e2370"),
("31df97a6-b2c6-454d-8770-3347d66724ae", "My Evening"       , "2017-09-27 11:49:24", "2017-09-27 11:49:24", "a5211e7d-8382-4221-b77a-824b051e2370");


INSERT INTO Photos (id, url, caption, time_taken, created_at, updated_at, story_id) VALUES
(1, "https://i.pinimg.com/736x/b3/48/4c/b3484c816ba990b5ff29e5cd2299497f--wise-words-wise-sayings.jpg", "Your best teacher is your last mistake."),
(1, "https://i.pinimg.com/736x/b6/d4/8b/b6d48b00d132a940e17dc57ae959a748--being-comfortable-quotes-inspirational-hiking-quotes.jpg", "Words to live and change your life by..."),
(1, "https://i.pinimg.com/736x/de/f3/51/def35127fc73da5d7ab7d2f1f6fd0da0--quotes-about-changing-yourself-quote-about-being-yourself.jpg", "Trying to change my perspective on things.."),
(2, "http://www.mistymountaincampresort.com/images/at_4.jpg", "Taking one step at a time and excited to see where I end up!"),
(2, "https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2017/02/vladimir-kudinov-65978.jpg", "I'm not quite this good but can't wait until I am!"),
(3, "http://www.texasmonthly.com/wp-content/uploads/2015/03/Wilhites-Road-Trip.jpg", "It's about to get very quiet at this table."),
(3, "http://www.dgreetings.com/birthday/images/21st-birthday-party.jpg", "This is the best day ever!"),
(3, "https://c1.staticflickr.com/2/1646/26037409713_8d9f3b7204_b.jpg", "Feeling high on this sunrise. Very blessed."),
(3, "http://i.dailymail.co.uk/i/pix/2015/04/01/12/272FD76C00000578-0-image-a-6_1427886602163.jpg", "Electric nighttime algae in Australia. Loving it."),
(4, "https://www.ytravelblog.com/wp-content/uploads/2015/10/BrooklynBridge2.jpg", "Morning coffee and stroll through NYC. Doing it right!"),
(4, "http://www.thelondoner.me/wp-content/uploads/2014/12/venice+blog+los+angeles+-+19.jpg", "Venice. Right in the thick of it!"),
(4, "https://i.ytimg.com/vi/oWNW0CYEU-I/maxresdefault.jpg", "Lazy Sunday float. Get it."),
(5, "http://greatfallsrafting.com/wp-content/uploads/2016/04/424.jpg", "Morning canoe trip. Worth waking up for!"),
(6, "https://img.grouponcdn.com/deal/3GKo39pjMJL1mQyZzGTwMi84Vwmr/3G-620x371/v1/c700x420.jpg", "We all start as strangers."),
(6, "https://www.elderoptionsoftexas.com/images/grandparents-with-grandchildren.jpg", "Grandma and Grampa hanging out with the boys :)"),
(6, "https://assets.babycenter.com/ims/2017/05/iStock-599684836_4x3.jpg?width=345", "Feeling humble and blessed today. Best day of my life."),
(7, "https://i.ytimg.com/vi/346zc9ykO3c/maxresdefault.jpg", "She said yes!!!!"),
(7, "https://farm2.staticflickr.com/1447/23682439854_2c31bfbb38_b.jpg", "Merry Christmas!"),
(7, "http://partycity3.scene7.com/is/image/PartyCity/PI002109_rec?$_ml_content_gateway_header$", "We all start as strangers. $friendsgiving"),
(7, "http://www.wwe.com/f/styles/gallery_img_l/public/all/2016/09/09_Tailgate_08232016jtb_0070--f2e9cef9fde89444899bf4326875d1f7.jpg", "Gametime!"),
(7, "https://tctechcrunch2011.files.wordpress.com/2015/11/shutterstock_252786013.jpg?w=738", "Wish you were here."),
(8, "https://images.techhive.com/images/article/2015/05/thelist-selfies-extreme-selfie-100584119-large.jpg", "Just do it!");


INSERT INTO Readers (id, reader_id, created_at, updated_at, writer_id) VALUES
();


/* Check if values have been added correctly */
SELECT * FROM Writers;
SELECT * FROM Stories;
SELECT * FROM Photos;
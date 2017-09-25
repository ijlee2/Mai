INSERT INTO Writers (fullname, email, username, hash) VALUES
("John Absher"    , "john.absher@example.com"    , "jabsher"   , "abc"),
("David Gutierrez", "david.gutierrez@example.com", "dgutierrez", "abc"),
("Jason Joachim"  , "jason.joachim@example.com"  , "jayrock"   , "abc"),
("Isaac Lee"      , "isaac.lee@example.com"      , "isaac"     , "abc");

INSERT INTO Stories (WriterID, url) VALUES
(3, "https://www.google.com"),
(2, "https://www.google.com"),
(4, "https://www.google.com"),
(1, "https://www.google.com"),
(1, "https://www.google.com"),
(3, "https://www.google.com"),
(4, "https://www.google.com"),
(1, "https://www.google.com");

INSERT INTO Photos (StoryID, url, caption) VALUES
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

/* Check if values have been added correctly */
SELECT * FROM Writers;
SELECT * FROM Stories;
SELECT * FROM Photos;
INSERT INTO Writers (id, fullname, email, username, hash, profile_url, flagged, created_at, updated_at) VALUES
("2c43aa1d-e8bf-44d1-bb10-cc28ccec0964", "John Absher"    , "john.absher@example.com"    , "john" , "$2a$15$Gcd5x3lhGkZKw1vFwKCLueHjTzpKi3TvH5hj1iKeCYNHvXhwPxeUm", "", false, "2017-09-25 04:15:06", "2017-09-25 04:15:06"),
("7592aa72-3832-4b2d-9b8e-658dc21b277d", "David Gutierrez", "david.gutierrez@example.com", "david", "$2a$15$Gcd5x3lhGkZKw1vFwKCLueHjTzpKi3TvH5hj1iKeCYNHvXhwPxeUm", "", false, "2017-09-25 15:05:57", "2017-09-25 15:05:57"),
("a5211e7d-8382-4221-b77a-824b051e2370", "Jason Joachim"  , "jason.joachim@example.com"  , "jason", "$2a$15$Gcd5x3lhGkZKw1vFwKCLueHjTzpKi3TvH5hj1iKeCYNHvXhwPxeUm", "", false, "2017-09-25 10:28:24", "2017-09-25 10:28:24"),
("a696e28e-79b0-47ed-a9ce-d2e681665459", "Isaac Lee"      , "isaac.lee@example.com"      , "isaac", "$2a$15$Gcd5x3lhGkZKw1vFwKCLueHjTzpKi3TvH5hj1iKeCYNHvXhwPxeUm", "", false, "2017-09-25 04:13:41", "2017-09-25 08:13:41");


INSERT INTO Stories (id, title, created_at, updated_at, writer_id) VALUES
("1fb41095-a0c7-4764-bd78-3cf1234ec257", "Inspirations"     , "2017-09-27 11:30:17", "2017-09-27 11:30:17", "2c43aa1d-e8bf-44d1-bb10-cc28ccec0964"),
("3f11625f-95b8-44b2-b6e8-d601c48eb35d", "Hike in Austin"   , "2017-09-26 20:30:17", "2017-09-26 20:30:17", "2c43aa1d-e8bf-44d1-bb10-cc28ccec0964"),
("63618791-709f-4691-95ae-4727299d790d", "Hidden Places"    , "2017-09-26 17:03:28", "2017-09-26 17:03:28", "2c43aa1d-e8bf-44d1-bb10-cc28ccec0964"),
("2000a6d2-2ffb-43de-9795-daa66d59aa6f", "My Morning"       , "2017-09-28 08:25:43", "2017-09-28 08:25:43", "2c43aa1d-e8bf-44d1-bb10-cc28ccec0964"),
("4828900f-8643-4aac-9565-dc0b3618fc70", "My Afternoon"     , "2017-09-28 14:39:50", "2017-09-28 14:39:50", "2c43aa1d-e8bf-44d1-bb10-cc28ccec0964"),
("31df97a6-b2c6-454d-8770-3347d66724ae", "My Evening"       , "2017-09-28 20:15:15", "2017-09-28 20:15:15", "2c43aa1d-e8bf-44d1-bb10-cc28ccec0964"),

("c24530d6-7b65-44ca-8e43-5cd58e44c3e9", "Inspirations"     , "2017-09-27 11:30:17", "2017-09-27 11:30:17", "7592aa72-3832-4b2d-9b8e-658dc21b277d"),
("d584af97-0c4b-463d-970f-32c2cdbe91d7", "Hike in Austin"   , "2017-09-26 20:30:17", "2017-09-26 20:30:17", "7592aa72-3832-4b2d-9b8e-658dc21b277d"),
("b1ede670-585b-4e02-924f-afd9b4861d4c", "Hidden Places"    , "2017-09-26 17:03:28", "2017-09-26 17:03:28", "7592aa72-3832-4b2d-9b8e-658dc21b277d"),
("4405a89e-f9c1-4042-b730-217e9bc5a163", "My Morning"       , "2017-09-28 08:25:43", "2017-09-28 08:25:43", "7592aa72-3832-4b2d-9b8e-658dc21b277d"),
("81d7d549-176c-44b3-9f84-b8fe2fafad6f", "My Afternoon"     , "2017-09-28 14:39:50", "2017-09-28 14:39:50", "7592aa72-3832-4b2d-9b8e-658dc21b277d"),
("b8c5dac2-b14b-4ec4-9434-0f92a5679ea3", "My Evening"       , "2017-09-28 20:15:15", "2017-09-28 20:15:15", "7592aa72-3832-4b2d-9b8e-658dc21b277d"),

("f2f62de0-7335-4360-a462-7071d37a1762", "Inspirations"     , "2017-09-27 11:30:17", "2017-09-27 11:30:17", "a5211e7d-8382-4221-b77a-824b051e2370"),
("a9151086-364f-44ab-b29e-3a5d8f466c53", "Hike in Austin"   , "2017-09-26 20:30:17", "2017-09-26 20:30:17", "a5211e7d-8382-4221-b77a-824b051e2370"),
("1be4cbb0-0d29-4158-acc5-8b9407c927e9", "Hidden Places"    , "2017-09-26 17:03:28", "2017-09-26 17:03:28", "a5211e7d-8382-4221-b77a-824b051e2370"),
("a9c447f3-a812-4407-812f-30217e05a975", "My Morning"       , "2017-09-28 08:25:43", "2017-09-28 08:25:43", "a5211e7d-8382-4221-b77a-824b051e2370"),
("31b390ac-50c0-430d-afc2-d6c9e23eb313", "My Afternoon"     , "2017-09-28 14:39:50", "2017-09-28 14:39:50", "a5211e7d-8382-4221-b77a-824b051e2370"),
("323540bb-c187-4f2b-8baf-8253655a4789", "My Evening"       , "2017-09-28 20:15:15", "2017-09-28 20:15:15", "a5211e7d-8382-4221-b77a-824b051e2370"),

("dda19f0e-245e-4a79-af73-bd23ed983dd1", "Inspirations"     , "2017-09-27 11:30:17", "2017-09-27 11:30:17", "a696e28e-79b0-47ed-a9ce-d2e681665459"),
("0669cad1-c61f-45ae-9adc-7f74cc25875b", "Hike in Austin"   , "2017-09-26 20:30:17", "2017-09-26 20:30:17", "a696e28e-79b0-47ed-a9ce-d2e681665459"),
("4876b5a4-aeed-4026-b3e5-3d50621a77b3", "Hidden Places"    , "2017-09-26 17:03:28", "2017-09-26 17:03:28", "a696e28e-79b0-47ed-a9ce-d2e681665459"),
("93de8a1c-6c58-4328-ae45-6336a703172e", "My Morning"       , "2017-09-28 08:25:43", "2017-09-28 08:25:43", "a696e28e-79b0-47ed-a9ce-d2e681665459"),
("5ba8c1ee-ad4a-471f-8b2e-2b3de4e60f09", "My Afternoon"     , "2017-09-28 14:39:50", "2017-09-28 14:39:50", "a696e28e-79b0-47ed-a9ce-d2e681665459"),
("211dcadd-62dc-41f2-8e04-93113fc6957e", "My Evening"       , "2017-09-28 20:15:15", "2017-09-28 20:15:15", "a696e28e-79b0-47ed-a9ce-d2e681665459");



INSERT INTO Photos (id, url, caption, time_taken, created_at, updated_at, story_id) VALUES
("3e0235bd-8c33-4294-a476-2e94a677708a", "https://goo.gl/9p2qT2", "Teachers are treasures."                                 , "2017-09-26 15:10:57", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "1fb41095-a0c7-4764-bd78-3cf1234ec257"),
("bcca9dfb-2615-4ab2-945e-361e03f5ed3a", "https://goo.gl/uKWPCJ", "Words to live and change your life by..."                , "2017-09-26 15:21:04", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "1fb41095-a0c7-4764-bd78-3cf1234ec257"),
("20debdd9-946c-4a50-bb23-69bf6bca0d47", "https://goo.gl/tAeWUE", "Trying to change my perspective on things.."             , "2017-09-26 16:50:18", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "1fb41095-a0c7-4764-bd78-3cf1234ec257"),
("ea09ead5-9b3c-40ad-bcd8-6713d62d0c9d", "https://goo.gl/Cg9SvX", "We all start as strangers."                              , "2017-09-26 18:13:36", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "1fb41095-a0c7-4764-bd78-3cf1234ec257"),
("285364dc-294c-487f-8f41-7696e52a4f2e", "https://goo.gl/yCFoNu", "Feeling humble and blessed today. Best day of my life."  , "2017-09-26 19:40:22", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "1fb41095-a0c7-4764-bd78-3cf1234ec257"),
("4c787675-c84b-4385-a271-7710503ea02d", "https://goo.gl/XNqBGr", "Excited to see where I end up!"                          , "2017-08-30 12:11:06", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "3f11625f-95b8-44b2-b6e8-d601c48eb35d"),
("fd51afcd-756e-4642-8e84-c5b37ac36dc4", "https://goo.gl/1uKufW", "Wish you were here."                                     , "2017-08-30 14:35:27", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "3f11625f-95b8-44b2-b6e8-d601c48eb35d"),
("604f0c3f-b674-4990-82ec-a707c178e92e", "https://goo.gl/V3fhGy", "Just do it!"                                             , "2017-08-30 15:00:33", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "3f11625f-95b8-44b2-b6e8-d601c48eb35d"),
("cf3b5629-f778-4103-8fb7-0253c45d9eb0", "https://goo.gl/eH41R5", "Feeling the cool breeze."                                , "2017-09-15 12:11:15", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "63618791-709f-4691-95ae-4727299d790d"),
("d466295e-d272-4ef5-b84b-92cd343a9e36", "https://goo.gl/WJkBzh", "Venice. Right in the thick of it!"                       , "2017-09-15 16:40:25", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "63618791-709f-4691-95ae-4727299d790d"),
("f4b128c5-247e-4d35-8dd9-f8f6352f43f7", "https://goo.gl/2T8MNJ", "Electric nighttime algae in Australia. Loving it."       , "2017-09-15 22:37:08", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "63618791-709f-4691-95ae-4727299d790d"),
("29a239a0-4614-410b-a111-ba85e541bcc2", "https://goo.gl/CPmFzY", "This is the best day ever already! XOXO"                 , "2017-09-28 07:23:34", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "2000a6d2-2ffb-43de-9795-daa66d59aa6f"),
("be36bd2f-6010-41e6-850c-14c10c520320", "https://goo.gl/zJy72M", "Morning coffee and a stroll through NYC. Doing it right!", "2017-09-28 08:09:17", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "2000a6d2-2ffb-43de-9795-daa66d59aa6f"),
("574ecd28-73b4-4a87-8dd0-febd10e3ab75", "https://goo.gl/SQA2Cf", "Morning canoe trip. Worth waking up for!"                , "2017-09-28 09:15:54", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "2000a6d2-2ffb-43de-9795-daa66d59aa6f"),
("943fc890-d1f5-40a4-8569-1dc7a8aa4e9b", "https://goo.gl/6ZxKvs", "Gametime!"                                               , "2017-09-28 11:56:39", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "4828900f-8643-4aac-9565-dc0b3618fc70"),
("9b00b529-ad13-49f9-adff-df09f79e0141", "https://goo.gl/yPwbkp", "Grandma and Grampa hanging out with the boys :)"         , "2017-09-28 13:19:50", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "4828900f-8643-4aac-9565-dc0b3618fc70"),
("a6248ba0-217b-46de-90f5-d4396ebc0758", "https://goo.gl/V3Xn1v", "Lazy Sunday float. Get it."                              , "2017-09-28 13:25:49", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "4828900f-8643-4aac-9565-dc0b3618fc70"),
("71a35f0a-9bdc-4e82-9c13-adb2a42dd6a7", "https://goo.gl/c83xCA", "It's about to get very quiet at this table."             , "2017-09-28 14:38:27", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "4828900f-8643-4aac-9565-dc0b3618fc70"),
("9eb791da-1088-4a75-a292-249efd629660", "https://goo.gl/QgWG9M", "We all start as strangers. $friendsgiving"               , "2017-09-28 19:05:26", "2017-09-28 20:15:04", "2017-09-28 20:15:04", "31df97a6-b2c6-454d-8770-3347d66724ae"),
("dee4f3c6-9b7b-438f-ab85-2d6fe36791e1", "https://goo.gl/ZKsjY9", "She said yes!!!!"                                        , "2017-09-28 20:10:33", "2017-09-28 20:15:04", "2017-09-28 20:15:04", "31df97a6-b2c6-454d-8770-3347d66724ae"),
("b6dd1dd1-f05c-4636-be12-2e5566cc8929", "https://goo.gl/huUNKg", "Feeling high on this sunrise. Very blessed."             , "2017-09-28 20:14:28", "2017-09-28 20:14:46", "2017-09-28 20:14:46", "31df97a6-b2c6-454d-8770-3347d66724ae"),

("3e0235bd-8c33-4294-a476-2e94a677708a", "https://goo.gl/9p2qT2", "Teachers are treasures."                                 , "2017-09-26 15:10:57", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "c24530d6-7b65-44ca-8e43-5cd58e44c3e9"),
("bcca9dfb-2615-4ab2-945e-361e03f5ed3a", "https://goo.gl/uKWPCJ", "Words to live and change your life by..."                , "2017-09-26 15:21:04", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "c24530d6-7b65-44ca-8e43-5cd58e44c3e9"),
("20debdd9-946c-4a50-bb23-69bf6bca0d47", "https://goo.gl/tAeWUE", "Trying to change my perspective on things.."             , "2017-09-26 16:50:18", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "c24530d6-7b65-44ca-8e43-5cd58e44c3e9"),
("ea09ead5-9b3c-40ad-bcd8-6713d62d0c9d", "https://goo.gl/Cg9SvX", "We all start as strangers."                              , "2017-09-26 18:13:36", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "c24530d6-7b65-44ca-8e43-5cd58e44c3e9"),
("285364dc-294c-487f-8f41-7696e52a4f2e", "https://goo.gl/yCFoNu", "Feeling humble and blessed today. Best day of my life."  , "2017-09-26 19:40:22", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "c24530d6-7b65-44ca-8e43-5cd58e44c3e9"),
("4c787675-c84b-4385-a271-7710503ea02d", "https://goo.gl/XNqBGr", "Excited to see where I end up!"                          , "2017-08-30 12:11:06", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "d584af97-0c4b-463d-970f-32c2cdbe91d7"),
("fd51afcd-756e-4642-8e84-c5b37ac36dc4", "https://goo.gl/1uKufW", "Wish you were here."                                     , "2017-08-30 14:35:27", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "d584af97-0c4b-463d-970f-32c2cdbe91d7"),
("604f0c3f-b674-4990-82ec-a707c178e92e", "https://goo.gl/V3fhGy", "Just do it!"                                             , "2017-08-30 15:00:33", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "d584af97-0c4b-463d-970f-32c2cdbe91d7"),
("cf3b5629-f778-4103-8fb7-0253c45d9eb0", "https://goo.gl/eH41R5", "Feeling the cool breeze."                                , "2017-09-15 12:11:15", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "b1ede670-585b-4e02-924f-afd9b4861d4c"),
("d466295e-d272-4ef5-b84b-92cd343a9e36", "https://goo.gl/WJkBzh", "Venice. Right in the thick of it!"                       , "2017-09-15 16:40:25", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "b1ede670-585b-4e02-924f-afd9b4861d4c"),
("f4b128c5-247e-4d35-8dd9-f8f6352f43f7", "https://goo.gl/2T8MNJ", "Electric nighttime algae in Australia. Loving it."       , "2017-09-15 22:37:08", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "b1ede670-585b-4e02-924f-afd9b4861d4c"),
("29a239a0-4614-410b-a111-ba85e541bcc2", "https://goo.gl/CPmFzY", "This is the best day ever already! XOXO"                 , "2017-09-28 07:23:34", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "4405a89e-f9c1-4042-b730-217e9bc5a163"),
("be36bd2f-6010-41e6-850c-14c10c520320", "https://goo.gl/zJy72M", "Morning coffee and a stroll through NYC. Doing it right!", "2017-09-28 08:09:17", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "4405a89e-f9c1-4042-b730-217e9bc5a163"),
("574ecd28-73b4-4a87-8dd0-febd10e3ab75", "https://goo.gl/SQA2Cf", "Morning canoe trip. Worth waking up for!"                , "2017-09-28 09:15:54", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "4405a89e-f9c1-4042-b730-217e9bc5a163"),
("943fc890-d1f5-40a4-8569-1dc7a8aa4e9b", "https://goo.gl/6ZxKvs", "Gametime!"                                               , "2017-09-28 11:56:39", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "81d7d549-176c-44b3-9f84-b8fe2fafad6f"),
("9b00b529-ad13-49f9-adff-df09f79e0141", "https://goo.gl/yPwbkp", "Grandma and Grampa hanging out with the boys :)"         , "2017-09-28 13:19:50", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "81d7d549-176c-44b3-9f84-b8fe2fafad6f"),
("a6248ba0-217b-46de-90f5-d4396ebc0758", "https://goo.gl/V3Xn1v", "Lazy Sunday float. Get it."                              , "2017-09-28 13:25:49", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "81d7d549-176c-44b3-9f84-b8fe2fafad6f"),
("71a35f0a-9bdc-4e82-9c13-adb2a42dd6a7", "https://goo.gl/c83xCA", "It's about to get very quiet at this table."             , "2017-09-28 14:38:27", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "81d7d549-176c-44b3-9f84-b8fe2fafad6f"),
("9eb791da-1088-4a75-a292-249efd629660", "https://goo.gl/QgWG9M", "We all start as strangers. $friendsgiving"               , "2017-09-28 19:05:26", "2017-09-28 20:15:04", "2017-09-28 20:15:04", "b8c5dac2-b14b-4ec4-9434-0f92a5679ea3"),
("dee4f3c6-9b7b-438f-ab85-2d6fe36791e1", "https://goo.gl/ZKsjY9", "She said yes!!!!"                                        , "2017-09-28 20:10:33", "2017-09-28 20:15:04", "2017-09-28 20:15:04", "b8c5dac2-b14b-4ec4-9434-0f92a5679ea3"),
("b6dd1dd1-f05c-4636-be12-2e5566cc8929", "https://goo.gl/huUNKg", "Feeling high on this sunrise. Very blessed."             , "2017-09-28 20:14:28", "2017-09-28 20:14:46", "2017-09-28 20:14:46", "b8c5dac2-b14b-4ec4-9434-0f92a5679ea3"),

("3e0235bd-8c33-4294-a476-2e94a677708a", "https://goo.gl/9p2qT2", "Teachers are treasures."                                 , "2017-09-26 15:10:57", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "f2f62de0-7335-4360-a462-7071d37a1762"),
("bcca9dfb-2615-4ab2-945e-361e03f5ed3a", "https://goo.gl/uKWPCJ", "Words to live and change your life by..."                , "2017-09-26 15:21:04", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "f2f62de0-7335-4360-a462-7071d37a1762"),
("20debdd9-946c-4a50-bb23-69bf6bca0d47", "https://goo.gl/tAeWUE", "Trying to change my perspective on things.."             , "2017-09-26 16:50:18", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "f2f62de0-7335-4360-a462-7071d37a1762"),
("ea09ead5-9b3c-40ad-bcd8-6713d62d0c9d", "https://goo.gl/Cg9SvX", "We all start as strangers."                              , "2017-09-26 18:13:36", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "f2f62de0-7335-4360-a462-7071d37a1762"),
("285364dc-294c-487f-8f41-7696e52a4f2e", "https://goo.gl/yCFoNu", "Feeling humble and blessed today. Best day of my life."  , "2017-09-26 19:40:22", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "f2f62de0-7335-4360-a462-7071d37a1762"),
("4c787675-c84b-4385-a271-7710503ea02d", "https://goo.gl/XNqBGr", "Excited to see where I end up!"                          , "2017-08-30 12:11:06", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "a9151086-364f-44ab-b29e-3a5d8f466c53"),
("fd51afcd-756e-4642-8e84-c5b37ac36dc4", "https://goo.gl/1uKufW", "Wish you were here."                                     , "2017-08-30 14:35:27", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "a9151086-364f-44ab-b29e-3a5d8f466c53"),
("604f0c3f-b674-4990-82ec-a707c178e92e", "https://goo.gl/V3fhGy", "Just do it!"                                             , "2017-08-30 15:00:33", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "a9151086-364f-44ab-b29e-3a5d8f466c53"),
("cf3b5629-f778-4103-8fb7-0253c45d9eb0", "https://goo.gl/eH41R5", "Feeling the cool breeze."                                , "2017-09-15 12:11:15", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "1be4cbb0-0d29-4158-acc5-8b9407c927e9"),
("d466295e-d272-4ef5-b84b-92cd343a9e36", "https://goo.gl/WJkBzh", "Venice. Right in the thick of it!"                       , "2017-09-15 16:40:25", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "1be4cbb0-0d29-4158-acc5-8b9407c927e9"),
("f4b128c5-247e-4d35-8dd9-f8f6352f43f7", "https://goo.gl/2T8MNJ", "Electric nighttime algae in Australia. Loving it."       , "2017-09-15 22:37:08", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "1be4cbb0-0d29-4158-acc5-8b9407c927e9"),
("29a239a0-4614-410b-a111-ba85e541bcc2", "https://goo.gl/CPmFzY", "This is the best day ever already! XOXO"                 , "2017-09-28 07:23:34", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "a9c447f3-a812-4407-812f-30217e05a975"),
("be36bd2f-6010-41e6-850c-14c10c520320", "https://goo.gl/zJy72M", "Morning coffee and a stroll through NYC. Doing it right!", "2017-09-28 08:09:17", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "a9c447f3-a812-4407-812f-30217e05a975"),
("574ecd28-73b4-4a87-8dd0-febd10e3ab75", "https://goo.gl/SQA2Cf", "Morning canoe trip. Worth waking up for!"                , "2017-09-28 09:15:54", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "a9c447f3-a812-4407-812f-30217e05a975"),
("943fc890-d1f5-40a4-8569-1dc7a8aa4e9b", "https://goo.gl/6ZxKvs", "Gametime!"                                               , "2017-09-28 11:56:39", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "31b390ac-50c0-430d-afc2-d6c9e23eb313"),
("9b00b529-ad13-49f9-adff-df09f79e0141", "https://goo.gl/yPwbkp", "Grandma and Grampa hanging out with the boys :)"         , "2017-09-28 13:19:50", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "31b390ac-50c0-430d-afc2-d6c9e23eb313"),
("a6248ba0-217b-46de-90f5-d4396ebc0758", "https://goo.gl/V3Xn1v", "Lazy Sunday float. Get it."                              , "2017-09-28 13:25:49", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "31b390ac-50c0-430d-afc2-d6c9e23eb313"),
("71a35f0a-9bdc-4e82-9c13-adb2a42dd6a7", "https://goo.gl/c83xCA", "It's about to get very quiet at this table."             , "2017-09-28 14:38:27", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "31b390ac-50c0-430d-afc2-d6c9e23eb313"),
("9eb791da-1088-4a75-a292-249efd629660", "https://goo.gl/QgWG9M", "We all start as strangers. $friendsgiving"               , "2017-09-28 19:05:26", "2017-09-28 20:15:04", "2017-09-28 20:15:04", "323540bb-c187-4f2b-8baf-8253655a4789"),
("dee4f3c6-9b7b-438f-ab85-2d6fe36791e1", "https://goo.gl/ZKsjY9", "She said yes!!!!"                                        , "2017-09-28 20:10:33", "2017-09-28 20:15:04", "2017-09-28 20:15:04", "323540bb-c187-4f2b-8baf-8253655a4789"),
("b6dd1dd1-f05c-4636-be12-2e5566cc8929", "https://goo.gl/huUNKg", "Feeling high on this sunrise. Very blessed."             , "2017-09-28 20:14:28", "2017-09-28 20:14:46", "2017-09-28 20:14:46", "323540bb-c187-4f2b-8baf-8253655a4789"),

("3e0235bd-8c33-4294-a476-2e94a677708a", "https://goo.gl/9p2qT2", "Teachers are treasures."                                 , "2017-09-26 15:10:57", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "dda19f0e-245e-4a79-af73-bd23ed983dd1"),
("bcca9dfb-2615-4ab2-945e-361e03f5ed3a", "https://goo.gl/uKWPCJ", "Words to live and change your life by..."                , "2017-09-26 15:21:04", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "dda19f0e-245e-4a79-af73-bd23ed983dd1"),
("20debdd9-946c-4a50-bb23-69bf6bca0d47", "https://goo.gl/tAeWUE", "Trying to change my perspective on things.."             , "2017-09-26 16:50:18", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "dda19f0e-245e-4a79-af73-bd23ed983dd1"),
("ea09ead5-9b3c-40ad-bcd8-6713d62d0c9d", "https://goo.gl/Cg9SvX", "We all start as strangers."                              , "2017-09-26 18:13:36", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "dda19f0e-245e-4a79-af73-bd23ed983dd1"),
("285364dc-294c-487f-8f41-7696e52a4f2e", "https://goo.gl/yCFoNu", "Feeling humble and blessed today. Best day of my life."  , "2017-09-26 19:40:22", "2017-09-27 11:29:47", "2017-09-27 11:29:47", "dda19f0e-245e-4a79-af73-bd23ed983dd1"),
("4c787675-c84b-4385-a271-7710503ea02d", "https://goo.gl/XNqBGr", "Excited to see where I end up!"                          , "2017-08-30 12:11:06", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "0669cad1-c61f-45ae-9adc-7f74cc25875b"),
("fd51afcd-756e-4642-8e84-c5b37ac36dc4", "https://goo.gl/1uKufW", "Wish you were here."                                     , "2017-08-30 14:35:27", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "0669cad1-c61f-45ae-9adc-7f74cc25875b"),
("604f0c3f-b674-4990-82ec-a707c178e92e", "https://goo.gl/V3fhGy", "Just do it!"                                             , "2017-08-30 15:00:33", "2017-09-26 20:30:12", "2017-09-26 20:30:12", "0669cad1-c61f-45ae-9adc-7f74cc25875b"),
("cf3b5629-f778-4103-8fb7-0253c45d9eb0", "https://goo.gl/eH41R5", "Feeling the cool breeze."                                , "2017-09-15 12:11:15", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "4876b5a4-aeed-4026-b3e5-3d50621a77b3"),
("d466295e-d272-4ef5-b84b-92cd343a9e36", "https://goo.gl/WJkBzh", "Venice. Right in the thick of it!"                       , "2017-09-15 16:40:25", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "4876b5a4-aeed-4026-b3e5-3d50621a77b3"),
("f4b128c5-247e-4d35-8dd9-f8f6352f43f7", "https://goo.gl/2T8MNJ", "Electric nighttime algae in Australia. Loving it."       , "2017-09-15 22:37:08", "2017-09-26 17:03:13", "2017-09-26 17:03:13", "4876b5a4-aeed-4026-b3e5-3d50621a77b3"),
("29a239a0-4614-410b-a111-ba85e541bcc2", "https://goo.gl/CPmFzY", "This is the best day ever already! XOXO"                 , "2017-09-28 07:23:34", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "93de8a1c-6c58-4328-ae45-6336a703172e"),
("be36bd2f-6010-41e6-850c-14c10c520320", "https://goo.gl/zJy72M", "Morning coffee and a stroll through NYC. Doing it right!", "2017-09-28 08:09:17", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "93de8a1c-6c58-4328-ae45-6336a703172e"),
("574ecd28-73b4-4a87-8dd0-febd10e3ab75", "https://goo.gl/SQA2Cf", "Morning canoe trip. Worth waking up for!"                , "2017-09-28 09:15:54", "2017-09-28 08:25:20", "2017-09-28 08:25:20", "93de8a1c-6c58-4328-ae45-6336a703172e"),
("943fc890-d1f5-40a4-8569-1dc7a8aa4e9b", "https://goo.gl/6ZxKvs", "Gametime!"                                               , "2017-09-28 11:56:39", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "5ba8c1ee-ad4a-471f-8b2e-2b3de4e60f09"),
("9b00b529-ad13-49f9-adff-df09f79e0141", "https://goo.gl/yPwbkp", "Grandma and Grampa hanging out with the boys :)"         , "2017-09-28 13:19:50", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "5ba8c1ee-ad4a-471f-8b2e-2b3de4e60f09"),
("a6248ba0-217b-46de-90f5-d4396ebc0758", "https://goo.gl/V3Xn1v", "Lazy Sunday float. Get it."                              , "2017-09-28 13:25:49", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "5ba8c1ee-ad4a-471f-8b2e-2b3de4e60f09"),
("71a35f0a-9bdc-4e82-9c13-adb2a42dd6a7", "https://goo.gl/c83xCA", "It's about to get very quiet at this table."             , "2017-09-28 14:38:27", "2017-09-28 14:39:06", "2017-09-28 14:39:06", "5ba8c1ee-ad4a-471f-8b2e-2b3de4e60f09"),
("9eb791da-1088-4a75-a292-249efd629660", "https://goo.gl/QgWG9M", "We all start as strangers. $friendsgiving"               , "2017-09-28 19:05:26", "2017-09-28 20:15:04", "2017-09-28 20:15:04", "211dcadd-62dc-41f2-8e04-93113fc6957e"),
("dee4f3c6-9b7b-438f-ab85-2d6fe36791e1", "https://goo.gl/ZKsjY9", "She said yes!!!!"                                        , "2017-09-28 20:10:33", "2017-09-28 20:15:04", "2017-09-28 20:15:04", "211dcadd-62dc-41f2-8e04-93113fc6957e"),
("b6dd1dd1-f05c-4636-be12-2e5566cc8929", "https://goo.gl/huUNKg", "Feeling high on this sunrise. Very blessed."             , "2017-09-28 20:14:28", "2017-09-28 20:14:46", "2017-09-28 20:14:46", "211dcadd-62dc-41f2-8e04-93113fc6957e");


INSERT INTO Readers (id, reader_id, created_at, updated_at, writer_id) VALUES
("df929932-11d6-432b-a463-dbf96f27b365");


/* Check if values have been added correctly */
SELECT * FROM Writers;
SELECT * FROM Stories;
SELECT * FROM Photos;
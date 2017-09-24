DROP DATABASE IF EXISTS mai_db;
CREATE DATABASE mai_db;
USE mai_db;

-- Create users
CREATE TABLE users (
    id          INT NOT NULL AUTO_INCREMENT,
    fullname    VARCHAR(100) NOT NULL,
    email       VARCHAR(100) NOT NULL UNIQUE,
    username    VARCHAR(32)  NOT NULL UNIQUE,
    
    alias       VARCHAR(512) NOT NULL,
    hash        VARCHAR(512) NOT NULL,

    profile_url VARCHAR(256) DEFAULT "",
    flagged     BOOLEAN DEFAULT false,

    PRIMARY KEY (id)
);

-- Create stories
CREATE TABLE stories (
    id  INT NOT NULL AUTO_INCREMENT,
    url VARCHAR(256) NOT NULL,

    PRIMARY KEY (id)
);

-- Create captions
CREATE TABLE captions (
    id      INT NOT NULL AUTO_INCREMENT,
    caption TEXT NOT NULL,

    PRIMARY KEY (id)
);

-- Create photos (one-to-one)
CREATE TABLE photos (
    id         INT NOT NULL AUTO_INCREMENT,
    url        VARCHAR(100) NOT NULL,
    time_taken DATETIME NOT NULL,
    caption_id INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (caption_id) REFERENCES captions(id)
);

-- Find people that a user follows (one-to-many)
CREATE TABLE users_to_writers (
    id        INT NOT NULL AUTO_INCREMENT,
    user_id   INT NOT NULL,
    writer_id INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (writer_id) REFERENCES users(id)
);

-- Find people that follow a user (one-to-many)
CREATE TABLE users_to_readers (
    id        INT NOT NULL AUTO_INCREMENT,
    user_id   INT NOT NULL,
    reader_id INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (reader_id) REFERENCES users(id)
);

-- Find stories that a user creates (one-to-many)
CREATE TABLE users_to_stories (
    id       INT NOT NULL AUTO_INCREMENT,
    user_id  INT NOT NULL,
    story_id INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (story_id) REFERENCES stories(id)
);

-- Find photos that a story has (one-to-many)
CREATE TABLE stories_to_photos (
    id       INT NOT NULL AUTO_INCREMENT, 
    story_id INT NOT NULL,
    photo_id INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (story_id) REFERENCES stories(id),
    FOREIGN KEY (photo_id) REFERENCES photos(id)
);
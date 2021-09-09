
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "songs" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT NOT NULL REFERENCES "user",
	"date" DATE DEFAULT CURRENT_DATE,
	"title" TEXT NOT NULL,
    "tuning" TEXT NOT NULL,
	"performance_notes" TEXT DEFAULT 'no notes added',
    "priority" VARCHAR (10)
	"lyrics" TEXT DEFAULT 'no lyrics added',
	"preview_audio" TEXT
);

CREATE TABLE "recordings" (
	"id" SERIAL PRIMARY KEY,
	"song_id" INT NOT NULL REFERENCES "songs",
    "description" TEXT,
	"url_path" TEXT 
);


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
    "instrument_notes" TEXT DEFAULT 'no notes added',
	"performance_notes" TEXT DEFAULT 'no notes added',
    "priority" VARCHAR (10),
	"lyrics" TEXT DEFAULT 'no lyrics added',
	"is_active" BOOLEAN DEFAULT true,
	"preview_audio" TEXT NOT NULL
);

CREATE TABLE "recordings" (
	"id" SERIAL PRIMARY KEY,
	"song_id" INT NOT NULL REFERENCES "songs",
    "description" TEXT DEFAULT 'no description added',
	"src" TEXT 
);

CREATE TABLE "chord diagrams" (
   "id" SERIAL PRIMARY KEY,
   "imageUrl" VARCHAR(1024) NOT NULL,
   "song_id" INT REFERENCES "songs"
);


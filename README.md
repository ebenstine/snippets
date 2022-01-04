# SNIPPETS

## Description

_Duration: 2 Week Sprint_

I created Snippets to help me keep all the different details and moving parts of my unfinished songs centralized in a single concisely organized location.  It's so easy to forget a good idea when writing a song -  be it a great random idea for a lyric, an unexpected utilization of an inventive guitar tuning, or a melodic inspiration. From the user's home page they can navigate either to add a new song, or to a list of songs they've already added, organized in a patterned column list that color-codes the columns according to a pre-established set of priority tiers (this is keeping track of unfinished work, after all).  The user can click on a song to view all lyrics and notes for that project, and edit them as needed.  If applicable, the user can upload additional audio recordings relevant to a song by following the menu prompts on the details page.
## Screen Shots

<img width="1440" alt="Screen Shot 2021-12-17 at 9 15 57 PM" src="https://user-images.githubusercontent.com/81579996/146627545-3eedd128-7063-4881-86b6-f90e8b7269e8.png">

<img width="1440" alt="Screen Shot 2021-12-17 at 9 18 02 PM" src="https://user-images.githubusercontent.com/81579996/146627549-e502e06b-45db-4966-a1fd-62e6c8be3c77.png">


<img width="1440" alt="Screen Shot 2021-12-17 at 9 19 01 PM" src="https://user-images.githubusercontent.com/81579996/146627557-bd48d9f0-e8d9-4d7c-9ac5-ef956b149f84.png">

<img width="1440" alt="Screen Shot 2021-12-17 at 9 17 29 PM" src="https://user-images.githubusercontent.com/81579996/146627560-640b1247-958d-4a2e-922f-71be7d795c00.png">


<img width="1440" alt="Screen Shot 2021-12-17 at 9 18 18 PM" src="https://user-images.githubusercontent.com/81579996/146627563-d06763db-218d-46c4-9cbf-3c8fd8544380.png">
<img width="1440" alt="Screen Shot 2021-12-17 at 9 19 18 PM" src="https://user-images.githubusercontent.com/81579996/146627566-c4003ec0-67a6-4e01-a94d-10bb34c92988.png">




### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)

## Installation

1. Create a database named Snippets,
2. Run the statements in database.sql
3. Open up your editor of choice and run an `npm install`
4. Create a .env file and contact ebenstine@gmail.com for access keys, or create your own AWS S3 bucket and adjust the server file to match
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. The `npm run client` command will open up a new browser tab for you!

## Usage
The application is built on file-uploading to Amazon Web Services.  The 'Add Song' page allows the user to upload an audio file and all relevant details in an open-ended conceptual form, and this action generates a new song column to the home page.  From there, the user can play the audio file, or click the column to view, edit or delete all relevant details on a separate page.

## Built With

HTML, CSS, Javascript, Node.js, Express.js, AWS S3, PostgreSQL, Material-UI, Passport, React, Redux, Redux-Sagas, React-Dropzone-S3-Uploader, React-Modular-Audio-Player.

## Coming Features
I plan to add a genre field which will create another mode of organization for the user's projects, if for example the songwriter utilizes several different mediums or styles of music.  I'll create a chat feature which will allow remote collaborators to discuss the songwriting process inside the app.  I hope to figure out a way to input and display custom guitar tunings.  

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. A very special thanks to my instructors Edan Schwartz and Matt Black.

## Support
If you have suggestions or issues, please email me at ebenstine@gmail.com


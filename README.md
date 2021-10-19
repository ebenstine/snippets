# SNIPPETS

## Description

_Duration: 2 Week Sprint_

I created Snippets to help me keep all the different details and moving parts of my unfinished songs centralized in a single concisely organized location.  It's so easy to forget a good idea when writing a song -  be it a great random idea for a lyric, an unexpected utilization of an inventive guitar tuning, or a melodic idea. The homepage is a list of songs the user has added, organized in a patterned column list that color-codes the columns according to a pre-established set of priority tiers (this is keeping track of unfinished work, after all).  The user can click on a song to view all lyrics and notes for that project, and edit them as needed, making it much easier to remember an idea that was worth remembering.
## Screen Shots
<img width="1392" alt="Screen Shot 2021-10-18 at 9 03 43 PM" src="https://user-images.githubusercontent.com/81579996/137836801-edf536ad-c6ac-475e-a757-2fe17a0545b4.png">


<img width="1422" alt="Screen Shot 2021-10-18 at 9 04 04 PM" src="https://user-images.githubusercontent.com/81579996/137836605-1b0c2349-5551-4a41-b4c4-a0097c96011f.png">

<img width="1220" alt="Screen Shot 2021-10-18 at 9 04 37 PM" src="https://user-images.githubusercontent.com/81579996/137836639-4d638805-f8ff-42e7-8dad-fd9eac0537a1.png">
<img width="1053" alt="Screen Shot 2021-10-18 at 9 35 37 PM" src="https://user-images.githubusercontent.com/81579996/137836649-565ff156-da4b-44f4-a591-530a3ef0b162.png">


### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)
- [Amazon Web Services](https://aws.amazon.com/)
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
A broader goal of this project is to store many audio files under one song project.  I also plan to add a genre field so that the user can organize their projects according to that criteria.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. A very special thanks to my instructors Edan Schwartz and Matt Black.

## Support
If you have suggestions or issues, please email me at ebenstine@gmail.com


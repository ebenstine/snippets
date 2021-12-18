# SNIPPETS

## Description

_Duration: 2 Week Sprint_

I created Snippets to help me keep all the different details and moving parts of my unfinished songs centralized in a single concisely organized location.  It's so easy to forget a good idea when writing a song -  be it a great random idea for a lyric, an unexpected utilization of an inventive guitar tuning, or a melodic inspiration. From the user's home page they can navigate either to add a new song, or to a list of songs they've already added, organized in a patterned column list that color-codes the columns according to a pre-established set of priority tiers (this is keeping track of unfinished work, after all).  The user can click on a song to view all lyrics and notes for that project, and edit them as needed.  If applicable, the user can upload additional audio recordings relevant to a song by following the menu prompts on the details page.
## Screen Shots
<img width="1440" alt="Screen Shot 2021-12-17 at 9 15 57 PM" src="https://user-images.githubusercontent.c<img width="1440" alt="Screen Sh<img width="1440" alt="Screen Shot 2021-12-17 at 9 18 02 PM" src="https://user-images.githubusercontent.com/81579996/146627415-9f471d7b-0dcd-453f-aa38-c1e028789662.png">
ot 2021-12-17 at 9 15 36 PM" src="https://user-images.githubusercontent.com/81579996/146627410-d661c3bd-f0d6-4575-9b21-f58625616eb0.png">
om/81579996/146627405-a88737b9-62b6-4a6f-8364-b6c5ec6408df.png"><img width="1440" alt="Screen Shot 2021-12-17 at 9 19 01 PM" src="https://user-images.githubusercontent.com/81579996/146627417-deebe2e3-42a8-46ca-b50a-6283b9bdeafe.png">
<img width="1440" alt="Screen Shot 2021-12-17 at 9 19 18 PM" src="https://user-images.githubusercontent.com/81579996/146627419-b0bf3d19-0614-47af-a3cc-7b99c42d8725.png">
<img width="1440" alt="Screen Shot 2021-12-17 at 9 17 29 PM" src="https://user-images.githubusercontent.com/81579996/146627420-909a439e-ba37-4697-8186-2a63162c7b4e.png">
<img width="1440" alt="Screen Shot 2021-12-17 at 9 18 18 PM" src="https://user-images.githubusercontent.com/81579996/146627423-2f592853-1842-4f66-8065-e70459821ecb.png">



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
A broader goal of this project is to store many audio files under one song project.  I also plan to add a genre field which will create another mode of organization for the user's projects. 

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. A very special thanks to my instructors Edan Schwartz and Matt Black.

## Support
If you have suggestions or issues, please email me at ebenstine@gmail.com


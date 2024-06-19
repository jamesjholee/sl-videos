This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) using [Chakra](https://v2.chakra-ui.com/) modular components to build out this application. 

## Getting Started

Install NPM dependencies

Copy env.sample to create .env file and add URL to API

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/fastApi](http://localhost:3000/api/fastApi). This endpoint can be edited in `pages/api/fastApi.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



## Description

Currently The core functionality are:

-- Show a list of videos and allow users to select a video from the list.

-- Allow the user to create a new video object with a title, description and a video URL.

-- A user must be able to comment on a video and view comments from other users.

-- Open the videos in full screen with full playback functionality.

-- Include options for adjusting playback speed and volume.

Some enhancements could been to make users login to make this more dynamic currently the user is hard coded. But will check to make sure that a User_ID is availalbe thruout the whole application since uploading a video requires a user_id and I didn't want to hard code the user_id into the POST call. Quick and bare bone solutions for each of the funtionality I think some UI/UX improvements for upload would be to show a preview of the video being uploaded to ensure the correct video. Another improvment I could of made was ensuring videos from various websites or urls are available for upload, I only optimized for Youtube videos. 


## MOBILE Screen Shots

![Screenshot 2024-06-19 at 3 55 41 PM](https://github.com/jamesjholee/sl-videos/assets/13755907/20a35c1b-5345-4471-9fb3-89b8c150f176)
![Screenshot 2024-06-19 at 3 56 01 PM](https://github.com/jamesjholee/sl-videos/assets/13755907/1c351d2d-7df3-49ed-b7b4-045c1c8a42f6)
![Screenshot 2024-06-19 at 3 55 26 PM](https://github.com/jamesjholee/sl-videos/assets/13755907/105ca593-15aa-4a7b-862f-2fe89e1ac8f5)

## Desktop Screen Shots

![Screenshot 2024-06-19 at 3 56 51 PM](https://github.com/jamesjholee/sl-videos/assets/13755907/6f163496-2783-4a42-b51e-ddf4feb6211a)
![Screenshot 2024-06-19 at 3 56 18 PM](https://github.com/jamesjholee/sl-videos/assets/13755907/26910540-32a4-46b6-ac4f-e197eab263db)
![Screenshot 2024-06-19 at 3 56 28 PM](https://github.com/jamesjholee/sl-videos/assets/13755907/b27e9cf1-beef-4818-a60a-cf10dee29a79)






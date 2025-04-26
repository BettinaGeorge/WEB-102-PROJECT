# Web Development Final Project - *HobbyHub*

Submitted by: **Bettina George**

This web app: **HobbyHub is a full-stack forum application where users can share their passions by creating posts with titles, content, and optional images. They can upvote, comment, edit, and delete posts. The app also supports reposting existing posts, category tagging, sorting, and filtering.**

Time spent: **20+ hours spent in total**

## Required Features

The following **required** functionality is completed:

- [x] **Web app includes a create form that allows the user to create posts**
  - Form requires users to add a post title
  - Forms have the option for users to add:
    - additional textual content
    - an image added as an external image URL
- [x] **Web app includes a home feed displaying previously created posts**
  - Web app must include home feed displaying previously created posts
  - By default, each post on the posts feed shows only the post's:
    - creation time
    - title
    - upvotes count
  - Clicking on a post directs the user to a new page for the selected post
- [x] **Users can view posts in different ways**
  - Users can sort posts by either:
    - creation time
    - upvotes count
  - Users can search for posts by title
- [x] **Users can interact with each post in different ways**
  - The app includes a separate post page for each created post when clicked, where any additional information is shown, including:
    - content
    - image
    - comments
  - Users can leave comments underneath a post on the post page
  - Each post includes an upvote button on the post page.
    - Each click increases the post's upvotes count by one
    - Users can upvote any post any number of times
- [x] **A post that a user previously created can be edited or deleted from its post pages**
  - After a user creates a new post, they can go back and edit the post
  - A previously created post can be deleted from its post page

## Optional Features

The following **optional** features are implemented:

- [x] Web app implements pseudo-authentication
  - Upon launching the web app, the user is assigned a random user ID stored in localStorage
  - Posts and comments are tied to the user ID
  - Only the original user author of a post can update or delete it
- [x] Users can repost a previous post by referencing its post ID
  - On the post page of the new post, the referenced post is displayed and linked, creating a thread
- [x] Users can customize the interface
  - Post layout is styled for clean readability and alignment
  - Posts with or without images display responsively
- [x] Users can add more characteristics to their posts
  - Users can set flags such as "Question", "Tip", or "Opinion" while creating a post
  - Users can filter posts by flags on the home feed
- [x] Web app displays a loading animation whenever data is being fetched

## Additional Features

- [x] Clean responsive UI layout using Flexbox and inline styles
- [x] Upvote count and comments auto-update after interaction
- [x] Error messaging and alerts (e.g., base64 image validation, fetch errors)
- [x] Editing posts includes real-time input for title, content, image

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXRscnpweDJmd2FlZXpneXlkaTY1Znp0a2plc3QzbTlndXU1bnk0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gNeTuiti76ysVK9azX/giphy.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

GIF created with **ScreenToGif**

## Notes

Challenges encountered:
- Debugging 400 Bad Request errors from Supabase inserts (due to missing fields)
- Ensuring user ID assignment persists and is securely used for post ownership
- Styling cards for posts without images to remain centered
- Implementing repost threading and conditional rendering for reposted content

## License

```text
Copyright 2025 Bettina George

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

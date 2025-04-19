# Web Development Project 7 - Crewmate Creator 

Submitted by: **Bettina George**

This web app: **allows users to create, customize, and manage a colorful crew of crewmates inspired by Among Us. Users can assign names, speed values, and colors to each crewmate, view detailed stats, edit or delete members, and monitor team diversity and performance metrics.**

Time spent: **20+ hours** spent in total

---

##  Required Features

The following **required** functionality is completed:

- [x] **The web app contains a page that features a create form to add a new crewmate**
  - Users can name the crewmate
  - Users can set the crewmate’s attributes by clicking on one of several values

- [x] **The web app includes a summary page of all the user’s added crewmates**
  - The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  - The summary page is sorted by creation date such that the most recently created crewmates appear at the top

- [x] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - Users can see the current attributes of their crewmate on the update form
  - After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 

- [x] **A previously created crewmate can be deleted from the crewmate list**
  - Using the edit form, there is a button that allows users to delete that crewmate
  - After deleting a crewmate, the crewmate is no longer visible in the summary page

- [x] **Each crewmate has a direct, unique URL link to an info page about them**
  - Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
  - The detail page contains extra information about the crewmate not included in the summary page
  - Users can navigate to the edit form from the detail page

---

##  Optional Features

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attribute value options

- [x] A section of the summary page displays summary statistics about a user’s crew on their crew page
  - Average speed of all crewmates
  - Distribution of crewmate colors shown via chart

- [x] The summary page displays a custom “success” metric about a user’s crew which changes based on speed and diversity
  - e.g., “⭐ Elite crew — colorful and fast!” or “💤 Your crew is... chill”

---

##  Additional Features

- [x] Chart.js-powered color distribution pie chart
- [x] Filtering crewmates by color dropdown
- [x] UI enhancements with centralized layout, dark theme, and accessible buttons
- [x] Real-time feedback on speed performance and diversity
- [x] Animations and hover effects for interactivity

---

## 🎥 Video Walkthrough

Here's a walkthrough of the implemented features:

<img src='https://i.imgur.com/YOUR-GIF-LINK.gif' title='Video Walkthrough' width='700' alt='Video Walkthrough' />

<!-- Replace the above line with your actual GIF URL once you upload it to Imgur or another hosting site -->

GIF created with: **ScreenToGif**

---

##  Notes

**Challenges:**
- Setting up Row-Level Security (RLS) correctly in Supabase
- Handling the 404 and RLS errors during data fetch and insert
- Keeping everything visually centered and mobile-responsive
- Getting Chart.js to work smoothly with React

---

##  License

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

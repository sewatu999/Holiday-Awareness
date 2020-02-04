# Project 2 Feedback

## Code Quality - Progressing

Criteria: Is the code well-formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

### Strengths:

-   Code is well-formatted and easy to read.
-   Variable, function and component names are semantic and sensible.

### Areas for Growth:

-   There is a lot of extraneous, non-functional code in this project. Any imports that are underlined yellow are unused in a given component and should be deleted. Any variable names that are similarly underlined and grayed out are also not being used and should be deleted. Additionally, in `App.js`, `setMonth` and `selectedMonth` don't ever seem to be used and can be deleted, as well as the state variables `selectedMonth` and `Holidays`.
-   There are also props being passed down that are not being used to the Holiday component.
-   MonthsList does not need to be saved in state if it's not going to be changed. Save state variables for anything that needs to be mutated or updated down the line.
-   All console.logs should be deleted before completing a project in the future, as well as any pseudo-code left over from the development process.
-   Please make sure to go back and delete any files that are automatically created with `npx create-react-app`.

## Technical Requirements - Progressing

Criteria: How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

### Strengths:

-   The project is a working and interactive React application that uses a third-party API and is deployed to Heroku.
-   React app has four separate components, with navigation handled by React Router.

### Areas for Growth:

-   This project is a good start and shows basic understanding of React. Once you feel more comfortable working with React, consider going back and developing it into a more interactive and complex project.

## Creativity and Interface - Progressing

Criteria: Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

### Strengths:

-   Project uses CSS Flexbox for layout and has some basic styling in place.
-   Design is simple but straightforward, and application is easy for the user to navigate.

### Areas for Growth

-   Once you feel more comfortable working with CSS, consider going back and adding some more styles to your project and showing your creativity. Could also be a good opportunity to learn a CSS framework!
-   Your app still has 'React App' as its title as well as the React favicon. Consider changing those so that your app has a more customized appearance.

## Functionality - Performing

Criteria: Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

### Strengths:

-   Application works without errors or bugs. No error messages observed in the console.
-   The app's features are implemented fully.

### Areas for Growth:

-   Numerous logs appear to the console when the user is navigating through the app. Next time be sure to remove before submission.
-   To add another function to your app and make it a bit more complex, you could add a search function so that the user can search for a holiday by its name, and return the date that way.

## Presentation - Progressing

Criteria: Is there adequate documentation? Is the repository well-organized and free of clutter?

### Strengths:

-   README presents overview of the project, including technologies used, installation instructions, user instructions, and contribution guideline.

### Areas for Growth:

-   The installation instructions are missing a few steps.
-   Please include a link to the deployed application on the repo. There is a section at the very top where you can add a description of the repo as well as put a link to the website. Your Heroku URL should go there.
-   There is no planning folder. Be sure to include a planning directory in the root of your app that has your project proposal with the user stories and wire-frames that you made beforehand, so that visitors can have some insight into your planning process.

## Hard Requirements - Complete:

-   [x] Your app must be a working, interactive, React application.
-   [x] It must include data from a third-party API.
-   [x] It must use at least 4 separate components.
-   [x] It must be deployed to the Web.
-   [x] It uses CSS Grid or Flex for layout and not floats.
-   [x] Your project repository must adequately document your project and include a line to the deployed app.
-   [x] You have used git for version control throughout the project.

## Grade: Pass

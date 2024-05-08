
## User Journey

### 1. Dashboard Viewing Mode
  - The layout is loaded from the local storage
  - The theme is loaded on the server side and served to the client on each page load
    * *It could be fetched from another server but for the sake of better user experience, it is loaded randomly on the server side*
  - User can see the analytics data in the widgets
  - The data is fetched from the server in each 5 seconds

### 2. Dashboard Customization Mode
  - User clicks on the settings button
  - User enables the customization mode
    - User can drag and drop the widgets and resize to rearrange the layout
    - The data fetching is disabled in customization mode
    - The layout is saved in the local storage
  - User clicks on the `Reset Layout` to reset the layout to the default layout


### 3. Error Handling
  - If there is an error occurs while fetching the analytics data, an error message will be shown to the user
  - User will be able to recover from the error by clicking on the retry button

## Design and Architectural Decisions
  - The project is designed based on the `Clean Architecture` and `Domain Driven Design` principles
    * *Still there are some parts that could be improved. I don't feel comfortable with those principles yet*.
  - Dependency container is used for the dependency injection
  - There 2 modules `styles` and `dashboard`. 
  - Each module is divided into the following layers
    * Application Layer
    * Domain Layer
    * Infrastructure Layer
    * Presentation Layer
  - The project is tested with `unit` and `implementation` tests
    * *Just some part of the project is tested with `unit` and `implementation` tests due to the time constraints*
  - The project is tested with `e2e` tests

## CI / CD
  - The project is deployed to the `Vercel` for the CI/CD
  - The project is deployed to the `https://kaan-bask-health.vercel.app/dashboard`
  - Whenever a new commit is pushed to the `main` branch, following actions are taken
    * The project is tested with `unit`, `implementation` and `e2e` tests
    * The project is built
    * The project is deployed to the `Vercel`

## Video Walkthrough
  - The video walkthrough is available at the `https://www.loom.com/share/98253ffc59fd404bbcbb1de174339d86?sid=204bd37c-edaf-482d-a799-036230ee2d9f`

## To run locally
  - Clone the repository
  - Run `npm install`
  - Copy `.env.example` to `.env.development`
  - Put `ANALYTICS_ACCESS_TOKEN` in the `.env.development`
  - Run `npm run dev`
  - Open the browser and navigate to `http://localhost:3000`
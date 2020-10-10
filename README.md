# Clientside Tabs Challenge

For this challenge I have chosen to use React library, as I am faster at implementing reusable components using this library. For styling I have used CSS, avoiding the use of CSS frameworks as stated in the rules of this exercise.

To see the result in your browser, you can use `yarn start`. For more information see the "Create-react-app" section below.

## Considerations

From the 5 considerations to take into account, I have chosen to focus on Reusability (by using React.js and separating each independent component each of them can be reused in different pages and keeping the same style) and Accessibility (by making sure the HTML tags are as readable as possible within my knowledge).

Another aspect I have taken into account is making it easier to users that only use keyboard, as that is something I often do out of being used to it (for it I have used CSS styles for both hover and focus)

Regarding Browser support, this app works fine in Google Chrome Version 86.0.4240.75, Firefox version 81.0.1 and Microsoft Edge Versión 86.0.622.38 (I have not tested the app in other browsers due to time restrictions).

Initially I have included the 3 requested tabs in constants, just so we can add more tabs as needed by adding the search title in `tabList`.

The initial state of the lists is a link towards the main page of the guardian for that section: [Uk News](https://www.theguardian.com/uk-news), [Football](https://www.theguardian.com/football), [Travel](https://www.theguardian.com/uk/travel). This was made in order to the user to have access to the related news even if the fetch fails.

I have not implemented Tests for this app due to time restrictions, but the main tests I would run would be for confirming the different states and confirming that the fetch is returning the values as expected (for it I would refactor the `useEffect` inside the `Tab` component so it imports the fetchData function from a different file so there is no need to copy it manually for the test).

I have not included my requested key for the API in this app, however using `key="test"` works the same way. Shall we want to use the key I would only need to include it in an `.env` file and import it (and add it as an argument in the fetchData function).

## To Do

What I would have implemented if there was no time restrictions

- [ ] Unit testing and basic component testing (I am still learning)
- [ ] Make a version without JavaScript (this could be done by using a simple HTML file with given links to the different news statically)
- [ ] Review and improve browser support
- [ ] Review color contrast to make sure everyone can read the text easilly and add different themes (including dark mode )
- [ ] Include CSS variables for reusable colors and sizes.

## Final thoughts

This has been a great experience where I have had to get back to the basics and review things I have not done in a while.

Together with the Scrabble app that I had to implement in the previous test I have not only gathered inspiration to build more personal projects in the near future, but also taken notes on what aspects I need to spend more time learning.

Overall, this has been a challenge that I am greatful to have taken part of.

# Create-React-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

A Light/Dark Mode Toggle provides users the ability to switch between two modes: a light theme (which has a light background with dark text) and a dark theme (which has a dark background with light text). This functionality enhances the user experience by offering customization and improving accessibility. The switch can be made by clicking a button, and the selected theme persists between sessions using localStorage.

How It Works:
* HTML: A button is created for the user to toggle between light and dark mode.
* CSS: The styles for both light and dark modes are defined. The dark-mode class is toggled in the <body> element to switch between the two styles.
* JavaScript: When the user clicks the toggle button, the JavaScript will switch the class on the body element to toggle between light and dark themes. The theme preference is saved in the browser’s localStorage to persist the choice across page reloads.

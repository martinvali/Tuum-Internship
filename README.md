# Front-end position internship test assignment

Main technologies used: React, TypeScript, Mantine UI Components, TailwindCSS.

Vite was used to set up the project and bundle it.

# Adding flags to the select element

To add a flag next to each country, I used freak flags from https://www.freakflagsprite.com/

Since having each flag as a separate image would result in a huge amount of HTTP requests, I decided to go with this approach.

This approach includes only one HTTP request, where a sprite with all images are included. Then, with the help of css, only the correct part of the image is displayed. Also, the image is only fetched, if the user clicks on the select element.

This approach optimizes the solution a lot. To improve user experience, you might want to fetch the flags' image when the user hovers on the select element, to avoid a small delay.

# Front-end position internship test assignment

Main technologies used: React, TypeScript, Mantine UI Components, TailwindCSS.

Vite was used to set up the project and bundle it.

# Adding flags to the select element

To add a flag next to each country, I used freak flags from https://www.freakflagsprite.com/

Since having each flag as a separate image would result in a huge amount of HTTP requests, I decided to go with this approach.

This approach includes only one HTTP request, where a sprite with all images are included. Then, with the help of css, only the correct part of the image is displayed. Also, the image is only fetched, if the user clicks on the select element.

This approach optimizes the solution a lot. To improve user experience, you might want to fetch the flags' image when the user hovers on the select element, to avoid a small delay.

# Running and building locally

1. Clone the project from GitHub.
2. Open up a terminal and change directory to folder Tuum-Contact if needed.
3. In the terminal, run npm install
4. In the terminal, run npm run dev

5. For building the project, in the terminal, run npm run build and a dist folder with the bundled code will be created.

# Notes

I left the checkboxes a bit bigger than in the original design, as I felt it makes for a better outcome visually. The border color of the checkboxes is also lighter than in the original design for the same reason.

Additionally, the placeholder text of the country select element is lighter than in the original design to make for a more consistent design.

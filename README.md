# Fuel Manifold Assembly Puzzle

A premium interactive technical English slide that turns the original uploaded
fuel manifold PNG into a numbered assembly puzzle. The app is a static site
built with plain HTML, CSS, and JavaScript.

## Files

- `index.html` - main entry point for the page
- `style.css` - premium responsive layout, cards, buttons, SVG states, and animations
- `script.js` - `assemblyComponents` and `assemblySequence` data, generated PNG overlay slots, generated cards, pronunciation, relations, and sequence logic
- `assets/original-assembly.png.png` - required original PNG master visual

## Run locally

Open `index.html` directly in any modern browser.

You can also serve the folder with any static file server, but no npm,
`package.json`, backend, or build tools are required.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Choose the branch that contains these files and select the repository root.
5. Save the settings and open the generated GitHub Pages URL.

## How to play

1. Add the original uploaded PNG as `assets/original-assembly.png.png`.
2. Review the **Full kit** mode to see the original full image with interactive markers.
3. Switch to **Build / puzzle mode**.
4. Select a bottom component card and match it to the same-number dashed slot.
5. Read the generated active right-side card for pronunciation, Russian support, function, fit relation, and sentences.
6. Click the right-side card or a dashed slot to review the same linked component.
7. Use the **Assembly sequence** trainer to practise First, Then, Next, and Finally sentences.
8. Use **Final assembly** to compare your build with the completed unit.

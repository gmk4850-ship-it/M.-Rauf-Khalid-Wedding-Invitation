# R & L Walima Invitation — GitHub Pages

A responsive static wedding invitation website built with HTML, CSS, and vanilla JavaScript.

## Files
- `index.html` — page content
- `style.css` — visual design and responsive layout
- `script.js` — editable wedding details and contact links
- `assets/` — add your couple photo and optional music here

## Edit your invitation
Open `script.js` and edit the `WEDDING_CONFIG` object near the top. You can change names, event title, date, time, venue, map URL, RSVP contacts, colors, photo path, and music path.

To add a couple photo:
1. Upload a photo to the `assets` folder.
2. Set `couplePhoto: "assets/couple.jpg"` (use the exact uploaded filename).

To add music:
1. Upload an MP3 file to `assets`.
2. Set `musicFile: "assets/wedding-music.mp3"`.

Music starts only after a visitor presses the play button, due to browser autoplay restrictions.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the website; GitHub will show its URL in the Pages section.

All local asset paths are relative so the site can run on GitHub Pages.

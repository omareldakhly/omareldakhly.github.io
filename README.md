# Omar Mohamed AI Automation Portfolio

A premium static portfolio website for Omar Mohamed, an AI Automation Specialist building practical workflows with Make.com, OpenAI, Telegram, WhatsApp, Gmail, Google Sheets, CRM tools, and AI agents.

The website is business-focused and designed for clients, recruiters, freelance platforms, agencies, startups, and business owners who want faster operations, better follow-up, and less manual work.

## Tech Stack

- HTML
- CSS
- JavaScript

There is no backend, no API key usage, no paid library, and no build step.

## File Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- README.md
`-- assets
    |-- hero-ai-automation.png
    `-- omar-mohamed-portrait.png
```

## How to Edit Hero Text

Open `index.html` and search for:

```text
Hero Section
```

Update the hero headline, supporting paragraph, CTA text, tool badges, or availability badge inside that section.

## How to Replace Contact Links

Open `index.html` and search for the current link you want to replace.

Final contact links used in the website:

```text
LinkedIn:
https://www.linkedin.com/in/omar-mohamed-267361418/

GitHub:
https://github.com/omareldakhly

Email:
omareldakhly20@gmail.com

Gmail Compose:
https://mail.google.com/mail/?view=cm&fs=1&to=omareldakhly20@gmail.com&su=AI%20Automation%20Project%20Inquiry

WhatsApp:
https://wa.me/201127154991

WhatsApp CTA:
https://wa.me/201127154991?text=Hi%20Omar%2C%20I%20want%20a%20free%20automation%20review%20for%20my%20business.

Calendly:
https://calendly.com/omareldakhly20/free-15-minute-automation-discovery-call

Telegram:
https://t.me/omar_m2000
```

These appear in:

- Navbar CTA
- Hero CTA
- Contact section cards
- Footer contact links
- Copy email button data
- Contact section Calendly scheduling button

## Project Links Used

The portfolio uses these verified project links:

```text
YouTube Content Repurposing Bot:
https://github.com/omareldakhly/AI-YouTube-Content-Repurposing-Publishing-Bot

YouTube Case Study:
https://github.com/omareldakhly/AI-YouTube-Content-Repurposing-Publishing-Bot/blob/main/CASE_STUDY.md

AI WhatsApp & Telegram Lead Intake Agent:
https://github.com/omareldakhly/AI-WhatsApp-Telegram-Lead-Intake-Agent

AI WhatsApp & Telegram Case Study:
https://github.com/omareldakhly/AI-WhatsApp-Telegram-Lead-Intake-Agent/blob/main/CASE_STUDY.md
```

If a project repository changes later, open `index.html`, search for the project title, and update the related button `href` values.

## How to Replace the YouTube Demo Link

The main lead-intake video demo link is:

```text
https://youtube.com/shorts/cZs-OTKscF8?feature=share
```

The YouTube Content Repurposing Bot demo link is:

```text
https://youtu.be/j88-zAzorkQ?si=i4Aovp2OzlmnuZ-l
```

Open `index.html` and search for:

```text
Video Demo Section
```

Replace the `Watch on YouTube` button link if the demo changes. The page uses a polished video card so YouTube Shorts embed errors do not show on the portfolio.

## Social Sharing Metadata

Open `index.html` and search for:

```text
FINAL_PUBLIC_PORTFOLIO_URL
ABSOLUTE_PUBLIC_OG_IMAGE_URL
```

After GitHub Pages gives you the final live portfolio URL, replace `FINAL_PUBLIC_PORTFOLIO_URL` with that public URL.

Create or upload a public 1200 x 630 preview image, then replace `ABSOLUTE_PUBLIC_OG_IMAGE_URL` with the full public image URL. Do not use a local Windows file path for Open Graph or Twitter images.

## How to Replace the Calendly Link

The live Calendly scheduling link is:

```text
https://calendly.com/omareldakhly20/free-15-minute-automation-discovery-call
```

Open `index.html` and search for:

```text
Schedule Your Free 15-Min Call
```

Replace the nearby `href` value if the scheduling link changes.

## How to Replace the Profile Image

The current portrait is stored here:

```text
assets/omar-mohamed-portrait.png
```

To replace it:

1. Add the new portrait image to the `assets` folder.
2. Rename it to `omar-mohamed-portrait.png`, or update the image path in `index.html`.
3. Keep the image large enough for desktop display.
4. Use a professional portrait with clean lighting for best results.

## How to Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder.
3. Open the repository on GitHub.
4. Go to `Settings`.
5. Open `Pages`.
6. Under `Build and deployment`, choose `Deploy from a branch`.
7. Select the `main` branch and the root folder.
8. Save.

GitHub Pages will generate a public website link after deployment finishes.

## Notes

- The website is fully static and easy to deploy.
- The design uses CSS variables for colors, spacing, radius, and shadows.
- The navigation includes mobile menu behavior and active section highlighting.
- Scroll reveal animations are lightweight and respect reduced motion settings.
- No fake clients, testimonials, statistics, backend forms, or API keys are included.

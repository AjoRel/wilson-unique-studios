# Wilson Unique Studios Website

## About the project

I developed this website for CPTR331 Web Development, Assignment 5 (Putting It All Together in Style!) at the University of the Southern Caribbean. I chose my own photography and videography business because I wanted to build something that I could continue using after the semester. The six pages are Home, About, Photography, Video & Livestream, Portfolio and Book/Contact.

Live site: https://stupendous-babka-9e0ce4.netlify.app/

## Technologies and structure

I used HTML5, CSS3, JavaScript, Skeleton 2.0.4 and the Montserrat and Inter fonts from Google Fonts. The HTML pages are in the root; css/style.css contains shared styling, js/main.js contains the interactive logic, and img/ contains photographs, graphics and client logos. The media/ folder is reserved for local media; the current background video is hosted externally by Vimeo. Features include a mobile menu, client logo carousel, portfolio filtering and contact form validation.

## Hosting and CDN

I created a Netlify account and deployed the static website using its CDN over HTTPS. The _headers file sets cache-control for CSS and JS (one day), images (seven days) and HTML (revalidation). CSS and JS links use the ?v=3.0 version parameter. The _redirects file defines clean routes. Skeleton is served by cdnjs, fonts by Google Fonts and video by Vimeo. Netlify deployment of the latest repository revision still needs to be checked.

## Performance testing

I reduced the image folder from approximately 61.9 MB to 2.8 MB (about 95.5%) and used WebP logos, lazy loading and deferred JavaScript. Earlier Lighthouse results recorded in my November 23 report were: desktop performance 96, mobile before optimization 66 and mobile after optimization 78. Accessibility and SEO were 100, and Best Practices was 77 in all three observations. The original Lighthouse screenshots have not been recovered.

On November 26 I used Safari Web Inspector and a Python local HTTP server. With browser caches disabled, the two local load times were 1.610 s and 0.747 s (average 1.1785 s). Netlify recorded 1.130 s with browser caching disabled and 0.764 s with cached resources visible. The uncached hosted observation was about 4.1% lower than the local average; the cached observation was about 32.4% lower than the uncached observation. These are preliminary observations, not proof of a CDN-only speed improvement. Request counts and viewport appearances differed, the local and hosted versions were not confirmed identical, and the Vimeo video continues transferring data. The actual Safari screenshots are included in my submitted technical report.

## Accessibility and SEO

I used semantic HTML, image alt text, labelled form controls, a skip link, ARIA states, responsive layouts and reduced-motion support. I added individual page titles and descriptions, robots.txt and sitemap.xml using the actual Netlify domain. Automated accessibility scores do not establish full accessibility compliance.

## Testing and limitations

To run locally, open a terminal in the project root, run python3 -m http.server 8000, then visit http://localhost:8000/. Check all six pages and test the navigation, filters and form. The form validates name, email, address and telephone, but an earlier live submission returned a 404; successful receipt in Netlify Forms still needs confirmation. W3C HTML validation for all six pages and the current Netlify deployment also need verification.

## Developer

Adriell Wilson — BSc Computer Science, University of the Southern Caribbean.

# Heffington Build

## Project links

- [Github Frontend link](https://github.com/kilahsw/Heffington)

- [Netlify Link](https://heffington.netlify.app/)

## Project Description

New site mockup for Ryan Heffington, a choreographer and director based in California. Ryan is looking to update his site to a sleeker more concise application that showcases his work in choreography and directing. He wants a clear distinction between the two categories (something he doesn't currently have) and an easy way to update the site with additional work.

## Project Styling

Simple and sleek. Easy to read and navigate. mostly black/white/gray, with the video thumbnails providing most of the color.

Fonts - tbd

## Backend

This app will use contentful as its headless cms. Details to follow

## Wireframes and App Structure

### App Structure

- [React Architecture](https://docs.google.com/drawings/d/1K75zghGynQX5OM7mOXCzGqm9y4y0Ebru2bbdDTB8EqY/edit?usp=sharing)

### Wireframes

Below is a link to our wireframe, we'll adjust this to be responsive as we develop the app.

- [Mobile/Tablet/Desktop Wireframe](https://www.figma.com/file/uRWlZmceXKUMqw5nC9ztwR/Heffington?node-id=0%3A1)

## MVP / User Story / Post MVP

##### Unless otherwise noted, time is listed in hours.

### MVP

- Install dependencies and libraries
- Mobile First Styles
- Media Queries
- Fetch/Axios/AJAX call
- Deploy to Netlify

### User Story

- User will click 'Choreograhy' or 'Directing' or 'About' from the landing page to access content
- User can read about Ryan's past and current work and one or two personal details. This page will contain contact infomation and a link to Ryan's public Instagram page.
- User will see a display of thumbnails on both the choreography and directing pages. There will be director and choreography* credits (*where applicable) for each
- User will be able to navigate from page to page on a nav bar that blends with the rest of the page. This should not look like a separate element

### Time Estimates

| Component      | Priority | Estimated Time | Actual Time |
| -------------- | :------: | :------------: | :---------: |
| Written design |    h     |       3        |      2      |
| Wireframes     |    h     |       3        |      2      |
| Architecture   |    h     |       1        |     .5      |
| Total          |    h     |       7        |     4.5     |

| Task                           | Priority | Estimated Time | Actual Time |
| ------------------------------ | :------: | :------------: | :---------: |
| Install/research libraries     |    h     |       5        |     20      |
| Gatsby Skeleton                |    h     |       5        |      3      |
| Netlify Deploy                 |    h     |       2        |      4      |
| Responsive Landing Page        |    h     |       5        |     18      |
| Responsive 'About' Page        |    h     |       3        |     18      |
| Api Creation - Contentful      |    h     |       5        |      3      |
| Responsive 'Choreography' Page |    h     |       5        |      2      |
| Responsive Director Page       |    h     |       5        |      2      |
| Total                          |          |       35       |     70      |

### Post MVP

- Framer motion for "loading"

### Time Estimates

| Task               | Priority | Estimated Time | Actual Time |
| ------------------ | :------: | :------------: | :---------: |
| Additional Library |    l     |       3        |     n/a     |
| Subtle Animation   |    l     |       4        |     n/a     |
| Total              |    h     |       7        |     n/a     |

## Additional Libraries

- [Contentful](https://www.contentful.com/get-started/)
- [Gatsby](https://www.gatsbyjs.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Code Snippet

Workaround for getting the landing page pics to change. Will only work for the screensize that the app is opened in, otherwise requires a refresh.
```
{...(typeof window !== 'undefined' && window.innerWidth
            ? window.innerWidth < 1024
              ? data.allContentfulPerson.edges[0].node.image
              : data.allContentfulPerson.edges[0].node.imageDesk
            : null)}

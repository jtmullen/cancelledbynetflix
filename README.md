# Cancelled By Netflix

A record of all the shows Cancelled by Netflix before they ran their course.

## Contributing

If you are not familiar with git you can open an issue to report a missing cancelled show. 

To contribute to this project please create a fork, make your changes on a branch, and submit a Pull Request.

### Adding a Cancelled Show

To add a cancelled show you will need to create a new markdown file in the _shows/[year] folder. Where year is the year the show was cancelled. Please name the file as the name of the show with spaces replaced with dashes. 

Only the "[front-matter](https://jekyllrb.com/docs/front-matter/)" YAML is used, no other content of the markdown file is used. All fields are required, below is an example front-matter:

```yml
---
title: Gentefied  # cancelled show title
date: 2022-01-01  # date of cancellation (yyyy-mm-dd), use the 1st of the month when only month is known
description: The Latino Drama-Comedy Genetified was not renewed for a third season. 
# Short description of the show and its cancellation. Keep under 30 words
seasons: 2 # Total seasons the show ran
episodes: 18 # Total Number of Episodes
netflix-url: https://www.netflix.com/title/80198208  # Link to the Show On Netflix
source-name: Wikipedia  # Source that verifies the cancellation
source-url: https://en.wikipedia.org/wiki/Gentefied  # Link to Source
---
```

## Build Locally

To build locally, simply clone the repository and follow this [guide from GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

## License
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/jtmullen/cancelledbynetflix/blob/main/LICENSE)

The theme and site is released under GPLv3. Note that some assets (photos, logos) which may be included in this repo are not included in this license and have a separate license. 

## Credit

This site is built with Jekyll. The design is a modified version of the  [Flexible-Jekyll](https://github.com/artemsheludko/flexible-jekyll) theme by [Artem Sheludko](https://github.com/artemsheludko). 


# Cancelled By Netflix

A record of all the shows Cancelled by Netflix before they ran their course.

[![Build & Deploy](https://github.com/jtmullen/cancelledbynetflix/actions/workflows/deploy.yml/badge.svg)](https://github.com/jtmullen/cancelledbynetflix/actions/workflows/deploy.yml) [![Check Links](https://github.com/jtmullen/cancelledbynetflix/actions/workflows/check-links.yml/badge.svg?branch=gh-pages&event=schedule)](https://github.com/jtmullen/cancelledbynetflix/actions/workflows/check-links.yml)

## Contributing

### Report a Cancelled Show

If you are not familiar with git you can open an issue to report a missing cancelled show. 

To contribute to this project please create a fork, make your changes on a branch, and submit a Pull Request.

### Adding a Cancelled Show

To add a cancelled show you will need to create a new markdown file in the _shows/[year] folder. Where year is the year the show was cancelled. Please name the file as the name of the show with spaces replaced with dashes, leave out any special characters.

Only the "[front-matter](https://jekyllrb.com/docs/front-matter/)" YAML is used, no other content of the markdown file is used. All fields are required except the image (in which case a default will be used), below is an example front-matter:

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
img: folder/img.png # Image Link - relative to assets/img
---
```

Notes: 
- `Sources`: I tend to default to Wikipedia unless the wiki page doesn't list the info needed about cancellation or there is something else notable (such as a quote) to source from somewhere else. 
- `Seasons/Episodes`: This should be at the time of cancellation, for some shows that get picked up elsewhere this won't be the shows total seasons/episodes.
- `Images`: Please see the [pinned issue](https://github.com/jtmullen/cancelledbynetflix/issues/9)

### Other Changes

If you are changing anything other than a cancelled show record and/or images, please run the site locally to test and verify your changes. 

## Build Locally

To build locally, simply clone the repository and follow this [guide from GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll). The `_config.yml` is configured for local use and will put the site up on localhost port 4000. 

## License
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/jtmullen/cancelledbynetflix/blob/main/LICENSE)

The Jekyll theme and related site files are released under GPLv3. 

Some assets (photos, logos) which may be included in this repo are not included in this license and have a separate license which is specified in their folders. See the [readme](https://github.com/jtmullen/cancelledbynetflix/blob/main/assets/img/copyright/README.md) in the assets/img folder and its subfolders. 

## Credit

This site is built with Jekyll. The design is a modified version of the  [Flexible-Jekyll](https://github.com/artemsheludko/flexible-jekyll) theme by [Artem Sheludko](https://github.com/artemsheludko). 


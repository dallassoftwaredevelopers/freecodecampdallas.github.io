## Installation ##

Ensure one has a latest copy of ruby, bundler, and node then execute:

    npm install && npm start

## Deployment ##

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


## Howto ##

### Edit articles ###

One can add new articles by writing a simple [markdown](http://daringfireball.net/projects/markdown) file in the /blog/_posts
folder. Ensure that there is [Frontmater](jekyllrb.com/docs/frontmatter) at the top of your article selecting the default 
template layout and priority for the sitemap.


    ---
    layout: default
    sitemap:
        priority: 0.7
        changefreq: 'monthly'
    ---
    ...

### Change layout ###

Global layout changes are made in the files located in `_layouts` and `_includes`. While individual page
layout changes can be preformed on thier folder's index.html files.


## Resources ##

* [github](https://github.com/freecodecampdallas/freecodecampdallas.github.io)
* [workflow article one](http://www.aymerick.com/2014/07/22/jekyll-github-pages-bower-bootstrap.html)
* [workflow article two](http://www.pletscher.org/blog/2013/05/27/website.html)

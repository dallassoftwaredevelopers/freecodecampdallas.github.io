### Installation ###

##Windows Users

1. Ensure one has a latest copy of node and ruby
    https://nodejs.org/en/ <<Node
    http://rubyinstaller.org/ <<Ruby

*Be sure to add node and ruby to your PATH*

2. Once installed open command prompt and install bundler (gem bundler install)
3. After installation is complete cd into the directory of the project and run the following
    *npm install
    *npm start
    *npm run serve
4. Once completed point your browser to localhost:4000
5. Profit!

## Deployment ##

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## FAQ ##

### How does one contribute articles and pages ###

One can add new articles by writing a simple [markdown](http://daringfireball.net/projects/markdown)
file in the /blog/_posts folder. Ensure that there is [Frontmater](jekyllrb.com/docs/frontmatter) 
at the top of your article selecting the default template layout and priority
for the sitemap. The filename structure follows YEAR-MONTH-DAY-Title.md with
'-' substituting spaces in one's article title.

    ---
    layout: default
    sitemap:
        priority: 0.7
        changefreq: 'monthly'
    ---
    ...

Pages are not that much different from articles, except one would just create
a new folder with the name of the page (ie site.github.io/about would be
the folder ./about) and create your content in index.md or index.html.


### How to fix "Invalid Date: '' is not a valid datetime" error ###

Pages require the lastmod date in thier frontmatter. Be sure to always use
the ISO 8601 DateTime format, e.g. 2008-10-31T15:07:38.6875000-05:00:

        sitemap:
                priority: 0.5
                changefreq: 'yearly'
                lastmod: 2015-12-15T14:31:54.336512812

### How to Change layout or add new links to the navigation ###

Global layout changes are made in the files located in `_layouts` and
`_includes`. While individual page layout changes can be preformed on thier
folder's index.html files.

One would find the navigation template in _includes/navigation.html.

FontAwesome and bootstrap is used to help with the site's layout, therefor
follow those conventions when adding content to the layouts.


## Resources ##

* [github](https://github.com/freecodecampdallas/freecodecampdallas.github.io)
* [workflow article one](http://www.aymerick.com/2014/07/22/jekyll-github-pages-bower-bootstrap.html)
* [workflow article two](http://www.pletscher.org/blog/2013/05/27/website.html)

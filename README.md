# TechGeneralist UI Web Component Library

The intention of this libarary is to offer a set of reusable UI web components
that "feel" like Bootstrap, are built on the flexibility of Tailwind CSS, and
are extensible to libs like React, Angular, or just the plain old web.

## Yet Another UI Library?

I've built many different websites and I generally end up rebuilding things like
layouts and different widgets of all sorts. This library is just for me to reuse
with my personal projects. If others find it helpful fantasctic but this is to
scratch my own itch.

## Usage

Import the components appropriate for your environment.

`import {SocialLink, TwitterIcon} from 'tech-generalist-ui-components/next'`

Use the component in your application somewhere.
`<SocialLink href="https://twitter.com/jfgrissom" aria-label="Follow on Twitter" icon={TwitterIcon} />`

In order to use this libarary you'll need to include this node_modules entry in
your `tailwind.config.js` file. If you don't do this the CSS for the components
don't get included in the CSS post processing stage of your build.

```
content: [
    './node_modules/tech-generalist-ui-components/**/*.js',
  ],
```

## How to support this work.

Please feel free to submit
[bug report](https://github.com/jfgrissom/tech-generalist/issues) or
[pull (merge) requests](https://github.com/jfgrissom/tech-generalist/pulls).

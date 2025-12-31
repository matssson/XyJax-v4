# XyJax v4
 -- Xy-pic extension for **MathJax version 4** --

----
XyJax is an almost Xy-pic compatible extension for **MathJax version 4**.<br>
This extension enables you to draw various graphs and diagrams.

This is a fork of https://github.com/sonoisa/XyJax-v3.<br>
See https://sonoisa.github.io/xyjax-v3/xyjax-v3.html for more details.

- MathJax: https://www.mathjax.org/
- Xy-pic: https://www.tug.org/applications/Xy-pic/

This software is under development.


## Installation instructions

### Hosting your own copy of XyJax-v4

(ref. test/sample-xyjax-v4-chtml.html and test/sample-xyjax-v4-svg.html)

1. Download build/xypic.js. The rest of the files are not necessary for use. 

2. In your html, configure it to load the xypic.js you downloaded.
```
<script>
  MathJax = {
    loader: {
      load: ['[xypic]'],
      paths: {xypic: './xypic.js'}  // specify the path where xypic.js is located 
    },
    tex: {
      packages: {'[+]': ['xypic']}
    }
  };
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4.1.0/tex-mml-chtml.js"></script>
<!-- <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4.1.0/tex-svg.js"></script> -->
```


### Using XyJax-v3 from a CDN

(ref. test/sample-xyjax-v3-CDN.html)

1. In your html, configure it to load the xypic.js.
```
<script>
  MathJax = {
    loader: {
      load: ['[xypic]'],
      paths: {xypic: 'https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/xypic'}
    },
    tex: {
      packages: {'[+]': ['xypic']}
    }
  };
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.1.4/es5/tex-chtml-full.js"></script>
<!-- <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.1.4/es5/tex-svg-full.js"></script> -->
```


## Supported MathJax Functions

- Supported MathJax version:
    - 4.0.0+
- Supported Renderers:
    - CHTML
    - SVG
- Accessibility does not work.


## For Developers

### How to build xypic.js for production
```
$ git clone https://github.com/matssson/XyJax-v4
$ cd XyJax-v4
$ npm run icloud_nosync_install
$ npm run clean
$ npm run build
```


### Hot to build MathJax and xypic.js for debugging
```
$ git clone https://github.com/matssson/XyJax-v4
$ cd XyJax-v4
$ npm run icloud_nosync_install
$ npm run clean
# npm run build_mathjax_for_debug
$ npm run build
```

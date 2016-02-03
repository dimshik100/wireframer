# framify: Responsive Wireframing in the Browser (a jQuery Plugin)

Framify is a jQuery plugin that turns basic HTML, layout CSS, and CSS @media 
queries into responsive, in-browser wireframes that a client can interact with.

These wireframes can be configured to uniquely identify and color-code sections 
identified by the developer/designer to aid in client communication and assist 
in identifying how sections of a page change at various resolutions.

## Benefits

* Create one page instead of multiple physical/digital layouts.
* Let clients see the wireframe as they will see the site: at different 
resolutions and on different devices.
* Remove framify.js when a design is approved and your layout HTML and CSS is 
practically done.

## Requirements

* [jQuery](http://jquery.com/) 1.3.2 or higher

## Demo

Download: [example.html](https://github.com/artlawry/framify-jquery-plugin/blob/master/example.html).

Live: [example.html](http://dl.dropbox.com/u/2241085/framify/example.html).

* Resize to observe elements change location while maintaining a familiar 
wireframe styling.
* Click the ƒ tab at the top to toggle the wireframe styles on and off, 
revealing the underlying HTML and CSS.

## Preparation

First, load [jQuery](http://jquery.com/) 1.3.2 or higher and the framify plugin:

``` html
<script src="jquery.min.js"></script>
<script src="framify.js"></script>
```
	
Next, create a DOM ready function in which to place your framify call:

``` html
<script>
	$(document).ready(function(){
	
		// your code here
	
	});
</script>
```

Finally, create your structural HTML, layout CSS, and any media queries.
Leave the display css off (borders, colors, text effects, rounded corners).
Remember, this is all about getting a responsive wireframe set up.

I highly recommend using tools like [placehold.it](http://placehold.it) and 
various text generation tools to create content before it's available.

## Usage

### Basic

In its most simple form, framify can be called without any options and will 
aggressively convert common block-level elements into bounded sections, as well 
as converting media (images, video, audio) into wireframe components

``` javascript
	$.framify();
```

### Targeted

You can also call framify() on a selector. If used this way, each of the 
elements the selector matches gets converted into a bound section.

``` javascript
	$('header, footer, aside, #body').framify();
```

Similarly, the above can be achieved by passing a selector for the sections 
into framify:

``` javascript
	$.framify({'sections': 'header, footer, aside, #body'});
```

### Advanced

Options may be passed into the framify function to control various aspects of
the wireframe rendering (see below).

Repeat calls to framify() destroy the existing wireframes and do not re-use the 
previously used selectors, so you may wish to store your selectors for later 
re-use:

``` javascript
var framifySections = 'header, footer, aside, #body';
var framifyOptions = {
	'color': 0,
	'images': 0
};
$(framifySections).framify(framifyOptions);

// and later…

$(framifySections).framify(framifyOptions);
```
	
## Options

### sections

default: 'div, nav, section, article, header, footer, aside'

possible values: 0 or 1

``` javascript
$.framify({'sections': '.section'});
$('.section').framify();
```

Defines the elements to treat as individually bounded sections. Uniquely bound
sections will be enumerated, and if ``color`` is set to 1, will be colored
through a cycle of 7 colors.

A section contained within another section does not get a unique identifier or
color, but it will be visibly bounded and have a darker background.

### toggle

default: 1

possible values: 0 or 1

``` javascript
$.framify({'toggle': 0});
```

Enables or disables the floating tab (top center) that toggles the wireframe 
styles on and off.

### toggle-class

default: 'styled'

possible values: any CSS class name

``` javascript
$.framify({'toggle-class': 'with-styles'});
```

Applies the specified class to the body element when framify is toggled off.
This allows display CSS to coexist with framify so long as all display CSS
selectors begin with the toggle-class class:

``` css
// will be applied when framify is toggled off if a toggle-class of with-styles
// is specified
.with-styles .container {
	font-color: red;
}
```

It is good practice to put this class on your body tag to begin with as framify
will remove it if necessary. This is so that when you remove framify your styles
will all appear as intended.
	
### color

default: 1

possible values: 0 or 1

``` javascript
$.framify({'color': 0});
```
	
Enables or disables section coloring. When set to 0, all sections will be gray. 
When set to 1, colors will cycle through gray, blue, green, yellow, orange, 
red, and purple before repeating if necessary.

### image

default: 1

possible values: 0 or 1

``` javascript
$.framify({'image': 0});
```

Enables or disables conversion of ``<img>`` tags to wireframe elements. 
Combine with ``image-exclude`` to target only specific images.

### image-exclude

default: ''

possible values: any CSS selector

``` javascript
$.framify({'image-exclude': '#not-this-image'});
```

A selector of ``<img>`` tags not to convert into wireframes.

### video

default: 1

possible values: 0 or 1

``` javascript
$.framify({'video': 0});
```

Enables or disables conversion of ``<video>`` tags to wireframe elements. 
Combine with ``video-exclude`` to target only specific videos.

### video-exclude

default: ''

possible values: any CSS selector

``` javascript
$.framify({'video-exclude': '#not-this-video'});
```

A selector of ``<video>`` tags not to convert into wireframes.

### audio

default: 1

possible values: 0 or 1

``` javascript
$.framify({'audio': 0});
```

Enables or disables conversion of ``<audio>`` tags to wireframe elements. 
Combine with ``audio-exclude`` to target only specific audio.

NOTE: Only ``<audio>``tags with the controls attribute set will actually
be converted.

### audio-exclude

default: ''

possible values: any CSS selector

``` javascript
$.framify({'audio-exclude': '#not-this-audio'});
```

A selector of ``<audio>`` tags not to convert into wireframes.

### canvas

default: 1

possible values: 0 or 1

``` javascript
$.framify({'canvas': 0});
```

Enables or disables conversion of ``<canvas>`` tags to wireframe elements. 
Combine with ``canvas-exclude`` to target only specific canvases.

### canvas-exclude

default: ''

possible values: any CSS selector

``` javascript
$.framify({'canvas-exclude': '#not-this-canvas'});
```
	
A selector of ``<canvas>`` tags not to convert into wireframes.

### form

default: 1

possible values: 0 or 1

``` javascript
$.framify({'form': 0});
```

Enables or disables conversion of form input elements to wireframe elements. 
Combine with ``form-exclude`` to target only specific form input elements.

### form-exclude

default: ''

possible values: any CSS selector

``` javascript
$.framify({'form-exclude': '#not-this-form-input'});
```

A selector of form input elements not to convert into wireframes.

### table

default: 1

possible values: 0 or 1

``` javascript
$.framify({'table': 0});
```

Enables or disables conversion of ``<table>`` tags to wireframe elements. 
Combine with ``table-exclude`` to target only specific tables.

### table-exclude

default: ''

possible values: any CSS selector

``` javascript
$.framify({'table-exclude': '#not-this-table'});
```

A selector of ``<table>`` tags not to convert into wireframes.
				
## Grid, Columns, and Gutters

In addition to converting a layout to wireframes, you may also specify a grid of columns
that will be displayed behind the page content for alignment purposes.

A grid will not be drawn unless the ``grid`` and ``columns`` options are specified
(grid has a default value). 

### grid

default: 'body'

possible values: any CSS selector that resolves to a single element

``` javascript
$.framify({'grid': '#grid'});
```

Sets the target sizing element for the grid.  This element should constrain most/all of
your layout and be as wide as your grid including outer half-gutters.

### columns

default: 0

possible values: any positive integer or 0 (large integers may do very bad things)

``` javascript
$.framify({'columns': 12});
```

Sets the number of columns in the grid.  Column width will be calculated as ``grid``
width / columns - gutter``.

### gutter

default: 0

possible values: any px, em, rem, or % value

``` javascript
$.framify({'gutter': '1%'});
```

Sets the gutter size between columns.  Allows for fixed gutter sizes (px, em, rem) as well
as dynamic (%).

## Author

Art Lawry ([@artlawry](http://twitter.com/artlawry))

## Licensing

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2012 Art Lawry

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

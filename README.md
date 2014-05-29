USUResponsive
=============

Changes to the USU template making it responsive

### How to implement these changes:
======

1. Upload the following files to the server:
	- js/responsive.script.js
	- style/responsive.css
	- style/responsive/* (all files)
	- responsiveHeader.cfm
2. Include the CSS file `responsive.css` in the `<head>` section, after including `master.css`. It's recommended to include this before any custom CSS file(s) so you can make changes through your own custom file. Make sure and swap out `/admissions/` for your own directory. Make sure the `viewport` meta tag is also included somewhere in this section.
	
	```html
	<head>
		...
		<link href="/style/master.css" rel="stylesheet" type="text/css" media="screen" />

		<!--Make the template responsive-->
		<meta name="viewport" content="initial-scale=1, minimum-scale=1, user-scalable=1">
		<link href="/admissions/style/responsive.css" rel="stylesheet" type="text/css" media="screen" />

		<link href="/admissions/style/custom.css" rel="stylesheet" type="text/css" media="screen" />
		...
	</head>

	```

3. Include the JavaScript file in the `<head>` section, after including `jQuery`. It's recommended to include this before any custom JavaScript file(s) so you can make changes through your own custom file. Make sure and swap out "admissions" for your own directory.
	
	```html
	<head>
		...
		<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="/admissions/js/responsive.script.js"></script>
		<script type="text/javascript" src="/admissions/js/custom.js"></script>
		...
	</head>

	```

4. Include the `responsiveHeader.cfm` file in your template on all pages just after including the main `sub-header` and before the `main-container-global`
	
	```html

	...
	<!-- Start Sub-Header -->
		<cfinclude template="/includes/sub-header.cfm" />
	<!-- End Sub-Header -->

	<cfinclude template="/admissions/includes/responsiveHeader.cfm" />

	<!-- Start Main Container -->
	<div id="main-container-global">
	...

	```
	

That's it! Revew all your paths, make sure they are pointing to the right place. If you have any custom CSS, you should make responsive adaptations to it in your own custom CSS file. That way, if this global template code ever changes, you can simply replace your file to get the most recent version. 

If you're new to responsive CSS, [here's a great tutorial](http://webdesignerwall.com/tutorials/responsive-design-in-3-steps).

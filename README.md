## tabler-styles

Tabler UI styles provided as customizable SCSS files or prebuilt CSS stylesheet.

> ** IMPORTANT **
> Full credit for these styles goes to [tabler](https://github.com/tabler/tabler) - this is
> simply a repackage to make it easier to use for developers.

### Why should I use this?

As great as Tabler theme is, it's provided in a way that isn't very developer friendly,
especially if you want to use it for SPAs with whole Webpack/NPM tooling. Even though there is
an NPM package, it's huge, contains tons of examples and rather awkward to use and/or modify in an actual project.
That's why I extracted SCSS files and related images and fontsfrom [this repository](https://github.com/tabler/tabler)
and provided tools that let you build and possibly modify Tabler with only Node.

### Differences

My version contains fixes for SVG images used in `url()` backgrounds and is built with Bootstrap v4.1.3, not 4.1.0.
I will most likely create a PR for these fixes to official repo though, so it won't be different from the originals.

### Usage

#### Prebuilt CSS stylesheets with NPM package

First, run one of:

```
yarn add tabler-styles
npm install tabler-styles
```

If you're happy with just the default Tabler styles, the easiest way to use
this package is to use the prebuilt CSS stylesheets. Both formatted and minified versions
are available in `dist` directory.

If you're using Webpack you can simply import it:

```
// formatted file
import 'tabler-styles/dist/tabler.css';
// or minified file
import 'tabler-styles/dist/tabler.min.css';
```

or use the `<link>` tag somewhere in your HTML `<head>` section with a proper path, probably something like:

```
<link rel="stylesheet" href="../node_modules/tabler-styles/dist/tabler.css">
```

#### Modifying Tabler build

There are two ways to do this. You can clone this repo and install its dev dependencies:

```
git clone https://github.com/paolostyle/tabler-styles.git
yarn
```

Then you can do whatever you want: change SCSS files, remove the parts you don't want,
change Autoprefixer config (it's in `package.json`) or change Bootstrap version (though I don't know why
would you want to do that, there's not that many 4.x versions). When you're done, just run:

```
yarn build
```

and you'll get compiled CSS. In the future I will add another script that will rebuilt the SCSS files on change.

The other way is to, similarly to previous option, install it as an NPM package and simply import the SCSS files you want to build
with your existing build pipeline (probably sass-loader with Webpack). Keep in mind that you will need to also install Bootstrap
for it to make sense.

Examples will be added later (hopefully).

safe-npm-global
===============

Created this package as the default config for NPM installing global packages requires sudo access to install which is both a pain and seriously insecure, and it annoyed me having to redo it any time provisioning a machine.

This module just contains a single script that will provide a different configuration to create a directory in the users home directory called .npm-packages which will hold all globally installed packages for the user, inform NPM by adding to .npmrc and add this to path in .bashrc.

To use:

```
$ npm install safe-npm-global
$ node node_modules/safe-npm-global/index.js
```

It's that simple, no sudo access required.

NOTE: There is a problem with npm versions after 1.4.10 with respecting the prefix configuration which means it won't pick up the change made by this package. More details can be found on this thread: [https://github.com/npm/npm/issues/5459](https://github.com/npm/npm/issues/5459)

In short the solution is to run this, BEFORE running this packagem otherwise the new config in .npmrc will throw it off. If you have already run this script, you can run below commands as a different user, or comment out the line in .npmrc, run these commands, the uncomment the line in .npmrc:

```
$ npm install -g --prefix=$(npm config get prefix) npm@1.4.10
$ hash -r # if using Bash, to update its path cache
$ npm --version # Confirm correct version is now active
1.4.10
```

Any problems open an issue.

License MIT @ John Brett

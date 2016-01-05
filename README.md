## About this Plugin

This plugin lets you easily mixing audio files. 

## Using the Plugin

The plugin creates a function at window.AudioJoin(dstPath, srcPaths, success, fail) method.
 * dstPath: (required) This is a string path to the local file to save.
 * srcPaths: (required) This is a array path, the local file will be to mixing.
 * success: (optional) This function is called when the mixing has completed successfully.
 * fail: (optional) This function is called on mixing failure.

Example:

```
window.AudioJoin(dstPath, srcPaths, success, fail);
```

## Installation

```
cordova plugin add https://github.com/cismous/cordova-plugin-audio-join
```

## LICENSE

The MIT License

---
layout: post
title: "Hacking Together a Native Version of Discord for M1 Macs"
date: 2021-03-04
author: Arthur Lockman
image: https://static.rthr.me/2021/03/04/discord-native-activity-monitor.png
tags:
  - Discord
  - M1
  - Apple Silicon
  - Apple
---

I love my M1 MacBook Air. It's the fastest and quietest computer I've ever owned. Over
the past few months I've transitioned to using it as my main machine for all of my work.
Almost all of the apps I use on a daily basis have been transitioned already to work
on the new architecture natively, and the ones that are left on Rosetta are working
perfectly fine for the most part.

There's one notable exception to that though: non-native Electron apps are garbage. They
perform extremely slowly and drain the laptop's fantastic battery much faster than they
should. Slack and VSCode have already made the jump which leaves one remaining: Discord.

Discord has been quiet about their transition plans so far and hasn't responded to anyone
on Twitter to address their timeline for migration. I have to assume they're working on
it, but the lack of communication and clear timelines is disheartening.

[The community has gotten increasingly annoyed by this](https://support.discord.com/hc/en-us/community/posts/360052558393-Discord-on-Apple-M1-Devices)
as Discord continues to not address their migration strategy. Discord being an Electron
app at heart though does present an interesting possibility: the ability to wrap it
in Electron ourselves.

Enter `nativefier`.
[`nativefier` is an open-source tool](https://github.com/nativefier/nativefier) that makes
it easy to wrap any website in a basic Electron wrapper. With a one-line command it's
very easy to wrap Discord in a native app with almost all of the features of the official
build.

Credit for this goes to Discord user
[Jesca](https://support.discord.com/hc/en-us/profiles/429810408374-Jesca). They provided
[a one-liner that turns Discord into a nicely wrapped Electron app](https://support.discord.com/hc/en-us/community/posts/360052558393/comments/360014125174)
in the forum discussion I linked earlier. I've modified it a bit to work better for my uses.

Before you run this, you'll want to install `nativefier` using `npm install -g nativefier`
and download a Discord app icon from [macOS Big Sur Icons](https://macosicons.com). Name
the file `discord.icns`.

Once you have the icon file in the directory you're running in, run this command:

```
nativefier --enable-es3-apis --icon discord.icns --browserwindow-options '{ "fullscreenable": "true", "simpleFullscreen": "false" }' --darwin-dark-mode-support --background-color #36393f https://discord.com/app
```

What you'll get is a native Electron-powered version of the Discord app. Notifications,
audio, and video all seem to work. I'm super happy with the results here. This will
definitely hold me over until Discord gets their act together and publishes a truly
native build of their app for M1.

## Update (2021-03-31)

A reader wrote in with an additional userdata script that you can inject into the Electron app to make it look and feel more like the normal version of Discord for macOS.

Create a file called `discord-platform-osx.js` in your working directory with these contents:

<script src="https://gist.github.com/arthurlockman/c1df2c566e52af1febc896244b10ad3e.js"></script>

Then, run this nativifier script instead of the one above:

<script src="https://gist.github.com/arthurlockman/da9d9368f04bbea386f6ee510e103f57.js"></script>

Using this userdata script and new arguments will give you a Discord window that has the hidden titlebar just like the "real" version. It works like a charm!
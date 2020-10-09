---
layout: post
title: "Automating Evernote: Internal Links"
date: 2020-10-09
image: https://static.rthr.me/2020/10/09/evernote-main-screen-no-shadow.png
author: Arthur Lockman
tags:
  - Evernote
  - Productivity
  - Scripts
  - Shortcuts
  - TextExpander
---

A few days ago [Evernote released their re-imagined client for the Mac](https://evernote.com/blog/new-windows-mac/). This client is now more in line with their iOS app versions. While it's lost a few features from the older Mac client, I'm so far happy with it. I'm anxious to see where they go with this new vision for the app. [^1]

That all said, there's one feature that's missing that I rely on all the time. The old client had a convenient way for you to copy a "classic" note link. This meant instead of getting a link to `https://evernote.com`, you'd get an `evernote:///` link that would jump straight into the app. This was super useful for linking to notes from other apps like OmniFocus. These links even work on iOS! This handy shortcut was gone. I needed another way.

It turns out that [Evernote supports a few different kind of links](evernote link to local file) and these `evernote:///` links are still actually supported. I only needed to transform my "internal" link into an "in-app" note link. I chose to use [TextExpander](https://textexpander.com) and JavaScript to accomplish this transformation.

![](https://static.rthr.me/2020/10/09/te-snippet.png "TextExpander Snippet")

The raw JavaScript is here:

<script src="https://gist.github.com/arthurlockman/65eeffb6668fb37d88cd747ee74b294f.js"></script>

With this in place, I can click "copy internal link" in Evernote, type `;enint`, and boom - I've got my internal link.

![](https://static.rthr.me/2020/10/09/en-copy.png "Copy internal note link")

The link should end up looking something like `evernote:///view/1234567/s01/714864c4-0d75-4754-b064-c5d1777539c1/714864c4-0d75-4754-b064-c5d1777539c1/`. Neat!

Now what about iOS? On iOS the same "copy internal link" button exists, but TextExpander isn't really viable if you're using an external keyboard. Fortunately Shortcuts has you covered. [The shortcut I built to do this transformation is here](https://www.icloud.com/shortcuts/a2335c8512704c26b010094f8e7c54aa).

![](https://static.rthr.me/2020/10/09/shortcut.JPEG "Shortcut workflow preview")

I hope someone else finds this helpful! One of the big draws to Evernote for me is this ability to create links to notes from other apps that work on any device, and these tools I've build make that functionality _way_ easier to use.

I'm planning on writing some more about the new Evernote apps in a few weeks when I've been working with them for longer. I definitely have more thoughts to share but I want to get some more experience before writing them up.

[^1]: I am sorry to say that the app has become a web view like Slack. I do however think that it's a _much better_ web view than Slack is. Hell, it support multiple windows! Can't say the same for other apps like that. It didn't lose inline PDF viewing (something iOS _still_ doesn't have) so I'm not too angry. AppleScript is however gone, though they mention in their blog post that it'll make its way back soon.

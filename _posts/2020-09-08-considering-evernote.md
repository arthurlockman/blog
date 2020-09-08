---
layout: post
title: "Hello Old Friend: Re-Considering Evernote"
date: 2020-09-08
image: https://static.rthr.me/2020/09/08/evernote-1.png
author: Arthur Lockman
brief: What would lockdown be without completely re-considering my note taking system?
tags:
  - Evernote
  - Productivity
  - Organization
  - iCloud
  - Scripts
---

About a week ago I decided that I was going to give Evernote a try again after almost 5 years away. I had switched to Apple Notes pretty much immediately when it came out because I was frustrated with the many business-oriented features that Evernote was pushing at the time. Notes didn't have everything Evernote did, but it was clean and simple and worked really well on my shiny new iPad Pro.

Now I find myself a little frustrated with Notes for reasons I can't quite put my finger on. There are a few things that are frustrating but not deal breaking (like the lack of proper Shortcuts support on iOS and inability to link to notes), but overall something just doesn't _feel_ right about Notes. I'm not sure if it ever has.

I wanted to give Evernote a try because of all the note-taking services out there it's the one I know best and the one I trust. I used to be completely dedicated to Evernote. I have 4,174 notes in there. I felt it deserved another look.

## Migration to Evernote

When I did my initial migration to Notes I used a series of [scripts and tools](/2015/06/html-to-notes-app-exporter-for-el-capitan/) to get thousands of notes out of Notes and into Evernote. Now I had a similar challenge: how do I get all of my notes back into Evernote? Back again I went to AppleScript. I found a script on the Evernote Forums that almost worked and tweaked it to get it to do what I needed:

<script src="https://gist.github.com/arthurlockman/fce336ec15ea4723afe92b210043a136.js"></script>

This AppleScript will prompt you to select Notes folders, then copy all notes from Notes into a notebook in Evernote called "Imported from Notes". It maintains the original creation and modification date from Notes too! One caveat: Evernote does have a size limit on individual notes, so it's possible you may have notes that won't copy properly. An error dialog will appear for each of those notes that are too big, which you can then move manually.

## Initial Thoughts

_It feels like home_. It's really hard to quantify this one but having Evernote be my outboard brain again feels great. I didn't realize how much I missed its fantastic OCR and search abilities. I also really missed tagging. Sure there are ways to approximate tagging in Apple Notes, but nothing quite like this.

You know what else is great? **You can edit the creation/modification date on a note.** As far as I'm aware there's still no way to view or edit any kind of metadata on an Apple Note. This has been super frustrating for me as I usually try to import things like product manuals into my outboard brain, and I like to set the creation date to the date on the PDF itself. This has been so far impossible in Apple Notes.

The final point I'll make here is that Evernote still has the best capture system in the business. The web clipper is still absolutely fantastic, and the Slack and Outlook plugins mean I can easily capture business notes from conversations without having to copy text and images, paste it into Notes, fix the formatting, etc. etc. etc. I can now click, choose a notebook, and be done. Awesome.

![](https://static.rthr.me/2020/09/08/web-clipper.png "The web clipper is my little web capture buddy")

Overall I'm very happy to be back in Evernote. I've gone ahead and paid for a year of premium. [They're in the middle of re-writing their native apps for iOS and Mac](https://evernote.com/blog/staying-focused-on-the-road-ahead/) so I'm anxious to see what those are like once they're available later this year.

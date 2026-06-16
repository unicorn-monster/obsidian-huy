---
type: clip
date: 2026-05-10
source: "https://x.com/OriSilver/status/2054212888034722120"
author: "@OriSilver"
title: "The Master Prompt Behind Viral AI Storyboard Videos (contact sheet)"
---
![Image](https://pbs.twimg.com/media/HIH3ccMXsAE0wNB?format=jpg&name=large)

I posted about this drop a few days ago. This is it.

> May 10
> 
> You have seen this with pixar style animation of cooking on your feed. You even got the full prompt for the videos. But as always, they gatekeeped the prompts and system to create these great contact sheets. That is the engine for the entire method, making Seedance 2.0 obey

Every viral AI storyboard video on your feed uses the same method. The master prompt that builds the contact sheet behind them never gets shared.

This article shares it.

## The two patterns you keep seeing

Pay attention to how these videos get explained online. One of two things happens every single time.

![Image](https://pbs.twimg.com/media/HIH8PdMXQAAfLat?format=jpg&name=large)

The first pattern: Someone shares their Seedance 2.0 prompts but never gives you the actual prompt to create the contact sheet. Without it, you can't recreate the actual method.

The second pattern: someone hands you a tool. A custom GPT. You can type a topic in and get a sheet out. What they never show you is the master prompt running inside the tool. The logic stays sealed. You cannot edit it, extend it, or learn from it.

Both patterns block the same thing. The actual engine.

## Why the contact sheet is the part that matters

Before we go further, here is the short version of why this matters at all.

A 15-second AI video is not one prompt. It is shots stitched together. The hardest part of producing one is not the video model. It is keeping the character, the product, and the style identical across every shot.

A contact sheet solves that problem. It is a single image showing all ten shots laid out in a grid, with every detail locked. Same character. Same product. Same lighting. Same setting. Same angle logic.

When you hand that sheet to a video model like Seedance 2.0 alongside the right prompt, the model treats the sheet as the source of truth. Every frame in the output adheres to the corresponding frame on the sheet. The result holds together.

This is the reason every viral video you have seen recently looks consistent across cuts. The sheet is doing the work.

## What a contact sheet actually contains

Imagine a single image, 16:9 landscape. Cream background. Two rows of five frames each, ten frames total, every frame numbered.

**Example:**

![Image](https://pbs.twimg.com/media/HIH8qt9W4AIduxX?format=jpg&name=large)

Each frame contains a short label, a tiny duration tag reading 1.5s, one or two small icons, and a square illustration of the action. Below the illustration, a short caption. At the top of the sheet, a title in all caps. At the bottom, four footer columns: video flow, camera tips, light and style, and a topic-specific notes column.

That is the artifact. It looks deceptively simple. The structure is what makes it work.

The sheet defines the entire video before any video gets generated. Every part of the sheet determines another part that the model works with. From style to direction or lighting, this is what raises the success rate of seedance 2.0 to over 90%, one shotting every sheet.

## The system that builds the sheet

![Image](https://pbs.twimg.com/media/HIH9aiuWwAAWHuI?format=jpg&name=large)

Ori Silver reveals the viral method to create consistent contact sheets for seedance 2.0

The master prompt that builds the contact sheet is the part nobody publishes.

That prompt is not one block of text. It is a system of files working together, designed to live inside Claude as a project. The same system also runs inside ChatGPT as a custom GPT and inside Gemini as a Gem. Three platforms, one logic.

The reason it is split into files instead of one mega-prompt is editability. If you want to change a style, you edit one file. If you want to change the sheet's structure, you edit a different file. Nothing else breaks. This is how prompt systems should be built once they pass a certain complexity threshold.

You can think of it as a Claude Skill. The instructions file is the brain. The supporting files are the modules it calls on.

## The four files and why each one exists

Here is what is inside the system, file by file.

**Instructions.** This file controls how Claude behaves during a session. It defines the planning conversation, the order of questions, the way Claude handles uncertainty, and the escape hatch when you say "just build it." Without this file the system has no idea what to do.

**Anatomy.** This file defines the exact structure of the contact sheet itself. Title bar, legend, grid format, footer columns, the placement of icons and labels. If you ever want to change the format of the sheet, this is the only file you touch.

**Styles.** Four pre-built style blocks live in this file. Each one is engineered phrasing that tells the image generator how to render the sheet visually. Premium 3D animation, claymation, realistic UGC, and POV. Each block has been tested to render correctly and pass moderation filters.

**Quick start.** This file shows Claude what a successful conversation looks like end to end. Without this, the system works. With it, the system is laser focused. The model sees the example and matches the tone.

Four files. Each one has a single job. Edit any of them in isolation.

Together they flow into Claude creating the perfect Claude project or Skill for you uses, and best of all, you get to edit it freely and have full access to the "how" not only the "what".

## The styles included, and how to add more

The four pre-built styles cover the most-used aesthetics in viral AI advertising right now.

- **Premium 3D animation** for that polished animated film look.
- **Claymation** for handcrafted stop-motion warmth.
- **Realistic UGC** for phone-shot lifestyle authenticity.
- **POV** for first-person immersive framing.

You are not limited to these four.

The Styles file is structured so that any new style block follows the same format.

If you want crochet, medical animation, pixel art, watercolor, anime, or anything else, you ask Claude to write you a new style block in the same structure. Paste it into the file. The system now supports it.

This is the part that matters more than the four defaults.

You own the system. You extend it.

## What you can build with this

The fastest way to understand the output is to watch one.

I generated three videos using the system this week, each in a different style. RYZE mushroom coffee in claymation. A LGymshark unboxing shot as POV. A skincare routine in realistic UGC.

**All three videos came from the same workflow.**

1. Open a chat.
2. Tell the system the topic.
3. Pick a style.
4. Approve the plan.
5. Get the prompt.
6. Login to Maxfusion AI (you can do it anywhere) Generate the sheet in an image model.
7. Hand the sheet back to claude in the same chat and ask it to produce the Seedance 2.0 prompts for the specific sheet.
8. Go back to Maxfusion AI (if you like human face refernece approved) and input the image + the prompts.
9. Get the results

Three different topics. Three different styles. One method.

What makes the system even more useful is the second video you produce. Build a second sheet with the same character, a different scene. Generate it.

**Examples of 4 types of generation:**

<video preload="none" tabindex="-1" playsinline="" aria-label="Embedded video" poster="https://pbs.twimg.com/amplify_video_thumb/2054212572664954880/img/OBowDk35NaEy71nn.jpg" style="width: 100%; height: 100%; position: absolute; background-color: black; top: 0%; left: 0%; transform: rotate(0deg) scale(1.005);"><source type="video/mp4" src="blob:https://x.com/ffa7e945-693e-4f12-99ed-32b48b499984"></video>

![](https://pbs.twimg.com/amplify_video_thumb/2054212572664954880/img/OBowDk35NaEy71nn.jpg?name=large)

That is how the superbloom sheet was made.

- Contact sheet 1 - The morning routine
- Contact sheet 2 - the Gym session

<video preload="none" tabindex="-1" playsinline="" aria-label="Embedded video" poster="https://pbs.twimg.com/amplify_video_thumb/2054209367541501952/img/2_jzLD9X84muwLRg.jpg" style="width: 100%; height: 100%; position: absolute; background-color: black; top: 0%; left: 0%; transform: rotate(0deg) scale(1.005);"><source type="video/mp4" src="blob:https://x.com/c8ecc88b-5a8b-4efe-b227-8a743b2dea9a"></video>

![](https://pbs.twimg.com/amplify_video_thumb/2054209367541501952/img/2_jzLD9X84muwLRg.jpg?name=large)

Now you have two 15-second clips that feel like one continuous 30-second piece.

Do it again and you have a series.

The contact sheet locks the character. The character locks the continuity. The continuity is the asset.

Simply repeat the same process in the same chat with claude in the project and refer to the same character.

## Three platforms, one system

The system ships in three places.

The Claude Project version is the deepest, because Claude Projects support full instruction files plus separate knowledge files. The behavior is closest to the original design.

The ChatGPT Custom GPT version uses a compressed 8K-character instructions block, with the same knowledge files uploaded as references. Behavior is nearly identical. (But had to compress the instructions as OpenAI blocks it, so might hallucinate or be less useful).

The Gemini Gem version follows the same pattern as Claude had no limitation of characters. Compressed instructions plus knowledge files.

If you already have a preferred platform, use it. If you switch platforms later, the system carries over. You will not lose your method by changing models.

> My take - Use Claude as this was built with Opus 4.7 any other model might behave or produce different results in terms of quality

**Tools in the drop**

- Claude Project files
- ChatGPT Custom GPT link
- Gemini Gem link
- Folder with all the files

All linked at the bottom of this article.

## How to actually use it once you have it

> **In the Drive you'll see a document named "Setup instructions" follow it and set it up first.**

Then open the project on your preferred platform.

Tell it the topic in one sentence.

Something like "morning skincare routine for a woman in her thirties, claymation style."

The system asks a few short questions.

Character details, setting, whether you have a product reference image, style preference.

Each question is a single tap or short answer.

You can also tell it to skip the planning and just build, in which case it lists its assumptions and generates the prompt immediately.

The output is a single prompt block.

Copy that block into your image generator of choice.

ChatGPT image, Midjourney, Gemini, whichever you prefer. The result is the contact sheet image.

> All results shown were produced with GPT-2 I do not know how well other models will produce it.

From there, ask the system for the matching Seedance 2.0 video prompt. Paste that prompt and the sheet into Seedance. You have a video.

End-to-end time once you know the flow: under ten minutes for the first sheet, faster for the second.

The system is free. Everything you need is below.

- [Folder with all the files](https://drive.google.com/drive/folders/1YbUME5uF-HqToXnLE6Cm-bzL84Dv3QPV?usp=sharing)
- [ChatGPT Custom GPT link](https://chatgpt.com/g/g-6a02166067208191b562417b6b836e64-contact-sheet-master-prompter)
- [Gemini Gem link](https://gemini.google.com/gem/1NnOdDCw8fwbEkx7sQZB4nYdEZiWIoGzj?usp=sharing)

YouTube video walking through the full method with three live examples: Coming soon. Subscribe to see it here: [https://www.youtube.com/@OriSilver-tech](https://www.youtube.com/@OriSilver-tech)

Telegram channel where the next drops land first: [https://t.me/primegenai](https://t.me/primegenai)

Follow me here to keep updated.

Remember, Only one gives you everything.
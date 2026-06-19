---
title: "How to Build a Second Brain With Kimi and Obsidian That Works While You Sleep ( Full Course)"
source: "https://x.com/cyrilXBT/status/2067651155623104541"
author:
  - "[[@cyrilXBT]]"
published: 2026-06-18
created: 2026-06-19
description: "Most second brains stop the moment you stop typing.You write a note. The note sits in a folder. Six months later you search for it and eithe..."
tags:
  - "clippings"
---
![Image](https://pbs.twimg.com/media/HLGmInWWkAAWKts?format=jpg&name=large)

Most second brains stop the moment you stop typing.

You write a note. The note sits in a folder. Six months later you search for it and either find it or you don't. The system is exactly as smart as the last thing you put into it, which means it isn't actually smart at all. It's storage with extra steps.

A second brain that works while you sleep is a different thing entirely. It reads what you wrote today, files it correctly, finds connections you didn't make consciously, generates a briefing before you wake up, and gets measurably better every week because the memory it draws on keeps growing. Week one it saves you time. Week twelve it surfaces a connection between a decision you made in March and a problem you're facing now that you would never have found manually.

This guide builds that system using Kimi and Obsidian. By the end you will have a vault that runs autonomous workflows on a schedule, accumulates intelligence about how you think, and produces outputs you never manually triggered. This is the complete course. Every config file, every prompt template, every step in the order you actually need to do them, plus the SEO approach if you're publishing this as content rather than just running it for yourself.

## Why Kimi and Obsidian Specifically

Obsidian is the foundation because it stores everything as local plain text Markdown files. No vendor lock-in, no subscription required to access notes you've already written, and full compatibility with automation tools that need direct file system access rather than an API wrapper around someone else's database. A second brain has to survive longer than any single company's product roadmap, and plain text on your own disk is the only format that guarantees that.

Kimi is the model running the intelligence layer because it pairs a long context window with strong agentic tool use at a price point that makes constant background automation actually affordable. Running five or six scheduled skills every single day for a year adds up fast on a per-token basis if you're not careful, and Kimi's pricing is what makes daily automation sustainable rather than something you ration to avoid a surprise bill.

Together they form a stack where the vault is the body and Kimi is the mind reading it, and neither one is locked behind a single vendor's pricing decisions a year from now.

## Part 1: The Foundation Setup

Step 1: Install Obsidian and build the vault structure

Download Obsidian from obsidian.md. Create a new vault and build this exact folder structure, because every skill in this guide references these specific paths and changing them means rewriting every prompt:

```text
SECOND-BRAIN/
    00-INBOX/
    01-PERMANENT/
    02-PROJECTS/
    03-DAILY/
    04-OUTPUTS/
        briefings/
        connections/
        syntheses/
        reviews/
    05-RESOURCES/
    06-ARCHIVE/
    07-SYSTEM/
        KIMI.md
        skills/
```

The 04-OUTPUTS folder is where every automated skill writes its results. Keeping all automated output in one place separate from your own writing means you always know at a glance what you wrote versus what the system generated, which matters more than it sounds like it should once you have months of both accumulating side by side.

Step 2: Get Kimi API access

Create an account on the Kimi developer platform and generate an API key. Store it somewhere secure like a password manager or an environment variable file that's excluded from version control, because every automated workflow in this guide depends on it and a leaked key means someone else's automation running on your bill.

Step 3: Connect Kimi to your vault

Since Kimi supports the Model Context Protocol, you can connect it directly to your Obsidian vault using a filesystem MCP server, the same general approach used to connect tools like Claude Desktop to a local folder.

npm install -g [@modelcontextprotocol/server-filesystem](https://x.com/@modelcontextprotocol/server-filesystem)

Configure whichever MCP client you're running Kimi through to point at your vault path:

```text
{
  "mcpServers": {
    "second-brain": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/SECOND-BRAIN"
      ]
    }
  }
}
```

Test the connection by asking the agent to list your vault's top-level folders and describe what it sees. If it accurately reports your structure back to you, the connection is live and you can move on. If it can't see anything, double-check the path is absolute rather than relative, since that's the most common reason this step fails silently.

Step 4: Install a scheduler

You need something that triggers Kimi API calls on a schedule whether or not your laptop is open, because the entire point of this system is that it runs while you're asleep or away from the keyboard. Two solid options depending on how much visibility you want into each run:

\# Option A: n8n, self-hosted, full visual workflow builder with execution logs npm install -g n8n n8n start # Option B: a lightweight cron job calling a script that hits the Kimi API directly crontab -e

This guide uses n8n in the worked examples because it gives you a visual record of every single execution, which matters enormously when you're trying to figure out why an automation didn't produce the output you expected at 6 AM. A cron job that silently fails gives you nothing to debug. An n8n execution log gives you the exact step where things broke.

## Part 2: The KIMI.md Context File

This is the single most important file in the entire system, and it's the part most people rush through because it feels like setup rather than the actual work. Every skill you build in this guide reads this file before it does anything else. The quality of every output you receive for the next year is a direct function of how specific this document is today.

```text
# Second Brain Configuration — KIMI.md

## Identity
Name: [YOUR NAME]
Primary work: [SPECIFIC DESCRIPTION OF WHAT YOU ACTUALLY DO]
Timezone: [YOUR TIMEZONE]
Current stage: [WHERE YOU ARE RIGHT NOW IN YOUR WORK OR LIFE]

## How I Actually Work
[Honest description, not aspirational. When are you actually 
productive? What pulls your attention away? What kind of tasks 
energize you versus drain you?]

## Current Focus Areas
[8 to 12 specific topics you are actively thinking about right now.
Not broad interests like "AI" or "business." Specific enough that
Kimi can tell when something new is genuinely relevant versus when
it's just topically adjacent.]

1. [SPECIFIC FOCUS AREA]
2. [SPECIFIC FOCUS AREA]
...

## Active Projects
[PROJECT NAME]: [One sentence current status]
Next action: [Specific, not vague]
Priority: [HIGH / MEDIUM / LOW]
Deadline: [If applicable]

## Current Beliefs and Working Theories
Belief: [STATEMENT]
Evidence supporting: [WHAT BACKS THIS UP]
Evidence against: [WHAT WOULD CHALLENGE IT]
Confidence: [HIGH / MEDIUM / LOW]

## Output Standards
[What does good output actually look like for your work?
Include real examples where you can. Vague standards produce
vague automation regardless of how good the underlying model is.]

## What Kimi Has Permission to Do Autonomously
- Read any file anywhere in this vault
- Write new files only inside 04-OUTPUTS/
- Search externally for information relevant to focus areas
- Update its own memory of past runs

## What Requires My Explicit Approval First
- Writing to any vault location outside 04-OUTPUTS/
- Any communication to another person on my behalf
- Any financial or strategic recommendation beyond analysis

## Update Protocol
Review and revise this file every Monday morning.
Active projects and beliefs: update weekly.
Focus areas: update monthly.
Everything else: update when it actually changes.
```

Spend two real hours on this document before you build a single skill. Vague input produces vague automation no matter how capable the model running it is, and the two hours you spend here today saves you weeks of confused, generic outputs later that you'd otherwise have to debug one bad brief at a time.

## Part 3: The Three Core Skills

Skill 1: Morning Brief, runs daily at 6 AM

This is the skill that changes your mornings immediately and gives you something concrete to point at when someone asks what this whole setup actually does for you day to day.

Create 07-SYSTEM/skills/morning-brief.md:

\# morning-brief ## Trigger Scheduled daily at 6:00 AM. ## Process 1. Read KIMI.md fully for current context and standards. 2. Read yesterday's daily note for any unresolved open loops. 3. Read all files inside 02-PROJECTS/ for current status. 4. Search externally for developments in each focus area from KIMI.md within the last 24 hours. 5. Filter ruthlessly: only include genuinely relevant signal, skip anything that's just topically adjacent or repeats something already covered in the last 5 briefs. 6. Generate the brief in this exact format: 7. Save to: 04-OUTPUTS/briefings/\[DATE\]-brief.md

```text
---
# Morning Brief — [DATE]

## THE ONE THING
[Single most important action today. Specific. 
Grounded in actual vault evidence, not generic advice.]

## OPEN LOOPS
[Yesterday's unresolved items, but only the ones that
have real consequence if they stay unresolved today.]

## PROJECT STATUS
[One line per active project: current status plus
the single next action. No padding.]

## SIGNAL
[1 to 3 external developments that are genuinely relevant
to current focus areas. If there's nothing worth including,
say so honestly rather than padding this section.]
---
```

The n8n workflow that powers this runs in a straightforward sequence: a Schedule Trigger node fires at 6:00 AM, a Read File node pulls in KIMI.md, another Read File node pulls yesterday's daily note, a Read Files node pulls every active project file, an HTTP Request node sends the assembled prompt to the Kimi API, and a final Write File node saves the response to the correct output path. Once this chain is built once, it runs identically every single morning without you touching anything.

Skill 2: Capture Processor, runs daily at 8 PM

The most tedious part of any note-taking system is filing what you captured during the day. This skill removes that entirely by doing it automatically every evening.

Create 07-SYSTEM/skills/capture-processor.md:

\# capture-processor ## Trigger Scheduled daily at 8:00 PM. ## Process 1. Read today's daily note and extract everything written in the Captures section. 2. If there's nothing captured today, log that fact and stop cleanly rather than failing or fabricating content. 3. For each captured item, classify it: IDEA: Worth keeping as permanent knowledge → Create an atomic note in 01-PERMANENT/ → Written entirely in first person, your own understanding → Find a minimum of two genuine connections to existing notes → Never a direct quote, always your own restated understanding TASK: Something to actually do → File into the relevant project inside 02-PROJECTS/ → If no project clearly fits, file to 00-INBOX/tasks.md DECISION: A significant choice made or pending → Create a structured decision note with the choice itself, the critical underlying assumption, and a review date REFERENCE: Something worth keeping for later → File into 05-RESOURCES/ under the relevant topic 4. Generate a short processing summary noting how many items were filed into each category. ## Quality Standard Nothing should remain in the Captures section after processing. Every item gets filed somewhere specific or explicitly dropped with a reason, never left in limbo.

Skill 3: Connection Finder, runs daily at 11 PM

This is the skill that produces the moments that actually make a second brain feel different from a folder of notes. It reads what you wrote recently and looks for connections to older material that you didn't consciously make at the time.

Create 07-SYSTEM/skills/connection-finder.md:

\# connection-finder ## Trigger Scheduled daily at 11:00 PM. ## Process 1. List every note modified in the last 48 hours. 2. For each recent note, search the entire vault for notes with a genuine connection, not just a shared keyword. A real connection means reading both notes together reveals something that reading either one alone does not. A shared topic is not a connection. A structural similarity, a contradiction, or an insight that only emerges from the combination is a connection. 3. For each strong connection found, document it: --- # Connection: \[NOTE A\] ↔ \[NOTE B\] ## What This Reveals \[The specific insight from reading both together\] ## Implication \[What this suggests investigating or doing next\] --- 4. Save findings to 04-OUTPUTS/connections/\[DATE\]-connections.md 5. Skip anything that feels obvious. Ten genuinely surprising connections beat fifty that just confirm what was already clear.

## Part 4: Running It Overnight

Configure all three n8n schedules, start n8n running in the background, and then deliberately leave it alone for one full week before changing anything.

npm run start -- --daemon

This restraint matters more than it sounds like it should. The temptation is to tweak KIMI.md or the skill prompts after the very first run, but you need a real week of output across different days and different content to actually know what's systematically missing versus what was just an unusual day. Check the vault each morning. The brief should be sitting in 04-OUTPUTS/briefings before you wake up. Yesterday's captures should already be filed. If something didn't run, check the n8n execution log first rather than guessing, since the log will usually show you the exact step that failed and why.

## Part 5: SEO Strategy if You're Publishing This as Content

If you're turning this build into a published article rather than just running it privately, here's how to structure it so it actually ranks instead of disappearing into the feed.

**Target keyword clusters.** Go after "second brain obsidian," "kimi ai automation," "obsidian automation workflow," "autonomous note taking system," and "obsidian MCP setup." These map to real existing search volume from the PKM and Claude-Obsidian automation audience that already exists, while Kimi-specific automation content has almost no competition right now, which is the actual opportunity here. You're not trying to outrank a thousand competitors. You're trying to be one of the only results when someone searches the Kimi-specific version of a query that already has demand.

**Title and meta description.** Keep your primary keyword phrase inside the first 60 characters of the title tag. Something like "How to Build a Second Brain With Kimi and Obsidian (Full Setup Guide)" front-loads both tool names, which is exactly what someone searches once they're past the "what is a second brain" stage and want a specific, actionable build rather than a conceptual explainer.

**Header structure matched to search intent.** Use H2 headers phrased as actual questions people type into Google: "How do you connect Kimi to Obsidian," "What is the best Obsidian folder structure for automation," "How often should automated notes run." These map almost word for word to People Also Ask boxes and voice search queries, which gives you a shot at featured snippet placement beyond just the standard ranking.

**Structure for dwell time.** Code blocks and full config files like the ones throughout this guide increase average time on page meaningfully because readers stop to copy and paste rather than skim past them, and that copy-paste behavior correlates with lower bounce rate in aggregate engagement signals that search engines weight.

**Schema markup.** Mark this content up as HowTo schema with each major step tagged as a HowToStep. This is what enables the step-by-step rich result format directly inside Google search results, which meaningfully increases click-through rate for tutorial content compared to a standard blue link.

**Internal linking.** Link out to related content you've published, like an Obsidian template article or a Claude Code automation guide, and link back to this piece from those. Topic clusters built around "AI automation second brain" as a connected group consistently outperform the same articles published as isolated, unlinked posts.

**Freshness signal.** Add a visible "Last updated" date and actually revisit this piece monthly as Kimi's API, pricing, or available models change. Tutorial content in this specific niche goes stale fast because the underlying tools update so frequently, and stale tutorials lose rankings even when the core concept hasn't changed at all.

## What Changes by Week Four

Week one: the brief is genuinely useful from day one, captures get filed automatically every evening, and you save real measurable time without doing anything differently yourself.

Week two: the connection finder starts surfacing links between notes you wrote days apart that you didn't consciously connect at the time, and at least one of those connections changes how you think about something you're currently working on.

Week four: KIMI.md has been revised twice based on specific gaps the outputs themselves revealed, and the morning brief is now drawing on a full month of accumulated context instead of starting from nothing the way it did on day one.

This compounding effect is the part that never shows up in a single screenshot or a five-minute demo. The system running at week four is not the same workflow you set up in week one. It is a measurably improved version of it, because the memory it reads from keeps growing every single day, and the file telling it who you are and what you care about keeps getting more accurate the more you refine it.

Build the foundation this weekend. Write KIMI.md tonight, properly, with real specifics rather than placeholders you plan to fill in later. Let the first morning brief run while you sleep.

Read what's waiting for you in the vault when you wake up. That's where the compounding actually starts.

Follow [@cyrilXBT](https://x.com/@cyrilXBT) for every Kimi build, Obsidian system, and autonomous workflow that makes your second brain compound a little more every single week.
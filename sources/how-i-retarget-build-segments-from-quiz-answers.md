---
type: clip
date: 2026-07-17
source: "https://the-funnel-professor.beehiiv.com/p/how-i-retarget-build-segments-from-quiz-answers"
author: "The Funnel Professor"
title: "How I retarget & build segments from quiz answers"
---
As per a tweet of mine about building segments to retarget quiz leads — which also allows you to remove your email pop-up — I had a ton of DMs asking how I actually set this up. Which is understandable since none of the main software like Heyflow actually easily integrate with Klaviyo (which is what 95% of us use).

When it comes to retargeting & email content, there's so many different factors — it depends what you want to build your segments around. Maybe it's simply what's your major desire: lose weight for health reasons, lose weight to be a good dad, lose weight for my wedding. All of these will require different emails. Compared to more pain-based emails: neck pain, back pain, headaches. Even combining 2 segments of pain & gender, or pain & age — you can get quite nuanced for hyper-personalized email retargeting.

Here's my step by step setup (this is all done through clarflow.com):

## First, connect your quiz to Klaviyo
Add the email input node in your quiz to capture emails. Make sure input is email and the "send responses to klaviyo" toggle is on.

![[retarget-01.png]]

Make sure the quiz is saved.

![[retarget-02.png]]

## Creating segments with specific user groups
This is arguably the most important for retargeting — creating specific segments from quiz answers (customised lists of people with specific answers). Someone with back-pain vs someone with neck-pain, or one person wants to lose weight vs another wants to become a dad their kids are proud of — these customers will need very different email segments.

In Klaviyo: go to Segments → Create Segment.

![[retarget-03.png]]

(Screenshot verified: Klaviyo segment builder — Name "Users dairy concern (cheese)", condition "What someone has done (or not done)" → "Person has" → "Quiz Response - My Clarflow Quiz" → "at least once" → "over all time" → "where `q2_which_dairy_foods_cause_you_the_mo...` equals `Cheese`". This is generic Klaviyo event-property filtering — works for ANY quiz tool that pushes a custom event/metric to Klaviyo, not ClarFlow-specific.)

In this case we selected our lactose quiz and everyone in this segment is allergic to cheese. Now you can create emails just for the avatar's core problem.

## How to use avatar answers for personalised emails
In the flows, select 'Build Your Own' (https://www.klaviyo.com/flows/create).

![[retarget-04.png]]

Select 'Create Manually'.

![[retarget-05.png]]

In select trigger, choose: Your Metrics column.

![[retarget-06.png]]

In "your metrics" select Clarflow.

![[retarget-07.png]]

Select your trigger as 'your metrics' & 'quiz responses'.

![[retarget-08.png]]

Then confirm this with re-entry or not.

![[retarget-09.png]]

Make sure the trigger has the quiz response visible.

![[retarget-10.png]]

To find custom variables select preview in top right.

![[retarget-11.png]]

You will see a list of event properties — these are the questions you ask. By clicking on the underlined question, it will copy a `{{specific_name}}`. This will then be variable based on whatever that user selected.

![[retarget-12.png]]

Click on the variable you want to select from the properties.

![[retarget-13.png]]

In Klaviyo it looks like this.

![[retarget-14.png]]

But you can see it works on preview.

![[retarget-15.png]]

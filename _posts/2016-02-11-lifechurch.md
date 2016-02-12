---
project-id: lifechurch
title: Life.Church
layout: post
link: http://lifechurch.tv
permalink: lifechurch/
background-color: "#B9252D"
preview-text: I started working at Life.Church in 2012. I worked on 3 different teams, and a slew of projects.
category: featured
featured-order: 1
tags:
- Ruby on Rails
- SaaS
- Ionic
- HTML
- CSS
- Javascript
- Rubygem
- API
- Objective-C
---

_The following is work done while on staff at Life.Church since 2012. None of it is my intellectual property and the rights to everything belong to Life.Church...I'm assuming._

During my time at Life.Church, I've worked on a few different development teams. For a while, I was on Interactive, which is a part of the larger Creative Media team. The primary responsibility of that team was managing the Life.Church website. In 2014, the Life.Church website underwent a major overhaul. With the help of the brilliant [Adam Fairhead](http://fairheadcreative.com), it was a major success. We shifted the site from being content-heavy to leading with more images and storytelling. We switched from a Ruby on Rails site to a Liquid website. It provided a much snappier experience since it is serving up just static html, like the good ol' days.

### Life.Church API

The benefits of using a Ruby on Rails application as the back-end for the website was that all of our data was stored in one location, and other apps could leverage that data store. Whenever we made the move to Liquid, we needed a new solution. I built a new Ruby on Rails app to act as a JSON API. I also set it up to automatically push changes made to the API to the Life.Church site, so we wouldn't have to manually duplicate that data in both places. This allowed us to build the flagship website in the way we thought best, without worrying about serving data to our other applications.

### lc-api Rubygem

To help us build applications on top of the API quickly, I developed a [Rubygem](https://rubygems.org/gems/lc_api). This allowed us to build a more distributed application architecture, with more focused responsibilities.

### Roku / Podcasts

Life.Church tries to put their content into people's hands, wherever there are. A few of their distribution channels are built directly on top of the API. One of those is a custom built Roku app. We redesigned it to match the updated branding of the website. I also built a new middleware application that consumes the API and spits out valid XML for the Roku app to display the most recent messages. I built a similar middleware app for the iTunes podcasts as well. Both middleware applications are lightweight Sinatra apps using the consuming the API through the Rubygem.

### Smart Giving

One of the coolest and most challenging projects I got to work on while on Interactive was the _Smart Giving_ application. We built an SMS driven app that allowed attenders to tithe using their phone, through simple messages like _GIVE $37_. We integrated with [SumoText's](http://sumotext.com/) API to be able to send/receive SMS messages. Then, created a unique & secure login process with Stripe on the backend. Users only had to sign-up once, and after that, a simple _TITHE $15_ would do the trick.

<div class="values">
  <blockquote>
    <p>The local church is the hope of the world and we know we can accomplish inﬁnitely more together than apart.</p>
  </blockquote>
</div>

## Church to Church

At Life.Church, one of the core values is: "We are all about the “capital C” Church!". One of the ways the church lives this out is through the Church to Church team. This team is dedicated to building software that can help other churches. All of this software is completely free. [Read More.](http://www.lifechurch.tv/churches/)

<h3><img src="/img/posts/open-icon.svg" width="60" alt="Open"> Open</h3>

The most recognized product that the C2C team has to offer is Open. Open is primarily a (free) E-Commerce site giving churches access to the entire library of Life.Church Resources & Ideas. You'll find sermon videos, editable art packages, kids' lessons, operational materials, and leadership Ideas to support every part of your ministry. And they're all 100% free.

While on the C2C team, Open went through a few changes. We started to focus on bringing current users back to the website, more often. Sending out weekly emails highlighting new resources based on past downloads, a calendar showing users when future resources would become available, with the ability to subscribe to their launch, and the addition of blog called "Ideas" where we give away the details of how Life.Church does ministry, operationally.

<h3><img src="/img/posts/churchmetrics-icon.svg" width="60" alt="Church Metrics"> Church Metrics</h3>

Church Metrics is a data tracking tool for metrics such as attendance, salvations, giving and more. While on the team, Church Metrics went through a complete reskin. Majore features of the application were overhauled to make them easier & more robust. These changes also involved updates to the native iOS & Android Church Metrics applications. We introduced an entirely new feature, called _Groups_, that allowed church plants and denominations to manage their network of churches, and to be to run high-level reports & charts against that data.

<h3><img src="/img/posts/chop-icon.svg" width="60" alt="Church Online Platform"> Church Online Platform</h3>

The Church Online Platform was originally built to allow Life.Church to bring their ministry online. It was then turned into a SaaS application for all churches to use. With the platform, you get a robust admin section where you can manage users, events & even prayer requests. On the front-end, users are provided a live chat experience to go along with a streaming video the church provides.

While on the team, we released a new theme editor, which allowed our team & any church with some HTML knowledge to build dynamic page layouts. We rebuilt the front-end to work with the new Liquid templating system, and released some new layouts to help churches get started. We also implemented a _simlive_ feature, that allowed churches to drop-in a YouTube video, instead of having the costly overhead of a streaming provider.

<h3><img src="/img/posts/developme-icon.svg" width="60" alt="Develop.Me"> Develop.Me</h3>

The newest application offered by the Church to Church team, Develop.Me is a perfomance review tool, that helps promote a culture of self-development. Through goal tracking & annual reviews, churches can help their staff grow and develop year-over-year. While on the team, Develop.Me saw new organization signups increase by more than **100%**! We worked on features to help bring users back into the app, with email reminders about goals users had set and the ability to update goal progress.

# News Review

My final project for the V School course; it is a full MEAN stack application incorporating everything I've learned throughout the class on each level front and back end: HTML5, CSS3, jQuery, Bootstrap, Angular, Node, MongoDB.

This application allows users to view and submit reviews for articles written by popular news sources and blogs. The intention is to accumulate an accurate picture of these sources biases and political agendas to assist persons in critically thinking about the information they acquire and formulating accurate, bipartisan opinions on current events and avoid sensationalism and fake news.

The app currently features:

-- User accounts and authentication (token authentication with bcrypt password hashing)
-- Review submission per news source and article
-- Source pages displaying sources reviewed articles and average cummulative score across reviewed articles based on cummulative score per review of each article

Upcoming features:

-- Search engine results and social media source highlighting (This will be an extension which scrapes popular search engine results pages and social media feeds to detect sources and inject source scores from the News Review database for that source if scores exist and allow users to quickly write reviews for articles via the extension)
-- Political viewpoint testing (Users will be able to take a political viewpoint test which will become part of their profiles to help ensure articles are reviewed by diverse perspectives)
-- Needed review matching (Users will be able to view a feed of articles awaiting review matched to them based on their viewpoint and the missing viewpoints of each article's current reviews)
-- Peer review forums (Users will be able to discuss articles and reviews with the goal of review quality control and opening bipartisan communication)
-- Review writing guidelines and resources (Users will be able to access resources to help them learn critical thinking analysis, vetting, and fact checking techniques to enable high quality reviews)

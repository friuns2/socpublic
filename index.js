const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response =  openai.createCompletion({
  model: "text-davinci-002",
  prompt: "Write 7 travel app long reviews based on these notes:\n\nDescription: Map Ai Planner is a free online tool that helps you plan and manage your trips. You can use it to create custom itineraries, find things to do\n\nReviews:\n\nA life-saver! I was able to find things to do and plan my whole trip with ease.\nA must-have for anyone who likes to travel! It makes trip planning so much easier and less stressful.\nThis is an amazing tool for planning trips! It's so easy to use and really helps you stay organized. I love being able to create custom itineraries and find things to do. This has been a lifesaver for me when planning my travels.\nThis is an excellent travel planning tool! It's helped me plan and manage my trips perfectly. I really appreciate being able to create customized itineraries and find things to do. This has been an invaluable resource for me.\nThis is a fantastic travel app! It's helped me plan and manage my trips perfectly. I love being able to create custom itineraries and find things to do. This has been an invaluable resource for me.\nIf you're looking for a helpful travel app that will take all the stress out of trip planning, look no further than Map Ai Planner. This app is essential for creating custom itineraries, researching things to do, and getting advice from locals in your destination city. With Map Ai Planner, you'll be able to maximize your time on vacation and have the best trip possible!\nMap Ai Planner is a fantastic travel app that has completely changed the way I plan my trips. It's user-friendly interface makes it easy to create custom itineraries, find activities, and get tips from locals. Since using Map Ai Planner, I've been able to make the most of my vacations and explore new places with ease.\nMap Ai Planner is an excellent free online tool that helps you plan and manage your trips. You can use it to create custom itineraries, find things to do, and get recommendations from locals. The app is easy to use and makes planning my trips a breeze.\nMap Ai Planner has quickly become my go-to travel app for planning every aspect of my trips. I love being able to create custom itineraries and find things to do, all in one place. The recommendations from locals are also extremely helpful and have led me to some hidden gems in the cities I've visited. If you're looking for a comprehensive travel app, Map Ai Planner is definitely worth checking out!\nAs a seasoned traveler, I've used my fair share of trip planning apps and websites. Map Ai Planner is by far the most user-friendly and comprehensive tool I've come across. I love being able to create custom itineraries, research activities, and get tips from locals all in one place. This app has saved me so much time and stress when planning my trips, and I would highly recommend it to anyone!\nIf you're looking for an easy-to-use travel app that will help you plan the perfect trip, look no further than Map Ai Planner. This app is essential for creating custom itineraries, researching things to do, getting advice from locals, and more. With Map Ai Planner, you'll be able to make the most of your vacation time and explore new\n\nI can't recommend it enough. Especially if you're spending several days in a city, being able to see all the places you want to visit on the map really helps you optimize what to do when and plan your route for the day. It also has an absolute wealth of recommendations from museums to food to entertainment. It's seriously a fantastic travel app. 10/10.\n",
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 1.02,
  presence_penalty: 1.02,
});

console.log(response);
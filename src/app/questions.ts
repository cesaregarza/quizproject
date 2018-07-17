import { qClass } from "./questionClass";

//name:
//This is where the question goes
//
//value:
//This is the value selected, it will be linked to the radio input
//
//Types:
//0 = Predictable/Unpredictable 
//1 = Space/Earth
//2 = Magic/Technology
//3 = Nerdy/Not

export const quizQuestions: qClass[] = [
  {
    name: "I love playing around with new technology",
    value: 3,
    type: 3
  },
  {
    name: "I frequently feel I don't belong",
    value: 3,
    type: 1,
    reverse: true
  },
  {
    name: "I like stucture in my days",
    value: 3,
    type: 0
  },
  {
    name: "If I need help, I'll seek it out",
    value: 3,
    type: 2
  },
  {
    name: "I'm very spontaneous",
    value: 3,
    type: 0,
    reverse: true
  },
  {
    name: "I believe I can overcome anything alone if I try hard enough",
    value: 3,
    type: 2,
    reverse: true
  },
  {
    name: "I like to stare at the stars longingly",
    value: 3,
    type: 1,
    reverse: true
  },
  {
    name: "I like to learn for fun",
    value: 3,
    type: 3
  },
  {
    name: "Home is where my family and friends are",
    value: 3,
    type: 1
  },
  {
    name: "I like my friends to know who I am and what I'm like",
    value: 3,
    type: 0
  },
  {
    name: "Getting help is better than trying to push through alone",
    value: 3,
    type: 2
  },
  {
    name: "Being nerdy is lame",
    value: 3,
    type: 3,
    reverse: true
  },
  
]
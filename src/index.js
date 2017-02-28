'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = robofying;  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en-GB": {
        "translation": {
            "FACTS": [
                "In 1833 a man by the name of Charles Babbage invented all the parts that are now used for a modern computer. But it was only 120 years later that the first ‘modern’ computers were invented.",
                "Konrad Zuse was the inventor of the first computer in the world in 1936 and he named it the Z1. In 1939, he created the Z2 as the first electro-mechanical computer in the world.",
                "So computers were born, and these early computers were made in the 1940s and were around the size of a large room and they used heaps of electricity. Can you imagine having a computer the size of a large room? How would you be able to sit in front of it?",
                "Computers as we know them today only really started being made in 1980.",
                "In 1980, the first one gigabyte disk drive was released in the world. It was a whopping US$40,000 with the weight of 550 pounds (almost 227kg). How on Earth did they move it?",
                "Well, it’s literally a machine that takes what you put into it, and then gives you some information back. So you give it a command, just like you would your dog and it follows the command to give you the result you want. Pretty awesome machines these are.",
                "Computers have something called a microprocessor that can make calculations super-fast.",
                "They also have a memory, or what is referred to as RAM. This stores all the information you need when you’re not using it. It also keeps everything your computer needs to work nice and safe.",
                "Computers have fans to keep them cool; otherwise they’ll get too hot",
                "Do you enjoy playing video games? Well there are two games that were the first ever made in the US called Asteroids and Lunar Lander in 1980. Have you heard of them?",
                "Over 6,000 computer viruses are released each month.",
                "This is crazy! The first computer mouse ever made was made of wood.",
                "Did you know that you blink up to 20 times a minute? Well this is quite awesome…you only blink 7 times a minute when you’re using a computer! Must be all that concentration."
                "If you open up the case of the original Macintosh, there are 47 signatures there, which are from each member of the Apple’s Macintosh division in 1982."
                "The first Apple computer ever made by Steve Jobs and Steve Wozniak was made from old parts they collected for free from their staff!."
                "Facebook has over a billion users. If it was a country it would be the third largest in the world."
                "HP, Google, Microsoft and Apple all started out of garages. Wow, and look how far they’ve come."
                "Stewardesses’ is the longest word you can type with one hand. Go on, give it a try."
                "When you’re all grown up and working and you use a computer each day, your hands would have travelled 12.6 miles (about 20km) per day!"
            ],
            "SKILL_NAME" : "British Computer Facts", 
            // you can replace with your skills facts name
            "GET_FACT_MESSAGE" : "Here's your computer fact: ",
            "HELP_MESSAGE" : "You can say tell me a computer fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "en-US": {
        "translation": {
            "FACTS": [
                "In 1833 a man by the name of Charles Babbage invented all the parts that are now used for a modern computer. But it was only 120 years later that the first ‘modern’ computers were invented.",
                "Konrad Zuse was the inventor of the first computer in the world in 1936 and he named it the Z1. In 1939, he created the Z2 as the first electro-mechanical computer in the world.",
                "So computers were born, and these early computers were made in the 1940s and were around the size of a large room and they used heaps of electricity. Can you imagine having a computer the size of a large room? How would you be able to sit in front of it?",
                "Computers as we know them today only really started being made in 1980.",
                "In 1980, the first one gigabyte disk drive was released in the world. It was a whopping US$40,000 with the weight of 550 pounds (almost 227kg). How on Earth did they move it?",
                "Well, it’s literally a machine that takes what you put into it, and then gives you some information back. So you give it a command, just like you would your dog and it follows the command to give you the result you want. Pretty awesome machines these are.",
                "Computers have something called a microprocessor that can make calculations super-fast.",
                "They also have a memory, or what is referred to as RAM. This stores all the information you need when you’re not using it. It also keeps everything your computer needs to work nice and safe.",
                "Computers have fans to keep them cool; otherwise they’ll get too hot",
                "Do you enjoy playing video games? Well there are two games that were the first ever made in the US called Asteroids and Lunar Lander in 1980. Have you heard of them?",
                "Over 6,000 computer viruses are released each month.",
                "This is crazy! The first computer mouse ever made was made of wood.",
                "Did you know that you blink up to 20 times a minute? Well this is quite awesome…you only blink 7 times a minute when you’re using a computer! Must be all that concentration."
                "If you open up the case of the original Macintosh, there are 47 signatures there, which are from each member of the Apple’s Macintosh division in 1982."
                "The first Apple computer ever made by Steve Jobs and Steve Wozniak was made from old parts they collected for free from their staff!."
                "Facebook has over a billion users. If it was a country it would be the third largest in the world."
                "HP, Google, Microsoft and Apple all started out of garages. Wow, and look how far they’ve come."
                "Stewardesses’ is the longest word you can type with one hand. Go on, give it a try."
                "When you’re all grown up and working and you use a computer each day, your hands would have travelled 12.6 miles (about 20km) per day!"
            ],
            "SKILL_NAME" : "American Computer Facts",
            // you can replace with your skill facts name 
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a computer fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random computer fact from the computer facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};

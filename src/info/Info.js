import mock2 from "../img/mock2.png";
import self1 from "../img/self.jpeg";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Saad",
    lastName: "Hassan",
    initials: 'maliksh7', // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self1, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },

        {
            emoji: "🖥️",
            text: "Software Engineer at Texas Instruments"  
        },
        {
            emoji: '🌎',
            text: 'Based in the Germany'
        },
        {
            emoji: "💼",
            text: "Master Student at Hochschule Hof"
        },
        {
            emoji: "📧",
            text: "muhsaad.hassan@gmail.com"
        }

    ],
    socials: [
        {
            link: "https://github.com/maliksh7/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/muhsaadhassan/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com/awansaadhassan1",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // },
        // {
        //     link: "https://www.youtube.com/channel/UC9Z3Z6XQK1XVJ9QJXZ0Q4jQ",
        //     icon: "fa fa-youtube",
        //     label: 'youtube'
        // },
        // add my blog link
        {
            link: "https://saadmalik7.wordpress.com/",
            icon: "fa fa-wordpress",
            label: 'blog'
        },
        // add my medium blog link
        {
            link: "https://saadhsn.medium.com/",
            icon: "fa fa-medium",
            label: 'medium'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! 👋 I'm Saad. 💼 I'm an Software Engineer 🌐 completed Master in Software Engineering at Hochschule Hof, Germany🎓, and I enjoy reading blogs 📚 and playing online games 🎮 in my free time! 😄",
    skills:
    {
        proficientWith: ['Spring Boot', 'java', 'aws cloud', 'react', 'git', 'docker', 'ruby', 'python', 'linux', 'bash', 'C#', 'Blazor'],
        // exposedTo: ['flutter', 'React', 'go'],
        certifications: ['AWS Academy Cloud Foundations']
    }
    ,

    certifications: [{
        label: 'AWS Academy Cloud Foundations',
        emoji: '🚀'
    },
    {
        label: 'Microsoft Learn Student Ambassador',
        emoji: '🚀'
    }],
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'blogging',
            emoji: '📝'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // Include devops engineer projects here
         {
             title: "Jenkins Master-Slave on ECS using Terraform",
             live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
             source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
             image: mock2
         } 
    ],
    resumeUrl: "https://drive.google.com/file/d/1v8ofYPFZ_KZ39e9om0kYNoW4Fi7ViO1U/view?usp=sharing" //this should be a link to your resume. I recommend hosting it on google drive or dropbox.
}
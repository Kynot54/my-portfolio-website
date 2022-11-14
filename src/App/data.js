// Import Images for Sections in Data
import logoN from "./Images/logo_no_title.svg"
import logo from "./Images/logo.svg"
import profile from "./Images/profile.webp"
import doblin from "./Images/Doblin.webp"
import resume from "./Images/Resume.pdf"
import bar from "./Images/bar.webp"
import cat from "./Images/cat.webp"
import catApp from "./Images/CatPhotoGallery.zip"

//Import Font Styles for Data
import "./fonts/fonts.css";


export const text = [
    {
        //NavBar
        image: logoN,
        tab1: "Home",
        tab2: "About",
        tab3: "Projects",
        tab4: "Contact"
    },
    {
        //Header
        image: logo,
        
    },
    {
        //About
        image: profile,
        title: "About Me",
        intro: "Hello! I am Kyle Whynott.",
        paragraph: "Currently, I am a college student at California State University, Fullerton. My major is in Computer Science and my focus is on Software Engineering."
    },
    {
        //Project
        title: "Projects"
    },
    {
        //Contact
        title: "Contact Me",
        paragraph: "Get in Contact with Me. Click on this Button to Send an Email to Me,or reach out to me on the listed platforms below."
    },
    {
        //Footer
    }
]

export const projects = [
    {
        title: "Doblin Dimension",
        paragraph: "This is a recent project that my cohorts and I did to showcase for our school's Hack-A-Thon, Tuffy Hacks 2022. Although, admittedly not a fairly advanced or large scale project I still felt that it deserved a spot on the site to showcase our ability to work together as a team and create something for fun!",
        image: doblin,
        seeMore:"https://devpost.com/software/goblin-dimension-tuffy-hacks2022",
        sourceCode: "https://github.com/Kynot54/Doblin-Dimension-Tuffy-Hacks2022",
    },
    {
        title: "Spotify Data Analysis",
        paragraph: "Over the Summer of 2022 I conducted research on Machine Learning and Data Analysis with the Center for Inclusive Computing | Pathways, Pipeline, Practice (CIC | PCUBED) whose goal is to increase the transfer, retention, and graduation rates of women majoring and minoring in Computer Science at CSU Fullerton",
        image: bar,
        seeMore: "https://youtu.be/kYJCJBx4Dm0",
        sourceCode: "https://github.com/Kynot54/SpotifyDataScience",
    },
    {
        title: "Cat Photo Gallery App",
        paragraph: "Back in my Community College I took a App Development Class on Android Development in Java. I have since updated the application to be coded in Kotlin and Fixed a Bug where the Sorting of the List Was Not Working Properly.",
        image: cat,
        seeMore: catApp,
        sourceCode: "https://github.com/Kynot54/CatPhotoGallery",
    }
]

export const button = [
    {
        //Know More Button
        id: "know-more-btn",
        variantType: "outline-primary",
        hLink: "#about",
        name: "Know More",
        size: ""
    },
    {
        //Resume Button
        id: "resume",
        variantType: "outline-light",
        hLink: resume,
        name: "Resume",
        size: "lg"
        
    },
    {
        //See More
        id: "project-button",
        variantType: "outline-primary",
        hLink: "",
        name: "See More",
        size: "lg",

    },
    {
        //Source Code
        id: "project-button",
        variantType: "outline-primary",
        hLink: "",
        name: "Source Code",
        size: "lg",

    },
    {
        //Contact
        id: "email",
        variantType: "outline-light",
        hLink: "mailto:&#107;&#121;&#108;&#101;&#046;&#119;&#104;&#121;&#110;&#111;&#116;&#116;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;",
        name: "Email",
        size: "lg",
    }
]
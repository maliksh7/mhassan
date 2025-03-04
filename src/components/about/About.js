import { Box } from "@mui/material";
import React from 'react';
import { info } from "../../info/Info";
import Style from './About.module.scss';
import Terminal from "./Terminal";


export default function About() {
    const name = "maliksh7"

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{name} $</span> cat
                about {name} </p>
            <p><span style={{color: info.baseColor}}>about {name} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{name} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>

        </>;
    }
    function certsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{name} $</span> cd
                Certs/tech</p>
            <p><span style={{color: info.baseColor}}> Certs/tech <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.certifications.map((cert, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{cert.emoji}</Box>{cert.label}</li>
                ))} 
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{name} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={certsText()}/>
            <Terminal text={miscText()}/>

            
        </Box>
    )
}
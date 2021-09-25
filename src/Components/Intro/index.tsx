import React, { Component } from "react";
import { Element } from "react-scroll";
import "./Intro.scss";

const titleRotation = ["Software Engineer", "Web Developer", "Full Stack Developer", "Mentor and Teacher", "DevOps Engineer"];
const rotatingLetters = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-"]
const maxTitleCharacters: number = titleRotation.reduce((a, b) => a.length > b.length ? a : b).length;
const rotateTimer: number = 5000;
const flipTimer: number = 60;
type State = {
    titleIndex: number,
    currentCharCodes: number[],
    upperCaseIndexes: number[]
}

const titleIndexToState = (titleIndex: number) : State => {
    let currentCharCodes: number[] = [];
    let upperCaseIndexes: number[] = [];
    let title = titleRotation[titleIndex];
    for (let i = 0; i < title.length; i++) {
        let char: string = title[i];
        let charCode = rotatingLetters.indexOf(char.toLowerCase());
        if (charCode === -1) {
            throw new Error(`Provided letter is not valid: '${char}'`)
        }
        currentCharCodes.push(charCode);
        if (char === char.toUpperCase()) {
            upperCaseIndexes.push(i);
        }
    }
    while (currentCharCodes.length < maxTitleCharacters) {
        currentCharCodes.push(0);
    }
    return {
        titleIndex,
        currentCharCodes,
        upperCaseIndexes
    }
}

// const stateToString = ({currentCharCodes, upperCaseIndexes}: State): string => {
//     let upperCaseIndexWalker = 0;
//     return currentCharCodes.map((charCode, index) => {
//         let char = rotatingLetters[charCode];
//         if (upperCaseIndexes[upperCaseIndexWalker] === index) {
//             upperCaseIndexWalker ++;
//             return char.toUpperCase();
//         }
//         return char;
//     }).join("");
// }

const fetchUpperCaseIndexes = (str: string): number[] => {
    let upperCaseIndexes = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            upperCaseIndexes.push(i);
        }
    }
    return upperCaseIndexes;
};

const charCodesToLowerCaseString = (currentCharCodes: number[]): string => currentCharCodes.map(charCode => {
    let char = rotatingLetters[charCode];
    return char;
}).join("");

export default class Intro extends Component <{}, State> {
    state = titleIndexToState(0)
    interval: ReturnType<typeof setInterval> | undefined; 
    letterFlippingInterval: ReturnType<typeof setInterval> | undefined; 
    componentDidMount() {
        this.interval = setInterval(this.rotateTitle, rotateTimer);
    }
    componentWillUnmount() {
        let castedFlippingInterval = this.letterFlippingInterval as unknown as number;
        if (castedFlippingInterval) {
            clearInterval(castedFlippingInterval);
        }
        this.letterFlippingInterval = undefined;
        let castedInterval = this.interval as unknown as number;
        if (castedInterval) {
            clearInterval(castedInterval);
        }
        this.interval = undefined;
    }
    rotateTitle = () => {
        let castedFlippingInterval = this.letterFlippingInterval as unknown as number;
        if (castedFlippingInterval) {
            clearInterval(castedFlippingInterval);
        }
        this.letterFlippingInterval = undefined;
        let {titleIndex, currentCharCodes} = this.state;
        titleIndex = (titleIndex + 1) % titleRotation.length;
        let newTitle = titleRotation[titleIndex];
        let upperCaseIndexes = fetchUpperCaseIndexes(newTitle);
        while (currentCharCodes.length < maxTitleCharacters) {
            currentCharCodes.push(0);
        }
        this.setState({
            titleIndex,
            currentCharCodes,
            upperCaseIndexes
        });
        this.letterFlippingInterval = setInterval(() => {
            if (charCodesToLowerCaseString(this.state.currentCharCodes) === newTitle.toLowerCase()) {
                let castedFlippingInterval = this.letterFlippingInterval as unknown as number;
                if (castedFlippingInterval) {
                    clearInterval(castedFlippingInterval);
                }
                this.letterFlippingInterval = undefined;
            } else {
                let currentCharCodes: number[] = [];
                for (let i = 0; i < this.state.currentCharCodes.length; i++) {
                    let charCode = this.state.currentCharCodes[i];
                    if (rotatingLetters[charCode] !== (newTitle[i] || " ").toLowerCase()) {
                        currentCharCodes.push((charCode + 1) % rotatingLetters.length);
                    } else {
                        currentCharCodes.push(charCode);
                    }
                }
                this.setState({
                    currentCharCodes
                })
            }
        }, flipTimer);
    }
    convertStringToRotatingPannels = (str: string) => {
        while(str.length < maxTitleCharacters) {
            str += " ";
        }
        return str.split("").map((char, index) => <svg viewBox={"0 0 28 42"} key={index} className="rotating-pannel">
        <text y="60%" x="50%" textAnchor="middle">{char}</text>
    </svg>);
    }
    render() {
        return <Element name="intro">
            <section id="intro" className="container">
                <h2>{this.convertStringToRotatingPannels("Hello,")}</h2>
                <h2>{this.convertStringToRotatingPannels("My name is")}</h2>
                <h1 className="name">{this.convertStringToRotatingPannels("Dorian Latchague")}</h1>
                <h2>{this.convertStringToRotatingPannels("I'm a")}</h2>
                <h1>{this.state.currentCharCodes.map((charCode, index) => <svg viewBox={"0 0 28 42"} key={index} className="rotating-pannel">
                        <text y="60%" x="50%" textAnchor="middle">{this.state.upperCaseIndexes.includes(index) ? rotatingLetters[charCode].toUpperCase() : rotatingLetters[charCode]}</text>
                </svg>)}</h1>
            </section>
        </Element>
    }
}
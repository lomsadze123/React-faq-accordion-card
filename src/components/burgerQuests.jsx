import objArray from './objArray'
import Arrow from '../assets/icon-arrow-down.svg'
import { styled } from 'styled-components';
import { useState } from 'react';


const AskAndAnswer = () => {

    const [display, setDisplay] = useState(new Array(objArray.length).fill(false));

    function handleDisplay(e) {
        objArray.map(i => {
            if(e.currentTarget.firstChild.textContent === i.question) {
                setDisplay(display.map((isDisplayed,index) => {
                    if(i.id-1 === index) {
                        return !isDisplayed
                    }
                }))
            }
        })
    }
    return (
        <Article>
            <h1>FAQ</h1>
            {objArray.map(obj => {
                return <div className='border' key={obj.id}>
                        <div onClick={handleDisplay}>
                            <Pbold about={display[obj.id-1]}>{obj.question}</Pbold>
                            <Img about={display[obj.id-1]} src={Arrow} alt="Arrow down" />
                        </div>
                        <p>{display[obj.id-1] ? obj.answer : null}</p>
                    </div>
            })}
        </Article>
    );
}

export default AskAndAnswer;



const Article = styled.article`
    padding: 0 2.4rem 4.8rem 2.4rem;
    h1 {
        font-size: 3.2rem;
        font-weight: 700;
        color: #1E1F36;
        text-align: center;
        margin: 2.7rem 0 2.9rem 0;
    }
    p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.8rem;
        color: #787887;
        margin-bottom: 1.5rem;
        max-width: 31.9rem;
        padding-right: 3rem;
    }
    div > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            font-size: 1.3rem;
            line-height: 1.6rem;
            margin: 1.7rem 0;
            color: #4B4C5F;
        }
    }
    img {
        flex-basis: .8rem;
        height: auto;
    }
    .border {
        border-bottom: .1rem solid #E8E8EA;
    }

    @media (min-width: 955px) {
        margin-right: 9.5rem;
        h1 {
            margin: 0 0 4.5rem 0;
            text-align: left;
        }
        padding: 0;
        align-self: center;
        div > div {
            cursor: pointer;
        }
        div > div p {
            font-size: 1.4rem;
            min-width: 30rem;
        }
        div > div p:hover {
            color: #F47B56;
        }
    }
`
const Pbold = styled.p`
    font-weight: ${props => props.about ? 700 : 400} !important;
`
const Img = styled.img`
    transform: ${props => props.about ? 'rotate(180deg)' : 'rotate(0)'};
`
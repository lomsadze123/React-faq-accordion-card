import objArray from './objArray'
import Arrow from '../assets/icon-arrow-down.svg'
import { styled } from 'styled-components';

const AskAndAnswer = () => {
    return (
        <Article>
            <h1>FAQ</h1>
            {objArray.map(obj => {
                return <div className='border' key={obj.id}>
                        <div>
                            <p>{obj.question}</p>
                            <img src={Arrow} alt="Arrow down" />
                        </div>
                        <Pnone>{obj.answer}</Pnone>
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
            color: #4B4C5F;
            line-height: 1.6rem;
            margin: 1.7rem 0;
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
const Pnone = styled.p`
    display: none;
`
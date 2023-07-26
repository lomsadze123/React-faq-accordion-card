import GirlMob from '../assets/illustration-woman-online-mobile.svg'
import GirlDesk from '../assets/illustration-woman-online-desktop.svg'
import MobPattern from '../assets/bg-pattern-mobile.svg'
import DeskPattern from '../assets/bg-pattern-desktop.svg'
import Box  from '../assets/illustration-box-desktop.svg'
import { styled } from 'styled-components';


const Images = () => {
    return (
        <Section>
            <picture className='picture'>
                <source media="(min-width:955px)" srcSet={GirlDesk} />
                <img src={GirlMob} alt="faq Girl" />
            </picture>
            <picture>
                <source media="(min-width:955px)" srcSet={DeskPattern} />
                <img className='shadowImage' src={MobPattern} alt="faq girl shadow" />
            </picture>
            <img className='box' src={Box} alt="box" />
        </Section>
    );
}

export default Images;

const Section = styled.section`
    picture {
        display: block;
        text-align: center;
        margin-top: -10.8rem;
    }
    img {
        width: 23.7rem;
        height: auto;
    }
    .shadowImage {
        margin-top: 3.2rem;
    }
    .box {
        display: none;
    }

    @media (min-width: 955px) {
        margin-left: -21rem;
        .picture {
            margin: 3rem 0 0 0;
        }
        img {
            width: 47.2rem;
        }
        .shadowImage {
            width: 100%;
            margin-top: -45rem;
            margin-left: -25rem;
        }
        .box {
            display: block;
            margin: -37rem 0 0 11.2rem;
            width: 20rem;
            height: auto;
            position: absolute;
        }
    }
`
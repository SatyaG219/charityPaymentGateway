import "./Tb.css"
import { FcDonate } from 'react-icons/fc';

const Tb = () => {
    return (
        <tb>
            <div className='tCont'>
                <div className='tContainer1'>
                     <h2> <FcDonate size='80px'/> </h2>
                </div>
                <div className='tContainer2'>
                </div>
                <div className='tContainer3'>
                    <div className='about'>
                       <h2><a href='https://www.thesparksfoundationsingapore.org/about/vision-mission-and-values/' rel="noreferrer">About</a></h2> 
                    </div>
                    <div className='join'>
                        <h2><a href='https://www.thesparksfoundationsingapore.org/join-us/why-join-us/' rel="noreferrer">Join</a></h2> 
                    </div>
                    <div className='contact'>
                         <h2><a href='https://www.thesparksfoundationsingapore.org/contact-us/' rel="noreferrer">Contact</a></h2>
                    </div>
                </div>
            </div>
        </tb>
    )
}

export default Tb

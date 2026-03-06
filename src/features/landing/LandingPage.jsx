import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Vision from "./components/Vision";
import Life from "./components/Life";
import Detail from "./components/Detail";
import Imprint from "./components/Imprint";
import Cooperate from "./components/Cooperate";
import New_hot from "./components/Breaking_new";
import Footer from "../../components/layout/footer";
const LandingPage = () => {
    return (
        <>
            <Banner />
             <About/>
            <Vision />
            <Life />
            <Detail />
            <Imprint/>
            <Cooperate />
            <New_hot />
            <main>
                {/*<Hero />*/}
                {/*<About />*/}
                {/*<Features />*/}
                {/*<CTA />*/}
                {/*<Contact />*/}
            </main>

            <Footer />
        </>
    );
};

export default LandingPage;
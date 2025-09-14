import React from 'react';

import img1 from '/images2/new/devfest.webp'
import img2 from '/images2/new/hack.webp'
import img3 from '/images2/new/hack4bengal.webp'
import img4 from '/images2/new/Apertre.webp'
import img5 from '/images2/new/GCCD_card.webp'
import img6 from '/images2/new/droid_fest.webp'
import img7 from '/images2/new/nexus.webp'
import img8 from '/images2/new/config.webp'
import img9 from '/images2/new/hack23__.webp'
import img10 from '/images2/new/hack24.webp'




import PageTitle from '../components/pagetitle/PageTitle_Explore';
import Button from '../components/button/Button';



function Activity(props) {

    const dataBlock = [
        {
            id: 10,
            img: img8,
            class: 'img1',
            subheading: 'CONFIG 2025 WATCH PARTY – KOLKATA',
            heading: 'Config 2025 Watch Party – Kolkata',
            desc1: 'Joined hands with Figma Config 2025 Watch Party to celebrate design, creativity, and collaboration 🎨✨',
            desc2: 'Samarth TMSL is proud to be the Official Community Partner for the Config 2025 Watch Party – Kolkata! A night full of design inspo, conversations, and collabs, held on May 9, 2025 at Now Purchase, Kariwala Tower, Sector V.'
        },
        {
            id: 9,
            img: img7,
            class: 'img1',
            subheading: 'DEVNEXUS HACKATHON 2024',
            heading: 'DevNexus Hackathon 2024',
            desc1: 'Collaborated with Team DevNexus to empower student hackers and innovators 🚀👨‍💻',
            desc2: 'Samarth TMSL is now the Official Community Partner of Team DevNexus! Thrilled to join hands for an exciting hackathon journey full of opportunities, learning, and innovation.'
        },
        {
            id: 8,
            img: img6,
            class: 'img1',
            subheading: 'DROIDFEST 2024',
            heading: 'DroidFest 2024',
            desc1: 'Partnered with DroidFest \'24 to bridge students with industry leaders and tech innovators 🤝✨',
            desc2: 'Samarth TMSL is proud to be an Official Partner of DroidFest \'24! A festival packed with cutting-edge sessions, hands-on workshops, and networking with top developers. Don’t miss out – grab your exclusive tickets with code SAMARTH20 at https://konfhub.com/droid-fest-24 🚀'
        },
        {
            id: 7,
            img: img5,
            class: 'img1',
            subheading: 'GCCD KOLKATA 2024',
            heading: 'Google Cloud Community Days Kolkata 2024',
            desc1: 'Collaborated with GDG Cloud Kolkata to Celebrate Tech like never before ✨',
            desc2: 'Team Samarth proudly announces that we are now the Official Community Partner of the biggest and most-awaited Tech conference, the GCCD Kolkata 2024 !',
        },   
        {
            id: 6,
            img: img10,
            class: 'img1',
            subheading: 'HACKTOBERFEST 2024',
            heading: 'Hacktoberfest 2024 Status: Hacked',
            desc1: 'Samarth TMSL once again made its mark in Hacktoberfest 2024 💻⚡ With 500+ Pull Requests and 200+ students impacted, we celebrated open-source collaboration bigger and better!',
            desc2: ''
        },
        {
            id: 5,
            img: img9,
            class: 'img1',
            subheading: 'HACKTOBERFEST 2023',
            heading: 'Hacktoberfest 2023 Status: Hacked',
            desc1: 'Team Samarth proudly continued the legacy by contributing massively in Hacktoberfest 2023 🌟 Over 400 Pull Requests across multiple repositories, empowering 150+ students nationwide.',
            desc2: ''
        },
        {
            id: 4,
            img: img1,
            class: 'img1',
            subheading: 'DEVFEST KOLKATA 2022',
            heading: 'Official Community Partner For DevFest Kolkata 2022!',
            desc1: 'Do you envision impacting the lives of millions through the lens of technology? If yes, we have a piece of excellent news for you all.',
            desc2: 'Team Samarth is elated to officially announce that we are now Community Partner of the prestigious DevFest Kolkata 2022🔥.',
        },
        {
            id: 3,
            img: img4,
            class: 'img1',
            subheading: 'APERTRE',
            heading: 'Apertre: One of the Largest Open Source Event in India',
            desc1: 'Team Samarth is happy to share that we are one of the most important Community partner in this Open Source Intiative by Apertre  ',
            desc2: ''
        },
        {
            id: 2,
            img: img2,
            class: 'img1',
            subheading: 'HACKTOBERFEST 2022',
            heading: 'Hacktoberfest 2022 Status: Hacked',
            desc1: 'Team Samarth is happy to share that we have Hacked 🚀 the Hacktoberfest 2022 with a blastof over 300 Pull Request over our 4 repositories, helping more than 100 students PAN India',
            desc2: ''
        },

        {
            id: 1,
            img: img3,
            class: 'img1',
            subheading: 'HACK4BENGAL',
            heading: 'HACK4BENGAL: Largest Hackathon in East India',
            desc1: 'Team Samarth is happy to share that we are one of the most  important Community partner in hack4bangal intiative ',
            desc2: ''
        },

    ]

    const jsonLength = Object.keys(dataBlock).length;
    console.log(jsonLength);

    return (
        <section className="about home-2 wrapper">
            <PageTitle title='Engage in our Community Activities' />
            {
                dataBlock.map(e => (
                    <>
                        <div className="shape"></div>
                        <div className="container" style={{ marginBottom: '30px' }}>
                            <div className="row rev">
                                <div className="col-xl-6 col-md-12">
                                    <div className="about__right">
                                        <div className="images">
                                            {
                                                <img key={e.id} className={e.class} src={e.img} alt="hack" />
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text" >
                                        <h6 className="sub-heading"><span>{e.subheading}</span></h6>
                                        <h3 className="heading">{e.heading}</h3>
                                        <p className="mb-17">{e.desc1}</p>
                                        <p className="mb-26">{e.desc2}</p>
                                        <Button link='https://www.instagram.com/samarth_tmsl_official/?img_index=1' title='View Work' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }

        </section>
    );
}

export default Activity;

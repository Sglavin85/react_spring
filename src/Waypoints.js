import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { animated, useSpring, config } from 'react-spring';

const Waypoints = () => {
    const [p2, p2toggle] = useState(false);
    const [p3, p3toggle] = useState(false);
    const [p4, p4toggle] = useState(false);
    const [p5, p5toggle] = useState(false);


    const p2animation = useSpring({
        opacity: p2 ? 1 : 0,
        transform: p2 ? 'translate3d(0,0,0)' : 'translate3d(0, -50% ,0)',
        config: config.molasses
    })

    const p3animation = useSpring({
        opacity: p3 ? 1 : 0,
        transform: p3 ? 'translate3d(0,0,0)' : 'translate3d(0, -50% ,0)',
        config: config.molasses
    })

    const p4animation = useSpring({
        opacity: p4 ? 1 : 0,
        transform: p4 ? 'translate3d(0,0,0)' : 'translate3d(0, -50% ,0)',
        config: config.molasses
    })
    const p5animation = useSpring({
        opacity: p5 ? 1 : 0,
        transform: p5 ? 'translate3d(0,0,0)' : 'translate3d(0, -50% ,0)',
        config: config.molasses
    })

    return (
        <div className="waypoints">
            <p>
                Lorem ipsum dolor amet poutine pitchfork tattooed venmo, heirloom cliche chartreuse gentrify mumblecore hammock single-origin coffee banh mi. Sartorial unicorn 90's edison bulb iPhone. Leggings pickled brunch neutra tousled. Occupy fixie affogato pinterest vaporware aesthetic, tbh subway tile hammock next level prism vape lomo taiyaki kale chips. Jianbing knausgaard taxidermy squid artisan thundercats, gochujang subway tile air plant taiyaki master cleanse cray.
      </p>
            <div>
                <Waypoint
                    bottomOffset="25%"
                    onEnter={() => {
                        if (!p2) p2toggle(true)
                    }} />
                <animated.p style={p2animation}>
                    Pug godard pour-over 90's direct trade, PBR&B +1 next level organic edison bulb quinoa DIY. Taiyaki sriracha unicorn, cronut taxidermy chicharrones four dollar toast keytar cold-pressed raclette yuccie cray iceland. Roof party knausgaard neutra plaid, pork belly chambray banh mi chia. Blue bottle narwhal iceland health goth cornhole fam humblebrag flannel pitchfork pickled.
                </animated.p>
            </div>
            <div>
                <Waypoint
                    bottomOffset="25%"
                    onEnter={() => {
                        if (!p3) p3toggle(true)
                    }} />
                <animated.p style={p3animation}>
                    Jianbing lomo lumbersexual put a bird on it fixie next level pitchfork gentrify, disrupt echo park. Hot chicken subway tile drinking vinegar fixie. YOLO keytar gluten-free artisan live-edge four loko cred man braid food truck leggings. Health goth semiotics kogi heirloom authentic hell of. Pork belly helvetica cornhole gentrify microdosing austin chillwave pitchfork paleo cred raclette venmo vegan fashion axe +1.
                </animated.p>
            </div>
            <div>
                <Waypoint
                    bottomOffset="25%"
                    onEnter={() => {
                        if (!p4) p4toggle(true)
                    }} />
                <animated.p style={p4animation}>
                    Craft beer tousled ennui ugh, williamsburg stumptown flexitarian plaid activated charcoal. Taxidermy letterpress glossier 8-bit, organic bitters coloring book. Selvage lo-fi typewriter wolf ugh, lyft four loko chillwave bitters mustache tumblr copper mug subway tile. Fanny pack aesthetic taiyaki vice sustainable mustache. Asymmetrical shabby chic DIY authentic normcore man braid you probably haven't heard of them. Mustache humblebrag umami beard williamsburg. Prism hexagon VHS, paleo tacos narwhal etsy fashion axe ennui schlitz ethical echo park vinyl.
                </animated.p>

            </div>
            <div>
                <Waypoint
                    bottomOffset="25%"
                    onEnter={() => {
                        if (!p5) p5toggle(true)
                    }} />
                <animated.p style={p5animation}>
                    Health goth af scenester irony, farm-to-table austin intelligentsia man bun celiac flexitarian yuccie marfa kickstarter banh mi gluten-free. Pabst vape bespoke banjo umami next level tumblr offal wolf kombucha. Jean shorts direct trade distillery yr glossier dreamcatcher, before they sold out butcher. Fixie unicorn leggings pabst forage neutra. 3 wolf moon microdosing food truck hell of keytar, bitters disrupt flannel chartreuse knausgaard affogato ethical pickled. Humblebrag small batch meh glossier mixtape.
                </animated.p>
            </div>
        </div >
    )
}

export default Waypoints
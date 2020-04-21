import React from 'react';
import Sketch from 'react-p5';
import './style.css';

class Glitch extends React.Component {

    render() {
        return (
            <div className="center">
                <h1>Glitch</h1>
                <a href="https://p5js.org/examples/color-lerp-color.html">Original Sketch reference </a>
                <hr />
                <Sketch
                    setup={(p5, parentRef) => {
                        p5.createCanvas(700, 500).parent(parentRef);
                        p5.background(255);
                        p5.noStroke();



                    }}
                    draw={p5 => {
                        p5.background(255);
                        p5.from = p5.color(255, 0, 0, 0.2 * 255);
                        p5.to = p5.color(0, 0, 255, 0.2 * 255);
                        p5.c1 = p5.lerpColor(p5.from, p5.to, 0.33);
                        p5.c2 = p5.lerpColor(p5.from, p5.to, 0.66);
                        for (let i = 0; i < 15; i++) {
                            p5.fill(p5.from);
                            p5.quad(
                                p5.random(-40, 220), p5.random(p5.height),
                                p5.random(-40, 220), p5.random(p5.height),
                                p5.random(-40, 220), p5.random(p5.height),
                                p5.random(-40, 220), p5.random(p5.height)
                            );
                            p5.fill(p5.c1);
                            p5.quad(
                                p5.random(140, 380), p5.random(p5.height),
                                p5.random(140, 380), p5.random(p5.height),
                                p5.random(140, 380), p5.random(p5.height),
                                p5.random(140, 380), p5.random(p5.height)
                            );
                            p5.fill(p5.c2);
                            p5.quad(
                                p5.random(320, 580), p5.random(p5.height),
                                p5.random(320, 580), p5.random(p5.height),
                                p5.random(320, 580), p5.random(p5.height),
                                p5.random(320, 580), p5.random(p5.height)
                            );
                            p5.fill(p5.to);
                            p5.quad(
                                p5.random(500, 760), p5.random(p5.height),
                                p5.random(500, 760), p5.random(p5.height),
                                p5.random(500, 760), p5.random(p5.height),
                                p5.random(500, 760), p5.random(p5.height)
                            );
                        }
                        p5.frameRate(5);

                    }}
                />
            </div>
        );
    }
}

export default Glitch;
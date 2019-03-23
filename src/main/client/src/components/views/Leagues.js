import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Holder from 'react-holder-component';

export default class Leagues extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <Holder
            width="800px"
            height="400px"
            text="FIRST® Lego® League Junior"
            bg="00a651"
            fg="ffffff"
            size="32"
            font="Roboto"
          />
          <Carousel.Caption>
            <h3>FLL Jr. (Grades K-4)</h3>
            <p>
              Captures young curiosity by exploring real-world scientific
              challenges, learning teamwork, and working with motorized LEGO®
              elements
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Holder
            width="800px"
            height="400px"
            text="FIRST® Lego® League"
            bg="ed1c24"
            fg="ffffff"
            size="32"
            font="Roboto"
          />
          <Carousel.Caption>
            <h3>FLL (Grades 4-8)</h3>
            <p>
              Elementary and middle school-aged students research a real-world
              engineering challenge, develop a solution, and compete with
              LEGO-based robots of their own design
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Holder
            width="800px"
            height="400px"
            text="FIRST® Tech Challenge"
            bg="f57e25"
            fg="ffffff"
            size="32"
            font="Roboto"
          />
          <Carousel.Caption>
            <h3>FTC (Grades7-12)</h3>
            <p>
              Teams of middle and high school-aged students are challenged to
              design, build, and program a robot to play a floor game against
              other teams’ creations
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

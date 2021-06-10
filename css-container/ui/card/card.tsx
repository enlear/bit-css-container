import React from 'react';
import { Button } from '@enlear/css-container.ui.button';
import './card.css';

export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Card({ text }: CardProps) {

  return (
    <div>
      <div className="card">
        <img src={"https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg"} alt="" />
        <div>
          <div className="meta">
            <h2>{text}</h2>
          </div>
          <div className="cardbody">
            <h4 className="desc">This application demonstrates how @container can be used to add responsive styles to components.</h4>
            <div className="list">
              <h3>DESCRIPTION</h3>
              <p>Two identical card components with different container sizes behave separately using Container queries</p>
            </div>
            <Button text="Container Test" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Card } from '@enlear/css-container.ui.card';

export type ContainerProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Container({ text }: ContainerProps) {
  return (
       <div className="page-container">
            <div className="card-container card-1" data-size="0" >
              <Card text="Left"/>
            </div>
            <div className="card-container card-2" data-size="0">
              <Card text="Right"/>
            </div>
      </div>
  );
}

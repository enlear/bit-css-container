import React from 'react';
import './button.css';

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Button({ text }: ButtonProps) {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
}

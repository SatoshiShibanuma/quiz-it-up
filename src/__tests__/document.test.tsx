import React from 'react';
import { render } from '@testing-library/react';
import Document from '../pages/_document';

describe('Document Component', () => {
  it('should have a viewport meta tag', () => {
    const { container } = render(<Document />);
    const viewportMeta = container.querySelector('meta[name="viewport"]');
    
    expect(viewportMeta).toBeTruthy();
    expect(viewportMeta?.getAttribute('content')).toBe(
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    );
  });

  it('should have lang attribute on html tag', () => {
    const { container } = render(<Document />);
    const htmlTag = container.querySelector('html');
    
    expect(htmlTag?.getAttribute('lang')).toBe('en');
  });
});
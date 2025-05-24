import React from 'react';
import { render } from '@testing-library/react';
import Document from '../_document';

describe('Custom Document', () => {
  it('should include viewport meta tag', () => {
    const { container } = render(<Document />);
    
    // Find the viewport meta tag
    const viewportMeta = container.querySelector('meta[name="viewport"]');
    
    // Assert that the viewport meta tag exists
    expect(viewportMeta).not.toBeNull();
    
    // Assert the correct content attribute
    expect(viewportMeta?.getAttribute('content')).toBe(
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    );
  });

  it('should set HTML language to en', () => {
    const { container } = render(<Document />);
    
    // Find the HTML element
    const htmlElement = container.querySelector('html');
    
    // Assert that the HTML language is set to 'en'
    expect(htmlElement?.getAttribute('lang')).toBe('en');
  });
});
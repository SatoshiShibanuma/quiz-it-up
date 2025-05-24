import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../pages/_app';

// Mock the context providers to avoid dependency issues
vi.mock('../contexts/Web3Context', () => ({
  Web3ContextProvider: ({ children }: any) => children
}));

vi.mock('../contexts/QuizContext', () => ({
  QuizContextProvider: ({ children }: any) => children
}));

describe('App Configuration', () => {
  it('should have viewport meta tag', () => {
    const { container } = render(
      <App 
        Component={() => <div>Test</div>} 
        pageProps={{}} 
      />
    );

    const viewportMeta = container.querySelector('meta[name="viewport"]');
    
    expect(viewportMeta).not.toBeNull();
    expect(viewportMeta?.getAttribute('content')).toBe(
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    );
  });
});
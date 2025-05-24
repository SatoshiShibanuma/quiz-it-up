import { render } from "@testing-library/react";
import App from "src/pages/_app";
import { JSDOM } from 'jsdom';

describe("Viewport Meta Tag", () => {
  beforeEach(() => {
    const dom = new JSDOM('<!doctype html><html><body></body></html>');
    global.document = dom.window.document;
    global.window = dom.window as unknown as Window & typeof globalThis;
  });

  it("should have the correct viewport meta tag", () => {
    // Render the App component
    render(<App 
      Component={() => <div>Test</div>} 
      pageProps={{}} 
    />);

    // Check the head element for the viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    expect(viewportMeta).not.toBeNull();
    expect(viewportMeta?.getAttribute('content')).toBe(
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    );
  });
});
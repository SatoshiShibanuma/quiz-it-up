import { render } from "@testing-library/react";
import App from "src/pages/_app";

describe("Viewport Meta Tag", () => {
  it("should have the correct viewport meta tag", () => {
    // Reset the document's head
    document.head.innerHTML = '';

    // Render the App component
    render(<App 
      Component={() => <div>Test</div>} 
      pageProps={{}} 
    />);

    // Find the viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]');

    // Assertions
    expect(viewportMeta).not.toBeNull();
    expect(viewportMeta?.getAttribute('content')).toBe(
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    );
  });
});
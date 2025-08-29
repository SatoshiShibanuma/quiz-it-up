import { render } from "@testing-library/react";
import App from "../pages/_app";
import { describe, it, expect } from "vitest";

describe("Viewport Meta Tag", () => {
  it("should include viewport meta tag with correct attributes", () => {
    // Render the _app component
    const { container } = render(<App 
      Component={() => <div>Test</div>} 
      pageProps={{}} 
    />);

    // Find the viewport meta tag
    const viewportMetaTag = container.querySelector('meta[name="viewport"]');
    
    // Assert that the meta tag exists
    expect(viewportMetaTag).not.toBeNull();
    
    // Assert the meta tag has the correct content
    expect(viewportMetaTag?.getAttribute("content")).toBe(
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    );
  });
});
import { render } from "@testing-library/react";
import Head from "next/head";
import App from "src/pages/_app";

describe("Viewport Meta Tag", () => {
  it("should have the correct viewport meta tag", () => {
    // Capture the Head contents
    const headContents: any[] = [];
    const originalHeadChildren = Head.prototype.render;
    Head.prototype.render = function () {
      headContents.push(this.props.children);
      return originalHeadChildren.call(this);
    };

    // Render the App component
    render(<App 
      Component={() => <div>Test</div>} 
      pageProps={{}} 
    />);

    // Restore original method
    Head.prototype.render = originalHeadChildren;

    // Check the meta tag 
    const viewportMetaContent = headContents.find(
      (child: any) => child?.props?.name === 'viewport'
    )?.props?.content;

    expect(viewportMetaContent).toBe(
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    );
  });
});
import { render } from "@testing-library/react";
import App from "src/pages/_app";

describe("Viewport Meta Tag", () => {
  it("should render without crashing", () => {
    const { container } = render(<App 
      Component={() => <div>Test</div>} 
      pageProps={{}} 
    />);

    // Verify the component renders
    expect(container).toBeTruthy();
  });
});
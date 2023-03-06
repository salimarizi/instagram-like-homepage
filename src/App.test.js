import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import App from "./App";
import HomePage from "./pages/Home";
import CommentPage from "./pages/Comment";
import SharePage from "./pages/Share";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders component in home page", () => {
  render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
  const yourStory = screen.getByText("Your story");
  expect(yourStory).toBeInTheDocument();
});

test("renders component in comment page", () => {
  render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CommentPage />} />
        </Routes>
      </Router>
    </Provider>
  );
  const buttonPost = screen.getByText("Post");
  expect(buttonPost).toBeInTheDocument();
});

test("renders component in share page", () => {
  render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<SharePage />} />
        </Routes>
      </Router>
    </Provider>
  );
  const suggestedSection = screen.getByText("Suggested");
  expect(suggestedSection).toBeInTheDocument();
});
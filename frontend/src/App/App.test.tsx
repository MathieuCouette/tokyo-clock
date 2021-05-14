import { act, render, screen } from "@testing-library/react";
import App from "./App";

it("renders the logo", async () => {
  render(<App />);

  await act(() => Promise.resolve());
  const element = screen.getByAltText("logo");
  expect(element).toBeInTheDocument();
});

it("renders the backend clock", async () => {
  render(<App />);

  await act(() => Promise.resolve());
  const element = screen.getByText("Asia/Tokyo");
  expect(element).toBeInTheDocument();
});

it("renders the local clock second", async () => {
  render(<App />);

  await act(() => Promise.resolve());
  const element = screen.getByText(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  expect(element).toBeInTheDocument();
});

it("renders the GitHub link", async () => {
  render(<App />);

  await act(() => Promise.resolve());
  const element = screen.getByText("GitHub");
  expect(element).toHaveAttribute(
    "href",
    "https://github.com/MathieuCouette/tokyo-clock"
  );
});

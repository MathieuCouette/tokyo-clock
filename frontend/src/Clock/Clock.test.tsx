import { render, screen } from "@testing-library/react";
import Clock from "./Clock";

beforeEach(() => {
  jest
    .spyOn(global.Date, "now")
    .mockImplementation(() => Date.parse("2069-04-20T13:37:42.420Z"));
  jest.spyOn(Intl, "DateTimeFormat").mockImplementation(
    () =>
      ({
        resolvedOptions: () => ({
          locale: "en-CA",
          timeZone: "America/Toronto",
        }),
      } as Intl.DateTimeFormat)
  );
});

describe("when the time zone is not defined", () => {
  it("should render the local time zone", () => {
    render(<Clock />);

    const element = screen.getByText("America/Toronto");
    expect(element).toBeInTheDocument();
  });

  it("should render the formatted date time", () => {
    render(<Clock />);

    const element = screen.getByText("2069-04-20, 9:37:42 a.m.");
    expect(element).toBeInTheDocument();
  });
});

describe("when the time zone is defined", () => {
  it("should render the time zone", () => {
    render(<Clock timeZone="Asia/Tokyo" />);

    const element = screen.getByText("Asia/Tokyo");
    expect(element).toBeInTheDocument();
  });

  it("should render the formatted date time", () => {
    render(<Clock timeZone="Asia/Tokyo" />);

    const element = screen.getByText("2069-04-20, 10:37:42 p.m.");
    expect(element).toBeInTheDocument();
  });
});

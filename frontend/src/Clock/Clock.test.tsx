import { act, render, screen } from "@testing-library/react";
import Clock from "./Clock";

beforeEach(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(Date.parse("2069-04-20T13:37:42.420Z"));
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

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("when the backend URL is not defined", () => {
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

  it("should render the formatted date time every second", () => {
    render(<Clock />);

    act(() => {
      const remainingMilliseconds = 580;
      jest.runTimersToTime(remainingMilliseconds);
    });
    const element = screen.getByText("2069-04-20, 9:37:43 a.m.");
    expect(element).toBeInTheDocument();
  });
});

describe("when the backend URL is defined", () => {
  it("should render the backend time zone", async () => {
    render(<Clock backendUrl="http://localhost:30000" />);

    await act(() => Promise.resolve());
    const element = screen.getByText("Asia/Tokyo");
    expect(element).toBeInTheDocument();
  });

  it("should render the formatted date time", async () => {
    render(<Clock backendUrl="http://localhost:30000" />);

    await act(() => Promise.resolve());
    const element = screen.getByText("2069-04-20, 10:37:42 p.m.");
    expect(element).toBeInTheDocument();
  });

  it("should render the formatted date time every second", async () => {
    render(<Clock backendUrl="http://localhost:30000" />);

    await act(() => Promise.resolve());
    act(() => {
      const remainingMilliseconds = 580;
      jest.runTimersToTime(remainingMilliseconds);
    });
    const element = screen.getByText("2069-04-20, 10:37:43 p.m.");
    expect(element).toBeInTheDocument();
  });
});

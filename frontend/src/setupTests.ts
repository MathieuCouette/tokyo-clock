// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementation((input) =>
    input === "http://localhost:30000/"
      ? Promise.resolve({
          json: () => Promise.resolve({ timeZone: "Asia/Tokyo" }),
        } as Response)
      : Promise.reject()
  );
});

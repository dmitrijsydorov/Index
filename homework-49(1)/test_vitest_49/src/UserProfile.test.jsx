import "@testing-library/jest-dom";
import { vi, describe, test, expect, afterEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";
import * as api from "./api/getUserFromServerAdapter";

vi.mock("./api/getUserFromServerAdapter", () => ({
    getUserFromServer: vi.fn(),
}));

describe("UserProfile Component", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test("Search button", () => {
        render(<UserProfile />);

        expect(screen.getByPlaceholderText("Enter ID")).toBeInTheDocument();

        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Search");
    });

    test("displays loading indicator while fetching user data", async () => {
        api.getUserFromServer.mockReturnValue(new Promise(() => {}));

        render(<UserProfile />);

        fireEvent.change(screen.getByPlaceholderText("Enter ID"), {
            target: { value: "1" },
        });
        fireEvent.click(screen.getByText("Search"));

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("renders user data correctly after successful request", async () => {
        api.getUserFromServer.mockResolvedValue({
            name: "John Doe",
            email: "john@example.com",
            address: { city: "Kyiv" },
            phone: "123-456",
        });

        render(<UserProfile />);

        fireEvent.change(screen.getByPlaceholderText("Enter ID"), {
            target: { value: "1" },
        });
        fireEvent.click(screen.getByText("Search"));

        await waitFor(() => {
            expect(screen.getByText("John Doe")).toBeInTheDocument();
            expect(screen.getByText("Email: john@example.com")).toBeInTheDocument();
            expect(screen.getByText("City: Kyiv")).toBeInTheDocument();
            expect(screen.getByText("Phone: 123-456")).toBeInTheDocument();
        });
    });

    test("displays error message when request fails", async () => {
        api.getUserFromServer.mockRejectedValue(new Error());

        render(<UserProfile />);

        fireEvent.change(screen.getByPlaceholderText("Enter ID"), {
            target: { value: "1" },
        });
        fireEvent.click(screen.getByText("Search"));

        await waitFor(() => {
            expect(
                screen.getByText("User not found or an error occurred"),
            ).toBeInTheDocument();
        });
    });
});
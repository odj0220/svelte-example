/**
 * @jest-environment jsdom
 */

 import { render } from "@testing-library/svelte";
 import Index from "../../routes/index.svelte";
 
 test("Welcome the user", () => {
   const { getByText } = render(Index);
 
   expect(getByText("src/routes/index.svelte")).toBeInTheDocument();
 });
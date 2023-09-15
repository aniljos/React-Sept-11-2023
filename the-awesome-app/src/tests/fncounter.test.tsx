import FnCounter from '../components/FnCounter';
import {render, screen, fireEvent} from '@testing-library/react';

it("should render", () => {

    render(<FnCounter initValue={10}/>)
    expect(screen.getByText("Counter: 10")).toBeTruthy();
})

test("should inc the counter", () => {

    render(<FnCounter initValue={10}/>);
    expect(screen.getByText("Counter: 10")).toBeTruthy();
    fireEvent.click(screen.getByText("Inc"), {});
    expect(screen.getByText("Counter: 11")).toBeTruthy();

})

test("should inc the counter", () => {

    render(<FnCounter initValue={10}/>);
    expect(screen.getByText("Counter: 10")).toBeTruthy();
    fireEvent.change(screen.getByPlaceholderText("Counter"), {target: {value: 5}});
    expect(screen.getByText("Counter: 5")).toBeTruthy();

})
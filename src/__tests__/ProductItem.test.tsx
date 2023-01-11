import { ProductItem } from "../components";
import { getByTestId, render } from '@testing-library/react';
import "@testing-library/jest-dom";


test("Testing of <ProductItem/>", () => {
    const name = "Lorem ipsum";
    const year = 2000;
    const color = '#000';
    const id = 3;
    const testId = new RegExp(`${id}`);
    const testYear = new RegExp(`${year}`);
    const { getByText } = render(<ProductItem name={name} year={year} color={color} id={id} onClick={() => {}} />);
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(testId)).toBeInTheDocument();
    expect(getByText(testYear)).toBeInTheDocument();
    expect(getByText(name)).toHaveStyle(`color: ${color}`)
})
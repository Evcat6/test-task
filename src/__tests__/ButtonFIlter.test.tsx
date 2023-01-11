import { ButtonFilter } from "../components";
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";


test('testing of <ButtonFilter/>', () => {
    const testChildren = "Submit";
    const { getByText } = render(<ButtonFilter>{testChildren}</ButtonFilter>)
    expect(getByText(testChildren, {selector: 'button'})).toBeInTheDocument();
})
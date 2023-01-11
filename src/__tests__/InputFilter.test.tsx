import { InputFilter } from "../components";
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";

test("Testing of <InputFilter/>", () => {
    const inputValue = 1246;
    const inputLabel = 'Lorem Ipsum';
    const inputPlaceholder = 'Lorem Ipsum';

    const { getByDisplayValue, getByLabelText, getByPlaceholderText } = render(<InputFilter label={inputLabel} value={inputValue} placeholder={inputPlaceholder} onChange={() => {}} />);
    expect(getByDisplayValue(inputValue)).toBeInTheDocument();
    expect(getByPlaceholderText(inputPlaceholder)).toBeInTheDocument();
    expect(getByPlaceholderText(inputPlaceholder)).toBeInTheDocument();
})

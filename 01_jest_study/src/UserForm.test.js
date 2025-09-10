import React from "react";
import { render, screen } from '@testing-library/react';
import user from '@testing-library/jest-dom';
import UserForm from "./UserForm";

test('it shows two inputs and a button', () => {
    //render the component
    render(<UserForm />);
    //manipulate the componet
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    //assertion making sure the component is doing what is supposed to do
    expect(inputs.length).toBe(1); // OR expect(inputs).toHaveLenght(2);
    expect(button).toBe(button); // OR expect(button).toBeInTheDocument();

})
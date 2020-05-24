import React from 'react';
import ReactDOM from 'react-dom';
import Cards from '../Cards';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    // Tip: all queries are also exposed on an object
    // called "queries" which you could import here as well
    waitFor,
} from '@testing-library/dom'

it("test1", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cards data={'data'} />, div)
})

it("test-bar", () => {
    // const {getByTestId} =render(<Cards data={'data'} />);
    // getByTestId(<Cards />, 'chart-bar');
    expect(getByTestId(<Cards />, 'chart-bar')).toHaveTextContent(
        "test"
    )
})


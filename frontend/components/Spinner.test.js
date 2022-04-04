// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import Spinner from "./Spinner";

import { render, screen } from '@testing-library/react'

  test('Renders correctly', () => {
    render(<Spinner on={true}/>)
  })

  test('If Spinner recieves a falsey value, it will fail to render', () =>{
    render(<Spinner on={false}/>)
    expect(screen.queryByText('Please Wait...')).not.toBeInTheDocument
  })
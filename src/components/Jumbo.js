import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Jumbo() {
    return (
        <Jumbotron>
            <h1>Batch 101 - Hello user!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mi eros. Donec volutpat cursus lectus vulputate consequat. Maecenas luctus lorem eu tempor fermentum. Suspendisse efficitur ante et rutrum molestie. Mauris auctor tellus nibh, tincidunt posuere velit viverra et.</p>
            <Button variant="primary">Go to blogs</Button>
        </Jumbotron>
    )
}
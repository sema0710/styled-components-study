# how to overload css with styled-components

ex)
```
import styled from 'styled-components'

    const Button = styled.button`
        all:unset;
        padding:5px;
        border-radius : 5px;
        border : 1px solid black;
        background-color:red;
    `

    const TomatoButton = styled(Button)`
        background-color:tomato;
        border:1px solid tomato;
    `
```
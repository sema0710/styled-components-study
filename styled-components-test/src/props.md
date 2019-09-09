# how to use props in styled-components

it's ez 

```
class App extends React.Components{
    render(){
        return(
            <div>
                <Button color="red"></Button>
            </div>
        )
    }
}

const Button = styled.button`
    color:${props => props.color};
    padding : 5px;
    background-color:${props => props.color};
    border-radius : 5px;
`
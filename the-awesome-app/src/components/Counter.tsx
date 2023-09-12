import {Component, ReactNode} from 'react';


//props is always read-only
type CounterProps = {
    initValue: number;
}
type CounterState = {
    ctr: number
}

class Counter extends Component<CounterProps, CounterState>{

    state = {
        ctr: 0,
        message: "hello"
    }

    //ctr: number = 0;

    constructor(props: CounterProps){
        super(props);
        this.state.ctr = this.props.initValue;
    }

    //All event handlers should be arrow functions
    inc = (evt: any)=>{
        //console.log("invoked inc...", evt, this);
        //this.props.initValue++; // read-only cannot modify
        
        //this.state.ctr++ // dont update the stat directly

        //setState is async
        //setState(slice of the state to update, callback invoked after the state is updated)
        this.setState({
            ctr: this.state.ctr + 1
        }, () => {
            console.log(this.state.ctr);
        });

        
    }

    render(): ReactNode {
        
        return (
            <div>
                <h3>Counter: {this.state.ctr}</h3>
                <p>This is a class component</p>
                <div>
                    <button onClick={this.inc}>Inc</button> &nbsp;
                    <button>Decr</button>
                </div>
            </div>
        )
    }

    componentDidMount(): void {
        console.log("[Counter componentDidMount]"); 
    }

    componentDidUpdate(prevProps: Readonly<CounterProps>, prevState: Readonly<CounterState>, snapshot?: any): void {
        console.log("[Counter componentDidUpdate]"); 
    }

    componentWillUnmount(): void {
        console.log("[Counter componentWillUnmount]"); 
    }

}

export default Counter;
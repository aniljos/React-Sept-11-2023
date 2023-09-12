import {ChangeEvent, useState, useRef, useEffect} from 'react';
import Counter from './Counter';

type FnCounterProps = {
    initValue: number
}


function FnCounter(props: FnCounterProps){

    const [counter, setCounter] = useState(props.initValue);
    const inputRef = useRef<HTMLInputElement>(null);


    //componentDidMount
    //useEffect(callback, [dependencies]);
    useEffect(() => {
        console.log("useEffect equivalent to component did mount");

        return () => {
            console.log("useEffect equivalent to component did unmount");
        }

    },[]);

    useEffect(() => {

        console.log("useEffect equivalent to component did update");
        console.log("counter updated to: ", counter);

    }, [counter])

    function inc(){
        setCounter(counter + 1);
        //console.log("counter", counter);
    }
    function decr(){
        setCounter(counter - 1);
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>){

        const value = Number(evt.target.value);
        setCounter(value);
    }
    function handleUpdate(){
        console.log("inputref", inputRef);
        setCounter(Number( inputRef.current?.value));
    }
    return (
        <div>
            <h3>Counter: {counter}</h3>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            <br/>
            <div>
                {/* Controlled Input */}
                Counter: <input type='number' placeholder='Counter' value={counter} onChange={handleChange}/>
            </div>
            <div>
                {/* Uncontrolled input */}
                Counter: <input ref={inputRef} type='number' placeholder='Enter a value'/>&nbsp;
                <button onClick={handleUpdate}>Update</button>
            </div>

            <div>
                 {counter > 10 ?  <Counter initValue={2}/> : null}
            </div>
            
        </div>
    )
}

export default FnCounter;
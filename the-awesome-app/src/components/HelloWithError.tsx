
type HelloProps = {
    message: string
};
// class HelloProps{
//     message!: string;
// }


function HelloWithError(props: HelloProps){

    var obj: any = { id: 100}
    return (
       <div>
            <h3>{props.message}</h3>
            <p>This is a functional component</p>
            <p>Generate Date: {new Date().toString()}</p>
            <p>{obj}</p>
       </div>
    );
}
export default HelloWithError;
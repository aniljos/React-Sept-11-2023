
type HelloProps = {
    message: string
};
// class HelloProps{
//     message!: string;
// }


function Hello(props: HelloProps){

    return (
       <div>
            <h3>{props.message}</h3>
            <p>This is a functional component</p>
            <p>Generate Date: {new Date().toString()}</p>
       </div>
    );
}
export default Hello;
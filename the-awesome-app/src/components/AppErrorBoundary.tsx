import { Component, ErrorInfo, ReactNode } from "react";

class AppErrorBoundary extends Component<any>{

    state = {
        hasError: false
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        
        if(error){
            this.setState({
                hasError: true
            });
        }
        else{
            this.setState({
                hasError: false
            });
        }

    }

    render(): ReactNode {

        if(this.state.hasError){

            return (
                <div className="alert alert-danger">
                    Technical Error. Please load the application
                    <a href="http://localhost:3000">Reload</a>
                </div>
            )
        }
        else{
            return this.props.children;
        }
        
    }
}

export default AppErrorBoundary;
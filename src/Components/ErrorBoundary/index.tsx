import React, { Component, ErrorInfo } from 'react';
import './ErrorBoundary.scss';

export default class ErrorBoundary extends Component {
    state: {
        error: Error | null;
    } = {
        error: null
    }
    static getDerivedStateFromError(error: Error) {
        return {error};
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(`ERROR: ${error}`)
        console.log(`INFO: ${errorInfo}`);
    }
    clearErrors() {
        this.setState({
            error: null,
        });
    }
    render() {
        const {error} = this.state;
        if (error) {
            switch (error.constructor) {
                case RangeError:
                    return <article className="error-modal">
                        <h4>Range Error: {error.message}</h4>
                        <p className="text-black">A Range Error indicates an error when a value is not in the set or range of allowed value</p>
                        <p>{error.stack}</p>
                    </article>
                case ReferenceError:
                    return <article className="error-modal">
                        <h4>Reference Error: {error.message}</h4>
                        <p className="text-black">A Reference Error represents an error when a non-existent variable is referenced.</p>
                        <p>{error.stack}</p>
                    </article>
                case SyntaxError:
                    return <article className="error-modal">
                        <h4>Syntax Error: {error.message}</h4>
                        <p className="text-black">A Syntax Error represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.</p>
                        <p>{error.stack}</p>
                    </article>
                case TypeError:
                    return <article className="error-modal">
                        <h4>Type Error: {error.message}</h4>
                        <p className="text-black">A Type Error represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.</p>
                        <p>{error.stack}</p>
                    </article>
                case URIError:
                    return <article className="error-modal">
                        <h4>URI Error: {error.message}</h4>
                        <p className="text-black">A URI Error represents an error when a global URI handling function was used in a wrong way.</p>
                        <p>{error.stack}</p>
                    </article>
                default:
                    return <article className="error-modal">
                    <h4>Unknown Error: {error.message}</h4>
                    <p>{error.stack}</p>
                </article>
            }
        }
        return this.props.children;
    }
}
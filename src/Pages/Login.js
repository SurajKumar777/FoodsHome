import { Link } from "react-router-dom";


const Login = () => {
    return(
        <>
            <div className="container-fluid py-5" style={{minHeight: "590px"}}>
                
                <div className="row">
                    <div className="col-md-8 mx-auto">
                    <h1 className="mx-auto my-5">LOGIN</h1>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" required/>
                            </div>

                            <div className="mb-3">
                                <Link aria-current="page" to="#">Forget Password ?</Link>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
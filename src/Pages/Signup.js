

const Signup = () => {
    return(
        <>
            <div className="container-fluid py-5">
                
                <div className="row">
                    <div className="col-md-8 mx-auto">
                    <h1 className="mx-auto my-5">SIGNUP</h1>
                        <div class="row">
                            <form>
                                <div class="row mb-3">
                                    <label for="name" class="col-sm-2 col-form-label">Name :</label>
                                    <div class="col-sm-10">
                                    <input type="text" class="form-control" id="name" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="phone" class="col-sm-2 col-form-label">Phone Number :</label>
                                    <div class="col-sm-10">
                                    <input type="text" autoComplete="off" class="form-control" id="phone" />
                                    </div>
                                </div>
                                
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email :</label>
                                    <div class="col-sm-10">
                                    <input type="email" autoComplete="off" class="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="password" class="col-sm-2 col-form-label">Password :</label>
                                    <div class="col-sm-10">
                                    <input type="password" autoComplete="off" class="form-control" id="password" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="confirmpassword" class="col-sm-2 col-form-label">Confirm Password :</label>
                                    <div class="col-sm-10">
                                    <input type="password" autoComplete="off" class="form-control" id="confirmpassword" />
                                    </div>
                                </div>
                                <fieldset class="row mb-3">
                                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                                    <div class="col-sm-10">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio"  id="male" name="gender" />
                                        <label class="form-check-label" for="male">
                                        Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio"  id="female" name="gender" />
                                        <label class="form-check-label" for="female">
                                        Female
                                        </label>
                                    </div>
                                    
                                    </div>
                                </fieldset>
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
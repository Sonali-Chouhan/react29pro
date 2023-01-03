import React from 'react'
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

const HookformPra = () => {
    const { register, trigger,handleSubmit, formState: { errors } } = useForm();

     const onSubmit=(data)=>{
        console.log(data);
     }
     return (
        <div>
             <div className="card">
                <h4 className="card-header">Login</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        {/* <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button> */}
                        {/* <Link to="/account/register" className="btn btn-link">Register</Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HookformPra;

   

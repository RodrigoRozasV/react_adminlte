import React from 'react'
import { useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void })=>{
    e.preventDefault();
    
    navigate('/app/inicio');
    /*if ([email, password].includes('')) {
        setAlerta({
            msg: 'Todos los campos son obligatorios',
            error: true
        })
        return
    }

    try {
        const {data} = await clienteAxios.post('/usuarios/login', {email, password})
        localStorage.setItem('token', data.token)
        setAuth(data)
        data.tipo === 1 ? navigate('/app/inicio') : navigate('/app/caja')
        
        
    } catch (error) {
        setAlerta({
            msg: error.response.data.msg,
            error: true
        })
    }*/
}

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        {/*<!-- /.login-logo -->*/}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form onSubmit={handleSubmit} method="post">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" required/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" required/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                {/*<!-- /.col -->*/}
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
                {/*<!-- /.col -->*/}
              </div>
            </form>
          </div>
          {/*<!-- /.login-card-body -->*/}
        </div>
      </div>
    </div>
  )
}

export default Login
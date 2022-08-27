import React, { useState } from 'react'
import { Navigate } from 'react-router'
import * as yup from 'yup'
import MyAxios from '../../components/myAxios'


export default function RegisterUser() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')
  const [errors, setError] = useState([])

  const handleClick = async (event) => {
    console.log('handleClick')
    event.preventDefault()
    setMessage('')
    setError('')
    doSubmit()
  }
  const schema = yup.object().shape({    
    email: yup
      .string()
      .email('آدرس ایمیل شما صحیح وارد نشده است!')
      .required('لطفا آدرس ایمیل خود را وارد نمایید!'),
    password: yup.string().min(8, 'رمز عبور شما حداقل باید 8 حرف باشد!'),
  })

  const validate = async () => {
    try {
      const result = await schema.validate(
        { email, password },
        { abortEarly: false },
      )

      return result
    } catch (error) {
      setError(error.errors)
    }
  }
  const doSubmit = async () => {
    setSuccess('');
    console.log('dosubmit')
    const result = await validate()
    console.log('validate')
    const signup = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: result.email,
      password: result.password,
      isadmin:false,
    }
    console.log('errors' , errors)
    if (errors.length === 0) {
      const currentUrl = 'auth/register'
      const response = await MyAxios(currentUrl, 'post', signup)
      console.log('response ', response)
      setSuccess(response.data.data.success)
      if (success === false) {
        setMessage(response.data.error_message)
      } else {
        setMessage('حساب کاربری شما ایجاد شد .لطفا وارد شوید')
      }
    }
    // if (success)
    //   setTimeout(() => {
    //    <Navigate to="/" replace/>
    //   }, 3000)
  }
  return (
    <section class="vh-100" style={{ backgroundColor: '#eee' }}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{ borderRadius: '25px' }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="./images/hero_datamoon_new14.png"
                      class="img-fluid"
                      alt="Datamoon"
                    />
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      ثبت نام
                    </p>

                    <form class="mx-1 mx-md-4">
                      {errors !== '' &&
                        errors.map((error, index) => (
                          <div class="alert alert-danger" role="alert">
                            {error}
                          </div>
                        ))}
                      {message !== '' &&
                        (success ? (
                          <div class="alert alert-success" role="alert">
                            {message}
                          </div>
                        ) : (
                          <div class="alert alert-danger" role="alert">
                            {message}
                          </div>
                        ))}
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-group flex-fill col-me-6 mb-0">
                          <label class="form-label" for="name">
                            نام
                          </label>
                          <input
                            type="text"
                            id="name"
                            class="form-control"
                            placeholder="نام"
                            onChange={(e) => setFirstname(e.target.value)}
                            value={firstname}
                          />
                        </div>
                        <div class="form-group  col-md-6 flex-fill mb-0">
                          <label class="form-label" for="family">
                            نام خانوادگی
                          </label>
                          <input
                            type="text"
                            id="family"
                            placeholder="نام خانوادگی"
                            class="form-control"
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-group flex-fill mb-0">
                          <label class="form-label" for="email">
                            آدرس ایمیل
                          </label>
                          <input
                            type="email"
                            id="email"
                            class="form-control engNum"
                            placeholder="آدرس ایمیل"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-group flex-fill mb-0">
                          <label class="form-label" for="username">
                            نام کاربری
                          </label>
                          <input
                            type="text"
                            id="username"
                            class="form-control"
                            placeholder="نام کاربری"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-group flex-fill mb-0">
                          <label class="form-label" for="username">
                            رمز عبور
                          </label>
                          <input
                            type="password"
                            id="password"
                            class="form-control"
                            placeholder="رمز عبور"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg"
                          onClick={(e) => handleClick(e)}
                        >
                          ثبت نام
                        </button>
                      </div>
                      <p class="small fw-bold mt-2 pt-1 mb-0">
                        نام کاربری و رمز عبور دارم؟{' '}
                        <a href="/signin" class="link-danger">
                          ورود!
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
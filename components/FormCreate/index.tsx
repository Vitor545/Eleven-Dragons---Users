import { useState } from 'react'
import HeroCreate from '../HeroCreate'
import style from './FormCreate.module.scss'
import Joi from 'joi'
import tlds from 'tlds'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

const regexName: any = /^[a-zA-Z\d_]+$/

const schemaEmail = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: tlds } })
    .required(),
})

const schemaStatus = Joi.object({
  status: Joi.boolean().required(),
})

const schemaName = Joi.object({
  name: Joi.string().pattern(regexName).min(4).max(20).required(),
})

export default function FormCreate() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<boolean>()
  const [nameMensage, setNameMensage] = useState('false')
  const [emailMensage, setEmailMensage] = useState('false')
  const [statusMensage, setStatusMensage] = useState('false')
  const [nameInput, setNameInput] = useState('normal')
  const [emailInput, setEmailInput] = useState('normal')

  const isMensage: any = { true: 'block', false: 'none' }
  const classInput: any = { error: 'error_input', sucess: 'sucess_input', normal: 'normal_input' }
  const validationErrorEmail: any = schemaEmail.validate({ email }).error
  const validationErrorName: any = schemaName.validate({ name }).error
  const validationErrorStatus: any = schemaStatus.validate({ status }).error

  const validaStyleName = (value: any) => {
    if (schemaName.validate({ name: value }).error) {
      setNameInput('error')
      setNameMensage('true')
    } else {
      setNameInput('sucess')
      setNameMensage('false')
    }
  }

  const validaStyleEmail = (value: any) => {
    if (schemaEmail.validate({ email: value }).error) {
      setEmailInput('error')
      setEmailMensage('true')
    } else {
      setEmailInput('sucess')
      setEmailMensage('false')
    }
  }

  const validaStyleStatus = () => {
    if (validationErrorStatus) {
      setStatusMensage('true')
    } else {
      setStatusMensage('false')
    }
  }

  const onChange = ({ target }: any) => {
    if (target.id === 'email') {
      setEmail(target.value)
      validaStyleEmail(target.value)
    }
    if (target.id === 'name') {
      setName(target.value)
      validaStyleName(target.value)
    }
  }

  const onClick = () => {
    validaStyleStatus()
    validaStyleEmail(email)
    validaStyleName(name)
    if (validationErrorEmail || validationErrorName || validationErrorStatus) {
      toast.error('Corrija os erros antes de enviar!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        theme: 'dark',
        draggable: true,
        progress: undefined,
      })
      return
    }
    toast.success('Usu??rio Criado com Sucesso!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      theme: 'dark',
      draggable: true,
      progress: undefined,
    })

    const peopleExists = localStorage.getItem('people')
    const dateExists = peopleExists === null ? [] : JSON.parse(peopleExists)
    dateExists.push({ name, email, status })
    localStorage.setItem('people', JSON.stringify(dateExists))
  }

  const isClick = (e: any) => {
    const statusType: any = { inactive: false, active: true }
    setStatus(statusType[e.target.id])
  }

  return (
    <section className={style.form}>
      <div className={`container ${style.form_container}`}>
        <div>
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className={style.form_main}
            data-testid={'form_create'}
          >
            <div className={style.form_header}>
              <h2>Cadastre um novo usu??rio</h2>
              <p>Se cadastre agora e fa??a parte do nosso time</p>
            </div>
            <div className={style.form_labels}>
              <label htmlFor="name">
                Nome
                <input
                  type="text"
                  id="name"
                  data-testid={'form_create_input_name'}
                  onChange={onChange}
                  className={classInput[nameInput]}
                />
                <span style={{ display: isMensage[nameMensage] }}>
                  Somente alfanum??ricos e underscore de 4 a 20 letras
                </span>
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="text"
                  id="email"
                  data-testid={'form_create_input_email'}
                  onChange={onChange}
                  className={classInput[emailInput]}
                />
                <span style={{ display: isMensage[emailMensage] }}>
                  O email deve ter o formato xxxx@yyyy.zzz
                </span>
              </label>
              <label htmlFor="email">
                Status
                <div className={style.button_types}>
                  <input type="radio" name="active" id="active" onClick={isClick} />
                  <label
                    htmlFor="active"
                    className="btn_radio"
                    data-testid={'form_create_button_status_active'}
                  >
                    ATIVO
                  </label>
                  <input type="radio" name="active" id="inactive" onClick={isClick} />
                  <label
                    htmlFor="inactive"
                    className="btn_radio"
                    data-testid={'form_create_button_status_inactive'}
                  >
                    INATIVO
                  </label>
                </div>
                <span style={{ display: isMensage[statusMensage] }}>
                  Selecione uma op????o de status
                </span>
              </label>
            </div>
            <div className={style.button_form}>
              <button onClick={onClick} className="btn" data-testid={'form_create_button'}>
                CRIAR
              </button>
            </div>
          </form>
        </div>
        <div className={style.hero_create}>
          <HeroCreate />
        </div>
      </div>
    </section>
  )
}

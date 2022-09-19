import { Provider } from 'react-redux'
import CreateUserPage from '../../components/CreateUserPage'
import store from '../../store'

export default function CreateUser() {
  return (
    <Provider store={store}>
      <CreateUserPage />
    </Provider>
  )
}

import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header'
import Hero from '../Hero'
import TextInfinite from "../TextInfinite";
import Users from "../Users";
import { RootState } from "../../store";
import { asyncGetUsers } from '../../store/Users.store';
import Loading from '../Loading.tsx'
import IUser from "../../types/User.interface";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function HomePage() {
  const dispatch = useDispatch()
  const {users} = useSelector((state: RootState) => state.users)
  const [isSearch, setIsSearch] = useState(false)
  const [userFilter, setUserFilter] = useState<IUser[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUsers = () => dispatch(asyncGetUsers())
    getUsers()
    setIsLoading(false)
  }, [])

  const onChange = (value: string ) => {
    setIsSearch(true)
    const valueUpper = value.toUpperCase()
    const filterUser = users.filter((user) => user.name.toUpperCase().includes(valueUpper))
    setUserFilter(filterUser)
  }

  if(isLoading) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>Início - Usuários</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onChange={onChange}/>
      <Hero />
      <TextInfinite />
      <Users users={isSearch ? userFilter : users}/>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </>
  )
}

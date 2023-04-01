import React, { useEffect } from 'react'
import Header from '../component/Header'
import Dash from './Dash'
import DashMobile from './DashMobile'
import { useMediaQuery } from '@mui/material';
  const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <>
    {matches?<Dash />:<DashMobile />}
    </>
  )
}

export default Profile
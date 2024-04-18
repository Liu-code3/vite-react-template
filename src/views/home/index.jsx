import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changAgeAction } from '@/store/modules/home'


const Home = memo(() => {
  const userInfo = useSelector(state => state.home.userInfo)

  const dispatch = useDispatch()
  const changeAge = () => {
    dispatch(changAgeAction(1))
  }

  return (
    <div>
      <h2>Home</h2>
      <span>name: { userInfo.name }</span>
      <span>age: { userInfo.age }</span>
      <button onClick={changeAge}>+1</button>
    </div>
  )
})

export default Home


import './App.css'
import Menu from './assets/components/menu/menu'



function App() {
  

  return (
    <>
     <div className='bg-gradient-to-t from-fuchsia-900 to-red-600  h-full'>
          <Menu></Menu>
          <div className=' flex justify-around '>
                <div className=' text-white w-1/2 '>
                    <h1  className=' font-bold'>UniTv Pro Recarga Oficial . Compre aqui e tenha a sua conta ativada imediatamente!</h1>
                    <p className='  font-light'>Recarregue seu plano de forma fácil e rápida com entrega imediata</p>
                    <button type="button" className=' py-3 px-4 bg-white rounded-lg'><a className=' text-black font-extralight'>Comprar Recarga</a></button>
                </div>
                <div>
                    <img src="../" alt="" />
                </div>
          </div>
     </div>
    </>
  )
}

export default App

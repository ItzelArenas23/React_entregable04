import React from 'react'

const UserCard = ({user, deleteUser, handleClickEdit}) => {
  return (
    <article className='w-[381px] h-[470px] rounded border-solid border-2 py-8 px-3'>
        <div className='p-2'>
          <img className='w-[100px] aspect-[4/5] object-cover 
          mx-auto rounded-md' src={user.image_url ? user.image_url : "/images/noProfile.jpg"} alt="User image" />
        </div>
        <h3 className="py-2 px-3 font-['Helvetica Neue'] font-medium text-2xl leading-8 text-[#0F0F2D]">{user.first_name} {user.last_name}</h3>
        <hr />
        <ul className='py-2 px-3'>
          <li>
            <h4 className='text-[#D3D3D3]'>CORREO</h4>
            <span>{user.email}</span>
          </li>
          <li className='py-3'>
            <h4 className='text-[#D3D3D3]'>CUMPLEAÑOS</h4>
            <span><i className='bx bx-gift text-xl mr-2'></i></span>
             {user.birthday}
          </li>
        </ul>
        <hr />
        <div className='py-3 flex flex-row justify-end'>
          <button className='w-[43px] h-[43px] bg-[#D85D5D] text-xl rounded hover:bg-red-600 ' onClick={() => deleteUser(user.id)}>
            <i className='bx bxs-trash text-white'></i>
          </button>
          <button className='w-[43px] h-[43px] bg-[#F7F7F7] border-solid border-2 text-xl rounded hover:bg-gray-400 mx-3' onClick={() => handleClickEdit(user)}>
            <i className='bx bxs-pencil'></i>
          </button>
        </div>
    </article>
  )
}

export default UserCard
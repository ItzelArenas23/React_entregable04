import React from "react";

const Header = ({setIsShowForm}) => {

    const handleClickShowModal = () => {
        setIsShowForm((isShowForm) => !isShowForm)
    }

  return (
    <header className="flex justify-between p-[50px] max-[640px]:flex-col gap-5 pl-2">
      <h1 className="font-['Helvetica Neue'] font-bold text-5xl leading-10 text-[#0F0F2D]">Usuarios</h1>
      <button onClick={handleClickShowModal}
        className="bg-purple-p text-white p-2 
            hover:bg-purple-p/90 transition-colors text-sm max-[640px]:max-w-max pl-2"><i className='bx bx-plus mx-1'></i>
        Crear nuevo usuario
      </button>
    </header>
  );
};

export default Header;

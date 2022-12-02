import { useForm } from "react-hook-form";

const SignUp = () => {

    const {register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    };

    return (
        <>
            <header className="flex w-full items-center mt-[2.5rem] text-[#495551] font-medium">
                <hr className="border-t-[1.5px] border-black-200 w-[90%]" />
                <h1 className="text-2xl px-4 min-w-[175px]">Crear Cuenta</h1>
                <hr className="border-t-[1.5px] border-black-200 w-[90%]" />
            </header>
            <main className="flex flex-col items-center bg-[#b6e2d340] rounded-lg w-[60%] mx-auto py-[3rem] px-[2rem] my-[2rem]">
                <form onSubmit={handleSubmit(onSubmit)} className="login-form space-y-7 w-[75%] mx-auto">
                    <input name="nombre" {...register('nombre')} type="email" placeholder="Nombres" autoComplete="off" />
                    <input name="email" {...register('email')} type="email" placeholder="Correo Electrónico" autoComplete="off" />
                    <input name="contraseña" {...register('contraseña')} type="password" placeholder="Contraseña" autoComplete="off" />
                    <button type="submit" className="w-[45%] h-[40px] rounded-lg text-sm text-[#495551] bg-[#b6e2d3] mt-[2rem]">Crear Cuenta</button>
                </form>

            </main>
        </>
    )
}

export default SignUp;
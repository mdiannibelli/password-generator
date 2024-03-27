import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CopyIcon from './components/icons/CopyIcon';
import useForm from './hooks/useForm';

export default function App() {
    const [values, password, handleChange, handleSubmit, handleCopy] = useForm();
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
          <div className="mb-12">
            <h1 className="uppercase text-4xl font-[500] text-gray-300">Generador de contraseñas</h1>
          </div>
          <div className="max-w-[480px] w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full bg-gray-800 border-2 border-gray-800 rounded-xl p-6">
              <div className="flex justify-between items-center border-2 rounded-md p-2 border-gray-600">
                <input type="text" name="password" placeholder="Mínimo 6 carácteres" value={password} readOnly className="rounded-md p-2 bg-gray-800 select-none outline-none text-white text-xl" />
                <div className="bg-gray-800 rounded-md">
                <button onClick={handleCopy}><CopyIcon/></button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="chracters" className="bg-gray-800 p-2 text-gray-400 rounded-md">Length</label>
                <input type="number" min={6} max={18} value={values.chracters} onChange={(e) => handleChange(e, 'chracters')} name="chracters" id="chracters" className="bg-gray-800 text-gray-500 text-center rounded-md border-2 border-gray-600 w-12 outline-none" />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="mayus" className="bg-gray-800 p-2 text-gray-400 rounded-md">Mayúsculas</label>
                <input type="checkbox" name="mayus" checked={values.mayus} onChange={(e) => handleChange(e, 'mayus')} id="mayus" className="w-8 h-8" />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="minus" className="bg-gray-800 p-2 text-gray-400 rounded-md">Minúsculas</label>
                <input type="checkbox" name="minus" checked={values.minus} onChange={(e) => handleChange(e ,'minus')} id="minus" className="w-8 h-8" />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="number" className="bg-gray-800 p-2 text-gray-400 rounded-md">Números</label>
                <input type="checkbox" name="number" checked={values.number} onChange={(e) => handleChange(e, 'number')} id="number" className="w-8 h-8" />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="symbols" className="bg-gray-800 p-2 text-gray-400 rounded-md">Símbolos</label>
                <input type="checkbox" name="symbols" checked={values.symbols} onChange={(e) => handleChange(e, 'symbols')} id="symbols" className="w-8 h-8" />
              </div>
              <div>
                <button type="submit" className="text-xl text-gray-300 bg-gray-900 hover:bg-gray-700 duration-300 w-full p-2 rounded-md">Generar contraseña</button>
              </div>
            </form>
          </div>
          <ToastContainer
            position="top-center"
            theme="light"
            autoClose={1800}
          />
        </div>
      )
    }


import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

/* type Password = {
    chracters: number;
    minus: boolean;
    mayus: boolean;
    number: boolean;
    symbols: boolean;
}

type HandleChangeType = (e: ChangeEvent<HTMLInputElement>, name: string) => void;

export default function useForm() {
    const initialValues = {
        chracters: 12,
        minus: true,
        mayus: true,
        number: true,
        symbols: true
    }
    const [values, setValues] = useState<Password>(initialValues)
    const [password, setPassword] = useState<string>('')

    const minusChracters = 'abcdefghijklmnopqrstuvwxyz';
    const mayusChracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbersChracters = '0123456789';
    const specialChracters = '!@#$%&*()-_+=[]{};:,.<>?/'


    const handleChange: HandleChangeType = (e, name) => {
        setValues({
            ...values,
            [name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPassword = generatePassword(values)
        setPassword(newPassword);
    }

    const generatePassword = (values: Password) => {
        let contraseña = '';
        let letters = '';

        letters += values.minus ? minusChracters : '';
        letters += values.mayus ? mayusChracters : '';
        letters += values.number ? numbersChracters : '';
        letters += values.symbols ? specialChracters : '';

        for(let i = 0; i <= (values.chracters - 1); i++) {
            const randomNumber = Math.floor(Math.random() * letters.length);
            contraseña += letters.charAt(randomNumber + 1)
        }

        return contraseña;
    }

    const handleCopy = async() => {
        if(password) {
            await navigator.clipboard.writeText(password)
            toast.success('Contraseña Copiada!')
        } else {
            toast.error('No hay contraseña')
        }
    }


  return [values, password, handleChange, handleSubmit, handleCopy] as const
} */

type Password = {
    chracters: number,
    minus: boolean,
    mayus: boolean,
    number: boolean,
    symbols: boolean
}

type HandleChangeType = (e: ChangeEvent<HTMLInputElement>, name: string) => void;

export default function useForm() {
    const initialValues = {
        chracters: 12,
        minus: true,
        mayus: true,
        number: true,
        symbols: true,
    }
  const [values, setValues] = useState<Password>(initialValues)
  const [password, setPassword] = useState<string>('')

  const minusChracters = 'abcdefghijklmnopqrstuvwxyz'
  const mayusChracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbersChracters = '0123456789'
  const specialChracters = '!@#$%&*()-_+=[]{};:,.<>?/'

  const handleChange: HandleChangeType = (e, name) => {
    setValues({
        ...values,
        [name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPassword = generatePassword(values)
        setPassword(newPassword);
    }

    const handleCopy = async() => {
        if(password) {
            await navigator.clipboard.writeText(password)
            toast.success('Contraseña Copiada!')
        } else {
            toast.error('No hay contraseña')
        }
    }

  const generatePassword = (values:Password) => {
    let chracters = ''
    let contraseña = ''

    chracters += values.minus ? minusChracters : '';
    chracters += values.mayus ? mayusChracters : '';
    chracters += values.number ? numbersChracters : '';
    chracters += values.symbols ? specialChracters : '';

    for(let i = 0; i <= (values.chracters - 1); i++) {
        const randomNumber = Math.floor(Math.random() * chracters.length);
        contraseña += chracters.charAt(randomNumber) // accede al caracter en la posición randomNumber de 'chracters' y lo añade a la contraseña
    }
    return contraseña
  }
  return [values, password, handleChange, handleSubmit, handleCopy] as const
}


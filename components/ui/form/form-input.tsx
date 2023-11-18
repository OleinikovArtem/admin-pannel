import { UseFormRegister, FieldError } from 'react-hook-form'
import { Label } from '@/components/ui/form/label'
import { Input } from '@/components/ui/form/input'

type FormInputProps = {
  label: string
  id: string
  type: string
  placeholder?: string
  register: UseFormRegister<any>
  error: FieldError | undefined
}

export const FormInput = ({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}: FormInputProps) => {
  const errorMessage = error?.message || ''
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        className={errorMessage ? 'border-red-500' : ''}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
      />
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  )
}

import { ErrorMessage } from './styles'

type ErrorProps = {
  message: string;
  hadError: boolean;
}

export function Error({ message, hadError }: ErrorProps){
  return(
    <ErrorMessage hadError={hadError}>{ message }</ErrorMessage>
  )
}
import Button from '@/components/Button';
import { Input } from '@/components/Input';



export default function Home() {
  return (
    <div>
      <Button handleClick={(event,id)=>console.log("clicked",event)}></Button>
      <Input value="jyotir" handleChange={event => console.log(event) }></Input>
    </div>
  )
}

// if we pass a completely random string in status still it will show no error , but we only require success loading and error

// the placeholder text becomes a children

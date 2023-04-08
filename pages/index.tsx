import { Nunito } from 'next/font/google';
import { Status } from '@/components/Status';
import Heading from '@/components/Heading';
import Oscar from '@/components/Oscar';
import Button from '@/components/Button';


const handleClick = ()=>{

}
export default function Home() {
  return (
    <div>
      <Button handleClick={(event,id)=>console.log("clicked",event)}></Button>
    </div>
  )
}

// if we pass a completely random string in status still it will show no error , but we only require success loading and error

// the placeholder text becomes a children

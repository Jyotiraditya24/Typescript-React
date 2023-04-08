import { Nunito } from 'next/font/google';
import { Status } from '@/components/Status';
import Heading from '@/components/Heading';
import Oscar from '@/components/Oscar';

const font = Nunito({
  subsets: ['latin']
})
const PersonName = {
  first: 'Bruce',
  last: 'Wayne'
}

const NameList = [
  {
    first: 'Bruce',
    last: 'Wayne'
  },
  {
    first: 'Clark',
    last: 'Kent'},
  {
    first: 'Princess',
    last: 'Diana'
  }
]

export default function Home() {
  return (
    <div>
      <Status status="success"></Status>
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>PlaceHolder Text 2</Heading>
      </Oscar>
    </div>
  )
}

// if we pass a completely random string in status still it will show no error , but we only require success loading and error

// the placeholder text becomes a children

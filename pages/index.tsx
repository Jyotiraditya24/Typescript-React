import { Nunito } from 'next/font/google';
import {Greet} from "../components/Greet";
import { Person } from '@/components/Person';
import { PersonList } from '@/components/PersonList';

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
      <h2 className={`${font}`}>Hello World</h2>
      <Greet name="jyotir" messageCount={20} isLoggedIn={false}/>
      <Person name={PersonName}/>
      <PersonList names={NameList}/>
    </div>
  )
}

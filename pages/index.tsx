import Button from '@/components/Button';
import { Container } from '@/components/Container';
import { Input } from '@/components/Input';



export default function Home() {
  return (
    <div>
      <Container style={{border: '1px solid black', padding: '1rem'}}></Container>
    </div>
  )
}

// if we pass a completely random string in status still it will show no error , but we only require success loading and error

// the placeholder text becomes a children

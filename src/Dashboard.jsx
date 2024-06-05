 import { Card, CardFooter } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (<>
    <h1>Dashboard</h1>
    <div>
<Card   style={{width:"18rem", margin:"25px", boxShadow: "#fdfdfd 3px 4px 15px 6px"}}>
   <Link  to="remove-background">
    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2Fb%2Fproduct-image-cutouts-now-available&psig=AOvVaw1r2o9sZV7vE75GgkzWvgIb&ust=1717657764518000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKie9v7zw4YDFQAAAAAdAAAAABAK'   />
<CardFooter><h6 className='bg-success'>Background Remover</h6></CardFooter>
</Link></Card>
<Card   style={{width:"18rem"}}>
   <Link  to="keyboard-test">
    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2Fb%2Fproduct-image-cutouts-now-available&psig=AOvVaw1r2o9sZV7vE75GgkzWvgIb&ust=1717657764518000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKie9v7zw4YDFQAAAAAdAAAAABAK'   />
<CardFooter><h6>Keyboard Test</h6></CardFooter>
</Link></Card>
<Card   style={{width:"18rem"}}>
   <Link  to="image-compress">
    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2Fb%2Fproduct-image-cutouts-now-available&psig=AOvVaw1r2o9sZV7vE75GgkzWvgIb&ust=1717657764518000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKie9v7zw4YDFQAAAAAdAAAAABAK'   />
<CardFooter><h6>Background Remover</h6></CardFooter>
</Link></Card>
<Card   style={{width:"18rem"}}>
   <Link  to="remove-background">
    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2Fb%2Fproduct-image-cutouts-now-available&psig=AOvVaw1r2o9sZV7vE75GgkzWvgIb&ust=1717657764518000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKie9v7zw4YDFQAAAAAdAAAAABAK'   />
<CardFooter><h6>Background Remover</h6></CardFooter>
</Link></Card>
    </div>
 </> )
}

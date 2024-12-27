```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/" passHref legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" passHref legacyBehavior>
        <a>About</a>
      </Link>    </div>
  );
}

export default MyComponent; 
```
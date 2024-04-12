"use client"
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();

  // Redirect to the sign-up page
  router.push('/sign-up');
  
  // This component won't render anything as it immediately redirects
  return null;
}

export default Home;


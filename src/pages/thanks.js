import React, { useEffect } from 'react';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
const Thanks = () => {
  const router = useRouter();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div className="container">
          Thanks for submitting!  We'll get back to you shortly.
        </div>
      </Layout>
    </>
  )
}

export default Thanks;
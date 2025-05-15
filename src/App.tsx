import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { Footer } from './Components/footer/footer'
import { MainBody } from './Components/mainBody/mainBody'
import { NavBar } from './Components/navBar/navBar'

function App() {

  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // Don't refetch when window regains focus
        retry: 1,                    // Only retry failed queries once
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className='root-div'>
        <NavBar />
        <MainBody />
        <Footer />
      </div>
    </QueryClientProvider >
  )
}

export default App
